#!/bin/bash

# Script de Setup do Banco de Dados
# Creature Battle Arena

echo "🗄️  Configurando banco de dados..."
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# 1. Verificar .env
if [ ! -f .env ]; then
    echo -e "${RED}❌ Erro: Arquivo .env não encontrado!${NC}"
    exit 1
fi

# 2. Gerar Prisma Client
echo "🔧 Gerando Prisma Client..."
npm run db:generate

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro ao gerar Prisma Client${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Prisma Client gerado${NC}"

# 3. Aplicar Schema
echo ""
echo "📊 Aplicando schema ao banco..."
npm run db:push

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro ao aplicar schema${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Schema aplicado${NC}"

# 4. Executar Seed
echo ""
echo "🌱 Populando banco com dados iniciais..."
npm run db:seed

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Erro ao executar seed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Seed executado com sucesso!${NC}"

echo ""
echo "🎉 Banco de dados configurado e populado!"
echo ""
echo "Dados criados:"
echo "  • 11 criaturas (6 starters + evoluções)"
echo "  • 21 moves"
echo "  • 9 items"
echo "  • 3 áreas"
echo "  • 5 achievements"
echo ""
echo "Execute 'npm run dev' para iniciar o servidor!"

#!/bin/bash

# Script de Deploy Automatizado
# Creature Battle Arena

echo "🚀 Iniciando deploy do Creature Battle Arena..."
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 1. Verificar se .env existe
if [ ! -f .env ]; then
    echo -e "${RED}❌ Erro: Arquivo .env não encontrado!${NC}"
    echo "Copie .env.example para .env e configure as variáveis."
    exit 1
fi

# 2. Verificar se DATABASE_URL está configurada
if grep -q "postgresql://user:password@localhost" .env; then
    echo -e "${YELLOW}⚠️  Aviso: DATABASE_URL ainda está com valor padrão${NC}"
    echo "Configure a URL do seu banco Neon no arquivo .env"
    exit 1
fi

echo -e "${GREEN}✅ Arquivo .env configurado${NC}"

# 3. Instalar dependências
echo ""
echo "📦 Instalando dependências..."
npm install

# 4. Gerar Prisma Client
echo ""
echo "🔧 Gerando Prisma Client..."
npm run db:generate

# 5. Build do projeto
echo ""
echo "🏗️  Building projeto..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build concluído com sucesso!${NC}"
else
    echo -e "${RED}❌ Erro no build${NC}"
    exit 1
fi

# 6. Git commit
echo ""
echo "📝 Fazendo commit das alterações..."
git add .
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || echo "Nada para commitar"

# 7. Deploy Vercel
echo ""
echo "🌐 Fazendo deploy na Vercel..."

if command -v vercel &> /dev/null; then
    vercel --prod
else
    echo -e "${YELLOW}⚠️  Vercel CLI não instalado${NC}"
    echo "Instale com: npm i -g vercel"
    echo "Ou faça deploy via GitHub → Vercel Dashboard"
fi

echo ""
echo -e "${GREEN}🎉 Deploy concluído!${NC}"

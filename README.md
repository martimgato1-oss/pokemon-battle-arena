# Creature Battle Arena

Um MMORPG de batalhas por turnos com criaturas 100% originais. Escolha seu starter, treine, evolua e batalhe contra jogadores do mundo todo!

## Tecnologias

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL
- **Auth:** NextAuth.js
- **Realtime:** Socket.io
- **Deploy:** Vercel (frontend) + Neon/Supabase (database)

## Pré-requisitos

- Node.js 18+ (você tem v22.16.0 ✅)
- PostgreSQL (ou usar Neon/Supabase online)
- npm ou yarn

## Instalação

### 1. Clone e instale dependências

```bash
cd sitepokemon
npm install
```

### 2. Configure o banco de dados

Opção A: **PostgreSQL Local**
```bash
# Instale o PostgreSQL
# Windows: https://www.postgresql.org/download/windows/
# Crie um banco de dados:
createdb creature_battle_arena
```

Opção B: **Neon (Recomendado - Grátis)**
1. Acesse https://neon.tech
2. Crie uma conta e um novo projeto
3. Copie a connection string fornecida

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
copy .env.example .env
```

Edite o arquivo `.env` e configure:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/creature_battle_arena"
# Ou use a connection string do Neon:
# DATABASE_URL="postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/neondb"

# NextAuth (gere uma secret key aleatória)
NEXTAUTH_SECRET="sua-chave-secreta-aqui-min-32-chars"
NEXTAUTH_URL="http://localhost:3000"

# Email (opcional para MVP - para recuperação de senha)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="seu-email@gmail.com"
SMTP_PASSWORD="sua-senha-de-app"
SMTP_FROM="noreply@pokemonbattlearena.net"
```

Para gerar a `NEXTAUTH_SECRET`:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 4. Inicialize o banco de dados

```bash
# Gera o Prisma Client
npm run db:generate

# Aplica o schema ao banco
npm run db:push

# Popula o banco com dados iniciais (criaturas, moves, items, áreas)
npm run db:seed
```

### 5. Execute o projeto

```bash
npm run dev
```

Acesse: **http://localhost:3000**

## Comandos úteis

```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Build para produção
npm run start        # Executa build de produção
npm run lint         # Verifica erros de lint

npm run db:generate  # Gera o Prisma Client
npm run db:push      # Aplica schema ao banco (sem migrations)
npm run db:studio    # Abre Prisma Studio (GUI do banco)
npm run db:seed      # Popula banco com dados iniciais
```

## Estrutura do Projeto

```
sitepokemon/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rotas de autenticação
│   │   ├── login/
│   │   └── register/
│   ├── (game)/            # Rotas do jogo (protegidas)
│   │   ├── dashboard/
│   │   ├── starter/
│   │   ├── battle/
│   │   ├── inventory/
│   │   ├── shop/
│   │   ├── map/
│   │   ├── arena/
│   │   └── rankings/
│   ├── api/               # API Routes
│   │   ├── auth/
│   │   ├── creatures/
│   │   ├── battle/
│   │   ├── shop/
│   │   └── ...
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx           # Homepage
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes base (Button, Card, etc)
│   ├── game/             # Componentes específicos do jogo
│   └── layout/           # Layout components
├── lib/                   # Utilitários e lógica
│   ├── db.ts             # Prisma client
│   ├── auth/             # Configuração NextAuth
│   ├── battle/           # Engine de batalha
│   ├── utils.ts
│   └── validations/      # Schemas Zod
├── prisma/
│   ├── schema.prisma     # Schema do banco
│   └── seed.ts           # Dados iniciais
├── public/
│   ├── sprites/          # Sprites das criaturas
│   ├── icons/            # Ícones
│   └── items/            # Ícones de itens
└── package.json
```

## MVP - Funcionalidades Implementadas

### Fase 1 (Em desenvolvimento)
- [x] Autenticação (cadastro/login)
- [x] Escolha de starter (6 criaturas iniciais)
- [ ] Dashboard do jogador
- [ ] Batalha PvE básica
- [ ] Inventário
- [ ] Loja

### Roadmap
- **Fase 2:** Sistema de level, evolução, múltiplas áreas
- **Fase 3:** PvP, rankings, chat
- **Fase 4:** Eventos, achievements, missões diárias
- **Fase 5:** Admin panel, moderação

## Dados Iniciais (Seed)

O seed cria:
- **6 criaturas starter** (Emberwing, Aquafin, Leafox, Voltail, Rockjaw, Zephyra)
- **20+ moves** (ataques de todos os elementos)
- **9 items** (Potions, Revive, Evolution Stones, Boosts)
- **3 áreas** (Verdant Forest, Crystal Lake, Thunder Cave)
- **5 achievements** iniciais

## Deploy

### Vercel (Frontend + API)

```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configure as environment variables no dashboard da Vercel
```

### Database (Neon - Grátis)

1. Crie um projeto em https://neon.tech
2. Copie a connection string
3. Adicione como `DATABASE_URL` nas env vars da Vercel
4. Execute seed uma vez:
   ```bash
   npx prisma db push
   npx tsx prisma/seed.ts
   ```

## Troubleshooting

### Erro ao conectar ao banco
```bash
# Verifique se o PostgreSQL está rodando
# Windows:
services.msc  # Procure por "postgresql"

# Teste a connection string:
npx prisma db pull
```

### Erro no Prisma Client
```bash
# Regenere o client:
npm run db:generate
```

### Porta 3000 já em uso
```bash
# Mude a porta:
PORT=3001 npm run dev
```

## Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## Licença

Este projeto é 100% original e não utiliza nenhuma propriedade intelectual de terceiros (Pokémon, etc).

MIT License - Sinta-se livre para usar e modificar.

## Contato

- Website: www.pokemonbattlearena.net (quando lançado)
- GitHub: [seu-github]
- Discord: [servidor-discord]

---

**Desenvolvido com ❤️ usando Next.js e TypeScript**

# 🚀 COLOCAR ONLINE AGORA - 3 COMANDOS

## Você Precisa:

1. ✅ Conta no Neon.tech (banco de dados grátis)
2. ✅ Conta no Vercel (hosting grátis)
3. ✅ 10 minutos

---

## 📝 PASSO A PASSO RÁPIDO

### 1. Criar Banco Neon (2 min)

```
1. Acesse: https://neon.tech
2. Clique: "Sign Up" (use GitHub)
3. Crie projeto: "creature-battle-arena"
4. COPIE a Connection String
```

### 2. Configurar .env (1 min)

Abra o arquivo `.env` e cole:

```env
DATABASE_URL="cole-a-url-do-neon-aqui"
NEXTAUTH_SECRET="cole-uma-chave-aleatoria-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

**Gerar secret key:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 3. Setup do Banco (2 min)

**UM COMANDO FAZ TUDO:**

```bash
npm run db:setup
```

Aguarde aparecer: `✅ Seed completed!`

### 4. Testar Local (1 min)

```bash
npm run dev
```

Acesse: http://localhost:3000

✅ Deve aparecer a homepage!

### 5. Deploy Vercel (4 min)

**Método 1: GitHub + Vercel (Recomendado)**

```bash
# 1. Criar repo no GitHub
# Acesse: https://github.com/new
# Nome: creature-battle-arena

# 2. Push código
git remote add origin https://github.com/SEU-USUARIO/creature-battle-arena.git
git branch -M main
git push -u origin main

# 3. Deploy na Vercel
# Acesse: https://vercel.com
# Clique: "New Project"
# Importe o repositório
# Configure 3 env vars:
#   DATABASE_URL = (url do neon)
#   NEXTAUTH_SECRET = (a secret gerada)
#   NEXTAUTH_URL = https://SEU-PROJETO.vercel.app
# Clique: "Deploy"

# 4. Após deploy, atualize NEXTAUTH_URL com a URL real
# E re-deploy
```

**Método 2: Vercel CLI (Mais Rápido)**

```bash
# Instalar
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Adicionar env vars
vercel env add DATABASE_URL production
# Cole a URL do Neon

vercel env add NEXTAUTH_SECRET production
# Cole a secret

# Deploy produção
vercel --prod

# Pegue a URL e atualize NEXTAUTH_URL
vercel env add NEXTAUTH_URL production
# Cole: https://sua-url.vercel.app

# Re-deploy
vercel --prod
```

---

## ✅ PRONTO!

Seu site está online em: `https://seu-projeto.vercel.app`

---

## 🎯 Comandos Úteis

```bash
# Setup completo do banco (gera, aplica schema, seed)
npm run db:setup

# Testar localmente
npm run dev

# Build para produção
npm run build

# Deploy produção
npm run deploy

# Deploy preview
npm run deploy:preview

# Visualizar banco (GUI)
npm run db:studio
```

---

## 💡 Dicas

### Erro ao conectar banco?
```bash
# Teste a conexão
npx prisma db pull
```

### Erro no deploy?
```bash
# Veja os logs na Vercel
# Dashboard → Deployments → Click no deploy → Logs
```

### Resetar banco?
```bash
npm run db:push --force-reset
npm run db:seed
```

---

## 📞 Quer Implementar Features?

Agora que está online, podemos adicionar:

1. **Sistema de Autenticação** (registro/login)
2. **Escolha de Starter** (6 criaturas)
3. **Sistema de Batalha** (turn-based)
4. **Inventário & Loja**
5. **PvP & Rankings**
6. **Chat & Eventos**

Basta pedir: "Implemente [feature]"

---

## 🎉 Parabéns!

Você tem um MMORPG de criaturas rodando em produção!

**Custo:** $0/mês (Vercel + Neon free tier)
**Tempo:** ~10 minutos
**Próximo nível:** Desenvolver o MVP completo

---

**Última atualização:** 27/12/2025

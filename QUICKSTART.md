# ⚡ Quick Start - Deploy em 10 Minutos

## 📋 Checklist de Deploy

### ✅ PASSO 1: Criar Banco de Dados (2 min)

1. Acesse: **https://neon.tech**
2. Clique em **"Sign Up"** (use GitHub para rapidez)
3. Clique em **"Create a project"**
4. Copie a **Connection String** (parece com isso):
   ```
   postgresql://user:abc123@ep-cool-name.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

### ✅ PASSO 2: Configurar Localmente (1 min)

1. **Gere uma secret key:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

2. **Edite o arquivo `.env`:**
   ```env
   DATABASE_URL="cole-aqui-a-url-do-neon"
   NEXTAUTH_SECRET="cole-aqui-a-secret-gerada"
   NEXTAUTH_URL="http://localhost:3000"
   ```

### ✅ PASSO 3: Setup do Banco (2 min)

Execute **um comando de cada vez**:

```bash
npm run db:generate
```
✅ Aguarde: "Generated Prisma Client"

```bash
npm run db:push
```
✅ Aguarde: "Your database is now in sync"

```bash
npm run db:seed
```
✅ Aguarde: "✅ Seed completed!"

### ✅ PASSO 4: Testar Localmente (1 min)

```bash
npm run dev
```

Abra: **http://localhost:3000**

Deve aparecer a homepage com:
- ✅ Gradiente azul/roxo/preto
- ✅ Logo "Creature Battle Arena"
- ✅ Botões "Login" e "Sign Up"
- ✅ Ícones de elementos (Fogo, Água, Planta, Elétrico)

**Se tudo apareceu, continue! ✅**

### ✅ PASSO 5: Deploy na Vercel (4 min)

**Opção A: Via Interface (Mais Fácil)**

1. Crie uma conta no GitHub (se não tiver)
2. Crie um repositório: https://github.com/new
   - Nome: `creature-battle-arena`
   - Privado ou Público (sua escolha)
   - Clique em **"Create repository"**

3. **Faça push do código:**
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/creature-battle-arena.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy na Vercel:**
   - Acesse: https://vercel.com
   - Clique em **"Add New... → Project"**
   - Selecione seu repositório
   - Clique em **"Import"**

5. **Configure Environment Variables:**
   - Clique em **"Environment Variables"**
   - Adicione estas 3 variáveis:

   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | Cole a URL do Neon |
   | `NEXTAUTH_SECRET` | Cole a secret gerada |
   | `NEXTAUTH_URL` | `https://SEU-PROJETO.vercel.app` |

   *Nota: NEXTAUTH_URL você vai pegar depois do primeiro deploy*

6. Clique em **"Deploy"**

7. Aguarde ~2-3 minutos

8. **Pegue a URL do projeto** (ex: `https://creature-battle-arena-xxx.vercel.app`)

9. **Atualize NEXTAUTH_URL:**
   - Volte em Settings → Environment Variables
   - Edite `NEXTAUTH_URL` e cole a URL real
   - Clique em **"Save"**

10. **Re-deploy:**
    - Vá em Deployments
    - Clique nos 3 pontinhos do último deploy
    - Clique em **"Redeploy"**

---

**Opção B: Via CLI (Mais Rápido)**

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# Responda as perguntas:
# ? Set up and deploy? Yes
# ? Link to existing project? No
# ? What's your project's name? creature-battle-arena
# ? In which directory is your code located? ./

# 4. Adicionar env vars
vercel env add DATABASE_URL production
# Cole a URL do Neon

vercel env add NEXTAUTH_SECRET production
# Cole a secret

# 5. Deploy produção
vercel --prod

# 6. Copie a URL que aparecer
# 7. Atualize NEXTAUTH_URL
vercel env add NEXTAUTH_URL production
# Cole: https://sua-url.vercel.app

# 8. Re-deploy
vercel --prod
```

---

## 🎉 PRONTO!

Acesse sua URL do Vercel: **https://seu-projeto.vercel.app**

Você deve ver o site funcionando!

---

## ⚠️ Problemas Comuns

### "Cannot connect to database"
- Verifique se a DATABASE_URL está correta
- Teste localmente primeiro: `npm run dev`

### "NEXTAUTH_SECRET required"
- Adicione a variável na Vercel
- Settings → Environment Variables → Add

### Homepage não carrega
- Abra o console (F12)
- Veja o erro
- Geralmente é env var faltando

### Build falha
- Verifique o log de build na Vercel
- Geralmente é um erro de TypeScript ou import

---

## 📞 Próximos Passos

Agora que está online, você pode:

1. **Implementar Autenticação:**
   - Sistema de registro/login
   - NextAuth.js

2. **Criar Sistema de Starter:**
   - Escolher criatura inicial
   - Gerar stats

3. **Desenvolver Batalhas:**
   - Sistema turn-based
   - Cálculo de dano

4. **Adicionar Features:**
   - Inventário
   - Loja
   - PvP
   - Chat

---

## 🔗 Links Úteis

- **Seu Site:** https://seu-projeto.vercel.app
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Neon Console:** https://console.neon.tech
- **Docs Next.js:** https://nextjs.org/docs
- **Docs Prisma:** https://www.prisma.io/docs

---

**Tempo total:** ~10 minutos ⚡

**Custo:** $0/mês (Vercel + Neon free tier) 💰

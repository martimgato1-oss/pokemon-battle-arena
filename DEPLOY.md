# 🚀 Guia de Deploy - Creature Battle Arena

## Passo a Passo para Colocar Online

### 1️⃣ Criar Banco de Dados no Neon (5 minutos)

1. **Acesse:** https://neon.tech
2. **Clique em:** "Sign Up" (pode usar GitHub)
3. **Crie um novo projeto:**
   - Nome: `creature-battle-arena`
   - Region: `US East (Ohio)` (mais próximo do Brasil)
4. **Copie a Connection String:**
   - Na página do projeto, clique em "Connection String"
   - Copie a URL que parece com:
   ```
   postgresql://user:password@ep-xxx-xxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
5. **IMPORTANTE:** Guarde essa URL, vamos usar em seguida!

---

### 2️⃣ Configurar Variáveis de Ambiente Localmente

1. **Abra o arquivo `.env` que já está criado**

2. **Gere uma NEXTAUTH_SECRET:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```
   Copie o resultado.

3. **Edite `.env` com seus valores:**
   ```env
   DATABASE_URL="cole-aqui-a-url-do-neon"
   NEXTAUTH_SECRET="cole-aqui-a-secret-gerada"
   NEXTAUTH_URL="http://localhost:3000"
   ```

---

### 3️⃣ Aplicar Schema e Seed no Banco

Execute estes comandos **na ordem**:

```bash
# 1. Gerar o Prisma Client
npm run db:generate

# 2. Aplicar o schema ao banco Neon
npm run db:push

# 3. Popular com dados iniciais
npm run db:seed
```

**Você deve ver:**
```
🌱 Starting seed...
Creating moves...
Creating creatures...
Creating items...
Creating areas...
Creating achievements...
✅ Seed completed!
```

---

### 4️⃣ Testar Localmente

```bash
npm run dev
```

Acesse: http://localhost:3000

Você deve ver a homepage funcionando!

---

### 5️⃣ Inicializar Git (se ainda não fez)

```bash
git init
git add .
git commit -m "Initial commit - Creature Battle Arena MVP"
```

---

### 6️⃣ Deploy na Vercel

**Opção A: Via GitHub (Recomendado)**

1. **Crie um repositório no GitHub:**
   - Acesse: https://github.com/new
   - Nome: `creature-battle-arena`
   - Deixe **privado** se preferir
   - Clique em "Create repository"

2. **Faça push do código:**
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/creature-battle-arena.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy na Vercel:**
   - Acesse: https://vercel.com
   - Clique em "New Project"
   - Importe o repositório do GitHub
   - **Configure as Environment Variables:**
     - `DATABASE_URL`: Cole a URL do Neon
     - `NEXTAUTH_SECRET`: Cole a secret gerada
     - `NEXTAUTH_URL`: `https://seu-projeto.vercel.app` (a Vercel vai mostrar)
   - Clique em "Deploy"

**Opção B: Via Vercel CLI (Mais Rápido)**

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# Durante o deploy, responda:
# ? Set up and deploy? Yes
# ? Which scope? [Sua conta]
# ? Link to existing project? No
# ? What's your project's name? creature-battle-arena
# ? In which directory is your code located? ./
# ? Want to override the settings? No

# 4. Adicionar variáveis de ambiente
vercel env add DATABASE_URL
# Cole a URL do Neon

vercel env add NEXTAUTH_SECRET
# Cole a secret gerada

vercel env add NEXTAUTH_URL
# Cole a URL do projeto (ex: https://creature-battle-arena.vercel.app)

# 5. Deploy em produção
vercel --prod
```

---

### 7️⃣ Atualizar NEXTAUTH_URL

Depois do primeiro deploy:

1. **Copie a URL do projeto** (ex: `https://creature-battle-arena-xxx.vercel.app`)

2. **Atualize a variável no Vercel:**
   - Dashboard da Vercel → Seu projeto → Settings → Environment Variables
   - Edite `NEXTAUTH_URL` para a URL real
   - OU via CLI:
   ```bash
   vercel env add NEXTAUTH_URL production
   # Cole: https://seu-projeto.vercel.app
   ```

3. **Re-deploy:**
   ```bash
   vercel --prod
   ```

---

## ✅ Verificar se está tudo funcionando

Acesse sua URL do Vercel e verifique:

1. ✅ Homepage carrega
2. ✅ Sem erros no console
3. ✅ Botões "Sign Up" e "Login" aparecem

---

## 🐛 Troubleshooting

### Erro: "PrismaClientInitializationError"
- **Causa:** DATABASE_URL incorreta
- **Solução:** Verifique a connection string do Neon

### Erro: "NEXTAUTH_SECRET missing"
- **Causa:** Variável de ambiente não configurada
- **Solução:** Adicione via Vercel dashboard ou CLI

### Build falha: "Cannot find module '@prisma/client'"
- **Causa:** Prisma não foi gerado
- **Solução:** Vercel faz isso automaticamente, mas pode adicionar ao build:
  ```json
  // package.json
  "scripts": {
    "build": "prisma generate && next build"
  }
  ```

### Database vazio em produção
- **Causa:** Seed não foi executado
- **Solução:** Execute localmente apontando para o banco Neon:
  ```bash
  # Com a DATABASE_URL do Neon no .env
  npm run db:seed
  ```

---

## 📊 Custos

- **Neon Database:** FREE (até 0.5GB)
- **Vercel Hosting:** FREE (até 100GB bandwidth)
- **Total:** **$0/mês** 🎉

---

## 🔄 Próximos Deploys

Depois de configurado, basta:

```bash
git add .
git commit -m "Descrição das mudanças"
git push

# Vercel faz deploy automático!
# Ou via CLI:
vercel --prod
```

---

## 🎯 URLs Importantes

Após o deploy, anote:

- **Produção:** https://seu-projeto.vercel.app
- **Neon Dashboard:** https://console.neon.tech
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Repo:** https://github.com/seu-usuario/creature-battle-arena

---

## 📝 Checklist Final

- [ ] Conta criada no Neon
- [ ] Database criada e connection string copiada
- [ ] `.env` configurado localmente
- [ ] `npm run db:generate` executado
- [ ] `npm run db:push` executado com sucesso
- [ ] `npm run db:seed` executado com sucesso
- [ ] Testado localmente (`npm run dev`)
- [ ] Git inicializado e commit feito
- [ ] Repositório no GitHub criado (opcional)
- [ ] Deploy na Vercel realizado
- [ ] Environment variables configuradas na Vercel
- [ ] `NEXTAUTH_URL` atualizada com URL real
- [ ] Re-deploy feito
- [ ] Site acessível na URL pública
- [ ] Sem erros no console

---

**🚀 PRONTO! Seu jogo está online!**

Próximo passo: Implementar as funcionalidades do MVP (auth, starter, battle, etc.)

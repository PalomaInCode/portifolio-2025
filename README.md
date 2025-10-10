# Portfólio Pessoal 2025 | PalomaInCode
✨ [Acesse aqui!](https://palomaincode.github.io/portifolio-2025/)

Portfólio desenvolvido com **React**, **Vite**, **TypeScript**, **TailwindCSS** e componentes ShadCN/Radix UI.

Este projeto possui deploy configurado para **GitHub Pages**.

---

## 🌳 Estrutura do Projeto

```

.
├─ dist/                  # Build final gerado pelo Vite
├─ public/                # Assets públicos
├─ src/                   # Código-fonte
│  ├─ components/         # Componentes UI
│  ├─ pages/              # Páginas do projeto
│  └─ hooks/              # Hooks personalizados
├─ package.json
├─ tsconfig.json
├─ tailwind.config.ts
└─ vite.config.ts

````

---

## ⚡ Scripts Disponíveis

No terminal, na raiz do projeto:

### Desenvolvimento

```bash
npm install
npm run dev
````

O projeto será iniciado em `http://localhost:5173`.

### Build para produção

```bash
npm run build
```

O build final será gerado na pasta `dist/`.

### Preview do build

```bash
npm run preview
```

Serve o conteúdo de `dist` localmente para teste.

### Lint

```bash
npm run lint
```

Verifica possíveis problemas de lint no código.

---

## 🚀 Deploy para GitHub Pages

O projeto já está configurado para deploy usando `gh-pages`.

1. Certifique-se de que o build foi gerado:

```bash
npm run build
```

2. Faça o deploy:

```bash
npm run deploy
```

Isso irá:

* Forçar o commit do conteúdo de `dist/` (com `git add -f dist` e `git commit -m 'build for gh-pages'`)
* Enviar para a branch `gh-pages` no GitHub (`git push -f origin gh-pages`).

O site ficará disponível em:

```
https://PalomaInCode.github.io/portifolio-2025/
```

---

## 🧩 Dependências Principais

* React 18
* TypeScript
* Vite
* TailwindCSS
* Radix UI / ShadCN Components
* React Router DOM
* Recharts
* Sonner
* Lucide Icons

---

## 📂 Estrutura de Componentes e Páginas

* **src/components** → Componentes reutilizáveis
* **src/pages** → Páginas (Ex: `Aprendizados.tsx`, `Index.tsx`, `NotFound.tsx`)
* **src/hooks** → Hooks personalizados (Ex: `use-toast`, `use-mobile`)

---

## ⚠️ Observações

* O conteúdo de `dist/` é **gerado automaticamente**. Não deve ser alterado manualmente.
* O deploy sobrescreve a branch `gh-pages`.
* Para testes locais, utilize sempre `npm run dev`.

---

PalomaInCode © 2025

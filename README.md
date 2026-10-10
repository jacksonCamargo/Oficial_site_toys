<div align="center">

<img src="public/logo.png" alt="Toys Sublimação" width="96" />

# Toys Sublimação

Site institucional da Toys Sublimação — produtos personalizados por sublimação (canecas, camisetas, chaveiros e muito mais), com design dark/gold e pedidos encaminhados direto pelo WhatsApp.

**[🔗 Ver demo ao vivo](#)** · [Reportar bug](#) · [Sugerir melhoria](#)

</div>

---

## Sobre o projeto

Landing page institucional construída para apresentar o catálogo da Toys Sublimação, com uma identidade visual fiel à marca (preto e dourado) e sem o visual genérico de template.

- Catálogo com busca e filtro por categoria
- Modal de produto com CTA direto para o WhatsApp
- Seção "Como funciona" explicando o fluxo de pedido
- Animações suaves de entrada ao rolar a página
- Dark mode nativo

> Este site é apenas institucional (sem backend/admin por enquanto). Ele é a porta de entrada para o [sistema de personalização e pedidos](#) da Toys Sublimação, que já existe como projeto separado.

## Stack

- [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)

## Rodando localmente

Pré-requisitos: [Node.js](https://nodejs.org) 18+.

```bash
# instalar dependências
npm install

# subir o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

```bash
# build de produção
npm run build
npm run start
```

## Estrutura do projeto

```
app/
  layout.tsx       # layout raiz, metadata, fontes
  page.tsx          # monta as seções da home
  globals.css        # tokens de cor, tema dark/gold
components/
  Header.tsx         # navegação + logo
  Hero.tsx           # chamada principal + destaques
  Products.tsx        # catálogo com busca/filtro
  ProductCard.tsx      # card individual de produto
  ProductModal.tsx      # modal de detalhes do produto
  HowItWorks.tsx        # seção "como funciona"
  About.tsx               # sobre a empresa
  Contact.tsx              # informações de contato
  Footer.tsx                # rodapé
  Reveal.tsx                 # animação de entrada ao rolar
lib/
  site-data.ts               # produtos, contato e links (fonte única de dados)
public/
  logo.png                    # logo da marca
  produtos/                    # fotos reais dos produtos
```

## Editando conteúdo

Produtos, preços, categorias e dados de contato ficam centralizados em [`lib/site-data.ts`](lib/site-data.ts) — não é necessário mexer nos componentes para atualizar o catálogo ou os links de contato.

## SEO & Open Graph

O layout já exporta `metadata` completo (`app/layout.tsx`): título, descrição, favicon/ícones gerados a partir da logo real e uma imagem de compartilhamento (`public/og-image.png`) — é o que aparece ao colar o link no WhatsApp/Instagram.

> ⚠️ Antes de publicar, troque `siteUrl` em [`lib/site-data.ts`](lib/site-data.ts) pela URL final do deploy (hoje está como placeholder).

## Roadmap

- [ ] Depoimentos de clientes reais
- [ ] Deploy no Vercel com domínio próprio
- [x] Favicon e meta tags de Open Graph/SEO
- [ ] Formulário de contato funcional
- [ ] Backend + painel admin (futuro)
- [ ] Integração com o sistema de pedidos/personalização

## Deploy

O deploy recomendado é via [Vercel](https://vercel.com/new), criadora do Next.js — basta importar este repositório.

---

<div align="center">
<sub>Feito por <a href="https://github.com/jacksonCamargo">Jackson Anderson</a></sub>
</div>

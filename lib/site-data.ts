export const contato = {
  telefoneExibicao: "(11) 91928-6674",
  whatsapp: "https://wa.me/5511919286674",
  whatsappMensagem: (texto: string) =>
    `https://wa.me/5511919286674?text=${encodeURIComponent(texto)}`,
  email: "sublimastoys1@hotmail.com",
  cidade: "São Paulo, SP",
  instagram:
    "https://www.instagram.com/toys1_sublimacao?igsh=MWp5ZGJiYnFwbm83bA==",
  tiktok: "https://tiktok.com/@toys1_syblimacao",
};

export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
  destaque?: boolean;
};

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Caneca Mágica",
    descricao:
      "Muda de cor com líquidos quentes, revelando a estampa aos poucos. Ideal para presentes marcantes.",
    preco: 55.0,
    categoria: "Canecas",
    imagem: "/produtos/caneca-magica.png",
    destaque: true,
  },
  {
    id: 2,
    nome: "Camiseta",
    descricao: "100% algodão, pronta para sublimação com designs personalizados e acabamento macio.",
    preco: 55.0,
    categoria: "Roupas",
    imagem: "/produtos/camiseta.png",
  },
  {
    id: 3,
    nome: "Chaveiro",
    descricao: "Personalizado com fotos ou artes, acabamento resistente. Ótimo para presentes em grupo.",
    preco: 7.5,
    categoria: "Acessórios",
    imagem: "/produtos/chaveiros.png",
  },
  {
    id: 4,
    nome: "Quadro Personalizado",
    descricao: "Sua foto favorita impressa com qualidade de galeria, pronta para decorar qualquer ambiente.",
    preco: 39.9,
    categoria: "Decoração",
    imagem: "/produtos/quadro.png",
    destaque: true,
  },
  {
    id: 5,
    nome: "Squeeze",
    descricao: "Estrutura em alumínio leve, personalizado por sublimação. Perfeito para treino e dia a dia.",
    preco: 45.0,
    categoria: "Esportes",
    imagem: "/produtos/squeeze.png",
  },
  {
    id: 6,
    nome: "Copo Térmico",
    descricao: "Mantém a temperatura por horas, com a estampa que você escolher.",
    preco: 55.0,
    categoria: "Térmicos",
    imagem: "/produtos/copo-termico.png",
  },
  {
    id: 7,
    nome: "Camisa Poliéster",
    descricao: "Modelo raglan em poliéster, confortável, durável e ideal para estampas vibrantes.",
    preco: 35.0,
    categoria: "Roupas",
    imagem: "/produtos/camisa-poliester.png",
  },
  {
    id: 8,
    nome: "Caneca Colorida",
    descricao: "Interior e alça coloridos, disponível em diversas cores para destacar sua estampa.",
    preco: 35.0,
    categoria: "Canecas",
    imagem: "/produtos/caneca-colorida.png",
  },
];

export const categorias = ["Todos", ...Array.from(new Set(produtos.map((p) => p.categoria)))];

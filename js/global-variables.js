// ----------------------- GLOBAL VARIABLES ----------------------- //

const brazilCurrency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});
const cartInfo = {
  amount: 0,
  total: 0
};
const cardsTypes = [
  "Todos",
  "Camisetas",
  "Jaquetas"
];
const cardsInfoList = [
  {
    type: cardsTypes[2],
    title: "Lightweight Jacket",
    image: "img/lightweight-jacket.jpg",
    description: "Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante...",
    price: 100
  },
  {
    type: cardsTypes[2],
    title: "Elegance Jacket",
    image: "img/elegance-jacket.jpg",
    description: "Roupas elegantes para eventos especiais, trazendo sofisticação e uma boa impressão de primeira...",
    price: 150
  },
  {
    type: cardsTypes[1],
    title: "Over Shirt",
    image: "img/over-shirt.jpg",
    description: "Adicione muita energia ao seu guarda roupa do dia a dia com esta camiseta sensacional...",
    price: 120
  },
  {
    type: cardsTypes[1],
    title: "Super Over Shirt",
    image: "img/super-over-shirt.jpg",
    description: "Adicione muita energia ao seu guarda roupa do dia a dia com esta camiseta sensacional...",
    price: 130
  },
  {
    type: cardsTypes[2],
    title: "Minimal Jacket",
    image: "img/minimal-jacket.jpg",
    description: "Adicione elegância e estilo em seu guarda roupa com nossas camiseta de manga longa basicas...",
    price: 140
  },
  {
    type: cardsTypes[1],
    title: "Weather Shirts",
    image: "img/weather-shirts.jpg",
    description: "Cores vibrantes e uma energia sem igual é o que você precisa ter no seu guardada roupa de primavera...",
    price: 130.50
  }
];
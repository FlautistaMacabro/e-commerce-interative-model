window.addEventListener("load", () => {
  const cardsType = "Camisetas";
  const cardsPrice = "R$ 100.00";
  const cardsInfoList = [
    {
      title: "Lightweight Jacket",
      image: "img/lightweight-jacket.jpg",
      description: "Adicione um pouco de energia ao seu guarda roupa de inverno com esta jaqueta vibrante..."
    }
    ,
    {
      title: "Elegance Jacket",
      image: "img/elegance-jacket.jpg",
      description: "Roupas elegantes para eventos especiais, trazendo sofisticação e uma boa impressão de primeira..."
    },
    {
      title: "Over Shirt",
      image: "img/over-shirt.jpg",
      description: "Adicione muita energia ao seu guarda roupa do dia a dia com esta camiseta sensacional..."
    },
    {
      title: "Super Over Shirt",
      image: "img/super-over-shirt.jpg",
      description: "Adicione muita energia ao seu guarda roupa do dia a dia com esta camiseta sensacional..."
    },
    {
      title: "Minimal Jacket",
      image: "img/minimal-jacket.jpg",
      description: "Adicione elegância e estilo em seu guarda roupa com nossas camiseta de manga longa basicas..."
    },
    {
      title: "Weather Shirts",
      image: "img/weather-shirts.jpg",
      description: "Cores vibrantes e uma energia sem igual é o que você precisa ter no seu guardada roupa de primavera..."
    }
  ];
  
  const cardsContainer = document.getElementById("cards__container");
  cardsInfoList.forEach((cardInfo) => {
    let card = `<div class="card">
                  <img class="card__image" src="${cardInfo.image}" alt="${cardInfo.title}">
                  <div class="card__details__container">
                    <div class="card__type"> ${cardsType} </div>
                    <strong class="card__title"> ${cardInfo.title} </strong>
                    <div class="card__description__container">
                      <span> ${cardInfo.description} </span>
                    </div>
                    <strong> ${cardsPrice} </strong>
                    <span class="card__add__btn"> Adicionar ao carrinho </span>
                  </div>
                </div>`;
    cardsContainer.insertAdjacentHTML("beforeend", card);
  });
});
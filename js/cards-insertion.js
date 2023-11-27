// ----------------------- FUNCTIONS -----------------------

function cardCreation(cardInfo) {
  let card = document.createElement("div");
  let cardImage = document.createElement("img");
  let cardDetailsContainer = document.createElement("div");
  let cardType = document.createElement("div");
  let cardTitle = document.createElement("strong");
  let cardDescriptionContainer = document.createElement("div");
  let cardDescription = document.createElement("span");
  let cardPrice = document.createElement("strong");
  let cardAddBtn = document.createElement("span");

  card.classList.add("card");
  cardImage.classList.add("card__image");
  cardImage.src = cardInfo.image;
  cardImage.alt = cardInfo.title;
  cardDetailsContainer.classList.add("card__details__container");
  cardType.classList.add("card__type");
  cardType.innerText = cardsType;
  cardTitle.classList.add("card__title");
  cardTitle.innerText = cardInfo.title;
  cardDescriptionContainer.classList.add("card__description__container");
  cardDescription.innerText = cardInfo.description;
  cardPrice.classList.add("card__price");
  cardPrice.innerText = `${brazilCurrency.format(cardInfo.price)}`;
  cardAddBtn.classList.add("card__add__btn");
  cardAddBtn.classList.add("disable__selection");
  cardAddBtn.innerText = "Adicionar ao carrinho";

  card.appendChild(cardImage);
  card.appendChild(cardDetailsContainer);
  cardDetailsContainer.appendChild(cardType);
  cardDetailsContainer.appendChild(cardTitle);
  cardDetailsContainer.appendChild(cardDescriptionContainer);
  cardDescriptionContainer.appendChild(cardDescription);
  cardDetailsContainer.appendChild(cardPrice);
  cardDetailsContainer.appendChild(cardAddBtn);
  cardAddBtn.addEventListener("click", addItemToCart);

  return card;
}

function cardsInsertion() {
  let cardsContainer = document.getElementById("cards__container");
  cardsInfoList.forEach((cardInfo) => {
    cardsContainer.appendChild(cardCreation(cardInfo));
  });
}

function cardsSearch(event) {
  let searchInput = event.target.previousElementSibling.value;
  let cardsContainer = document.getElementById("cards__container");
  cardsContainer.replaceChildren();
  if(searchInput.length == 0) {
    cardsInsertion();
    return;
  }
  let regex = new RegExp(searchInput, "i"); 
  cardsInfoList.forEach((cardInfo) => {
    if (cardInfo.title.search(regex) != -1)//) != -1)
      cardsContainer.appendChild(cardCreation(cardInfo));
  });
}

// -------------------------- EVENT LISTENERS ON LOAD --------------------------

window.addEventListener("load", () => {
  cardsInsertion();
  changeCartLayoutIfEmpty();
  document.getElementById("search__btn").addEventListener("click", cardsSearch);
});
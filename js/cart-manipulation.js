// ----------------------- FUNCTIONS ----------------------- //

function changeCartLayoutIfNotEmpty() {
  if (cartInfo.amount != 1)
    return;
  let cartItensContainer = document.getElementById("cart__itens__container");
  let cartInfoContainer = document.getElementById("cart__info__container");
  cartItensContainer.classList.remove("justify__center");
  cartInfoContainer.classList.add("display__flex");
  cartInfoContainer.classList.remove("display__none");
  cartItensContainer.replaceChildren();
}

function createEmptyCartMsgs(cartItensContainer) {
  const cartEmptyMsg = `<span id="cart__empty__msg"> Carrinho vazio </span>
                      <span id="cart__add__msg"> Adicione itens </span>`;
  cartItensContainer.insertAdjacentHTML("afterbegin", cartEmptyMsg);
}

function changeCartLayoutIfEmpty() {
  if (cartInfo.amount > 0)
    return;
  let cartItensContainer = document.getElementById("cart__itens__container");
  let cartInfoContainer = document.getElementById("cart__info__container");
  cartItensContainer.classList.add("justify__center");
  cartInfoContainer.classList.add("display__none");
  cartInfoContainer.classList.remove("display__flex");
  createEmptyCartMsgs(cartItensContainer);
}

function cartInfoContainerUpdate(cartAmountValue, cartTotalValue) {
  cartAmountValue.innerHTML = `${cartInfo.amount}`;
  cartTotalValue.innerHTML = `${brazilCurrency.format(cartInfo.total)}`;
}

function removeItemFromCart(event) {
  let cartItemContainer = event.target.parentElement.parentElement;
  const cartTotalValue = document.getElementById("cart__total__value");
  const cartAmountValue = document.getElementById("cart__amount__value");
  const cartItemName = cartItemContainer.children[1].children[0].innerText;
  const cartItemPrice = cardsInfoList.find(card => card.title == cartItemName).price;

  cartInfo.total -= cartItemPrice;
  cartInfo.amount--;

  cartInfoContainerUpdate(cartAmountValue, cartTotalValue);
  cartItemContainer.replaceChildren();
  cartItemContainer.remove();
  changeCartLayoutIfEmpty();
}

function addItemToCart(event) {
  cartInfo.amount++;
  changeCartLayoutIfNotEmpty();
  let cardItemContainer = event.target.parentElement.parentElement;
  const cartTotalValue = document.getElementById("cart__total__value");
  const cartAmountValue = document.getElementById("cart__amount__value");
  const cartItemName = cardItemContainer.children[1].children[1].innerText;
  const cartItem = cardsInfoList.find(card => card.title == cartItemName);
  cartInfo.total += cartItem.price;

  let cartItemContainer = document.createElement("div");
  let cartItemImage = document.createElement("img");
  let cartItemDetailsContainer = document.createElement("div");
  let cartItemTitle = document.createElement("strong");
  let cartItemPrice = document.createElement("strong");
  let cartItemRemoveBtn = document.createElement("span");

  cartItemContainer.classList.add("cart__item__container");
  cartItemImage.classList.add("cart__item__image");
  cartItemImage.src = cartItem.image;
  cartItemImage.alt = cartItem.title;
  cartItemDetailsContainer.classList.add("cart__item__details__container");
  cartItemTitle.innerText = cartItem.title;
  cartItemPrice.innerText = `${brazilCurrency.format(cartItem.price)}`;
  cartItemRemoveBtn.classList.add("cart__item__remove__btn");
  cartItemRemoveBtn.classList.add("disable__selection");
  cartItemRemoveBtn.innerText = "Remover produto";
  cartItemRemoveBtn.addEventListener("click", removeItemFromCart);

  cartItemContainer.append(cartItemImage, cartItemDetailsContainer);
  cartItemDetailsContainer.append(cartItemTitle, cartItemPrice, cartItemRemoveBtn);
  document.getElementById("cart__itens__container").append(cartItemContainer);

  cartInfoContainerUpdate(cartAmountValue, cartTotalValue);
}
// variables
const cartItems = document.querySelectorAll(".shpping_cart .cart_details");
const itemNumbersContainer = document.getElementById("item_number");
let prices = document.querySelectorAll(".itemPrice");
const checkoutTotal = document.getElementById("checkout_total");

// get cartNumber list
let cartNumber = cartItems.length;

let total = 0;

prices.forEach((item) => {
  let price = item.textContent.replace("$", "");
  total += Number(price);
});

itemNumbersContainer.textContent = `(${cartNumber} items)`;
checkoutTotal.textContent = `$${total.toFixed(2)}`;

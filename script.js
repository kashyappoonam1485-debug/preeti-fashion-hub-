let cart = [];
let total = 0;

function addToCart(product, price){
  cart.push(product);
  total = total + price;

  document.getElementById("cartCount").innerHTML = cart.length;

  alert(product + " added to cart 🛒");
}

function showCart(){
  let items = "";

  if(cart.length === 0){
    items = "Cart is empty";
  } else {
    for(let i = 0; i < cart.length; i++){
      items += cart[i] + " <button onclick=\"removeItem(" + i + ")\">Remove</button><br>";
    }
  }

  document.getElementById("cartItems").innerHTML = items;
  document.getElementById("totalPrice").innerHTML = "Total: ₹" + total;
  document.getElementById("quantity").innerHTML = "Quantity: " + cart.length;
}

function removeItem(index){
  cart.splice(index, 1);
  document.getElementById("cartCount").innerHTML = cart.length;
  showCart();
}

function checkout(){
  alert("Thank you for your order! 🛍️");
}

function placeOrder(){
  alert("Order placed successfully! 🛍️");
}

function searchProduct(){
  let input = document.getElementById("search").value.toLowerCase();
  let products = document.getElementsByClassName("card");

  for(let i = 0; i < products.length; i++){
    let productName = products[i].innerText.toLowerCase();

    if(productName.includes(input)){
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}function login(){
  let name = prompt("Enter your name:");

  if(name){
    alert("Welcome " + name + " to Preeti Fashion Hub 🛍️");
  }
}let orders = [];

function placeOrder(){
  orders.push(cart.join(", "));
  alert("Order placed successfully! 🛍️");
}

function showOrders(){
  if(orders.length === 0){
    alert("No orders yet 📦");
  } else {
    alert("Your Orders: " + orders.join(" | "));
  }
}function filterCategory(category){
  let products = document.getElementsByClassName("card");

  for(let i = 0; i < products.length; i++){
    let name = products[i].innerText;

    if(name.includes(category)){
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
}function showAllProducts(){
  let products = document.getElementsByClassName("card");

  for(let i = 0; i < products.length; i++){
    products[i].style.display = "block";
  }
}let wishlist = [];

function addWishlist(product){
  wishlist.push(product);
  alert(product + " added to wishlist ❤️");
}function filterCategory(category){

let products = document.querySelectorAll(".card");

products.forEach(function(product){

let name = product.innerText;

if(name.includes(category)){
product.style.display = "block";
}
else{
product.style.display = "none";
}

});

}let cart = [];

function addToCart(name, price){

cart.push({
name:name,
price:price
});

document.getElementById("cartCount").innerHTML = cart.length;

alert(name + " added to cart 🛒");

}
 let cart = [];
let total = 0;
let orders = [];
let wishlist = [];

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
  } 
  else {
    for(let i = 0; i < cart.length; i++){
      items += cart[i] + "<br>";
    }
  }

  document.getElementById("cartItems").innerHTML = items;
  document.getElementById("totalPrice").innerHTML = "Total: ₹" + total;
  document.getElementById("quantity").innerHTML = "Quantity: " + cart.length;

}


function checkout(){
  alert("Thank you for your order! 🛍️");
}


function placeOrder(){

let name = document.getElementById("customerName").value;
let address = document.getElementById("address").value;
let phone = document.getElementById("phone").value;

if(name==="" || address==="" || phone===""){
alert("Please fill all details");
return;
}

orders.push(
"Name: " + name +
", Address: " + address +
", Phone: " + phone +
", Items: " + cart.join(", ")
);

alert("Order placed successfully! 🛍️");

}


function showOrders(){

  if(orders.length === 0){
    alert("No orders yet 📦");
  }
  else{
    alert("Your Orders: " + orders.join(" | "));
  }

}


function removeItem(index){

  cart.splice(index,1);

  document.getElementById("cartCount").innerHTML = cart.length;

  showCart();

}


function searchProduct(){

  let input = document.getElementById("search").value.toLowerCase();

  let products = document.getElementsByClassName("card");


  for(let i=0;i<products.length;i++){

    let name = products[i].innerText.toLowerCase();

    if(name.includes(input)){
      products[i].style.display="block";
    }
    else{
      products[i].style.display="none";
    }

  }

}


function login(){

  let name = prompt("Enter your name:");

  if(name){
    alert("Welcome " + name + " to Preeti Fashion Hub 🛍️");
  }

}


function filterCategory(category){

  let products = document.querySelectorAll(".card");


  products.forEach(function(product){

    let name = product.innerText;


    if(name.includes(category)){
      product.style.display="block";
    }
    else{
      product.style.display="none";
    }

  });

}


function showAllProducts(){

  let products = document.querySelectorAll(".card");


  products.forEach(function(product){

    product.style.display="block";

  });

}


function addWishlist(product){

  wishlist.push(product);

  alert(product + " added to wishlist ❤️");

}
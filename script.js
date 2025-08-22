const products = [
  { id: 1, name: "T-shirt", price: 19.99, image: "https://via.placeholder.com/200x150" },
  { id: 2, name: "Sneakers", price: 49.99, image: "https://via.placeholder.com/200x150" },
  { id: 3, name: "Watch", price: 89.99, image: "https://via.placeholder.com/200x150" },
  { id: 4, name: "Backpack", price: 39.99, image: "https://via.placeholder.com/200x150" },
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function showCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartTotal.innerText = total.toFixed(2);
  document.getElementById("cart-modal").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

document.getElementById("cart-button").addEventListener("click", showCart);

// Initialize
displayProducts();

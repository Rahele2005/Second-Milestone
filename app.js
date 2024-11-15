// Initial Product and Cart Setup
const products = [
  { id: 1, name: "coat", price: 109.99, description: "Description for product 1.", image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" },
  { id: 2, name: "jacket", price: 29.99, description: "Description for product 2.", image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" },
  { id: 3, name: "sweatshirt", price: 64, description: "Description for product 3.", image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" },
  { id: 4, name: "jogging shirt", price: 20, description: "Description for product 4.", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" }
];
const cart = [];

// Function to Add Products to the Page
function addProducts() {
  const container = document.querySelector(".products--list");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.className = "product";
    listItem.innerHTML = `
      <div class="product card">
        <img src="${product.image}" alt="${product.name}" class="product--image">
        <div class="product--text">
          <h1 class="product--name">${product.name}</h1>
          <p class="product--price">$${product.price}</p>
          <button data-id="${product.id}" class="product--buy">Add to Cart</button>
        </div>
      </div>`;
    container.appendChild(listItem);
  });

  // Add Event Listeners to "Add to Cart" Buttons
  document.querySelectorAll(".product--buy").forEach(button => {
    button.addEventListener('click', () => {
      const productId = parseInt(button.getAttribute('data-id'));
      const product = products.find(item => item.id === productId);
      cart.push(product);
      displayConfirmation(product.name);
      updateCartDisplay();
    });
  });
}

// Function to Update and Display Cart Contents in Modal
function updateCartDisplay() {
  const cartContainer = document.querySelector(".modal-cart-content");
  cartContainer.innerHTML = "<h1>Cart</h1>";
  
  if (cart.length === 0) {
    cartContainer.innerHTML += "<p>Your cart is empty.</p>";
  } else {
    const cartItems = cart.map(item => `<li>${item.name} - $${item.price}</li>`).join("");
    cartContainer.innerHTML += `<ul>${cartItems}</ul>`;
  }
}

// Display Confirmation Message When Item is Added
function displayConfirmation(productName) {
  const confirmation = document.createElement("div");
  confirmation.className = "confirmation-message";
  confirmation.textContent = `${productName} has been added to the cart.`;
  document.body.appendChild(confirmation);

  setTimeout(() => {
    confirmation.remove();
  }, 3000);
}

// Modal Display Logic
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalCart");
  const cartLink = document.getElementById("cartLink");
  const closeBtn = document.getElementsByClassName("modal-cart-close")[0];

  cartLink.onclick = function () {
    modal.style.display = "block";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
    updateCartDisplay();
  };

  closeBtn.onclick = function () {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  };

  // Initial load of products
  addProducts();
});

// Sorting Function
function sortProducts(order) {
  products.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
  addProducts(); // Re-render products after sorting
}

// Event Listener for Dropdown Change
document.getElementById("sort").addEventListener("change", () => {
  const sortOrder = document.getElementById("sort").value;
  sortProducts(sortOrder);
});


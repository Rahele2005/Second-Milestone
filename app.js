// Array of product objects
const products = [
    {
      id: 1,
      name: "Hat",
      price: 29,
      description: "This is a stylish brown hat.",
      image: "images/Screenshot 2024-10-26 130817.png"
    },
    {
      id: 2,
      name: "Sarong",
      price: 48,
      description: "A comfortable navy blue sarong, perfect for summer.",
      image: "images/Screenshot 2024-10-26 131314.png"
    },
    {
      id: 3,
      name: "Scarf",
      price: 20,
      description: "A warm green scarf for winter.",
      image: "images/Screenshot 2024-10-26 131400.png"
    }
  ];

  function displayProducts() {
    // Select the container where products will be displayed
    const productContainer = document.querySelector(".products .list");
  
    // Clear the container to prevent duplicates
    productContainer.innerHTML = "";
  
    // Loop through each product in the array
    products.forEach(product => {
      // Create the list item container
      const listItem = document.createElement("li");
  
      // Create the product card
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.id = `product-${product.id}`;  // Set unique id for each product card
  
      // Create and add the product image
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = `This is a ${product.name.toLowerCase()}`;
      img.classList.add("img");
      productCard.appendChild(img);
  
      // Create the product info container
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
  
      // Add product name
      const productName = document.createElement("h1");
      productName.classList.add("product-name");
      productName.textContent = product.name;
      infoDiv.appendChild(productName);
  
      // Add product description
      const productDescription = document.createElement("p");
      productDescription.classList.add("product-description");
      productDescription.textContent = product.description;
      infoDiv.appendChild(productDescription);
  
      // Add product price
      const productPrice = document.createElement("p");
      productPrice.classList.add("product-price");
      productPrice.textContent = `$${product.price}`;
      infoDiv.appendChild(productPrice);
  
      // Add "click to shop" button
      const button = document.createElement("button");
      button.classList.add("btn");
      button.textContent = "click to shop";
      infoDiv.appendChild(button);
  
      // Append infoDiv to product card
      productCard.appendChild(infoDiv);
  
      // Append the product card to the list item
      listItem.appendChild(productCard);
  
      // Append the list item to the product container
      productContainer.appendChild(listItem);
    });
  }
  
  // Call the display function only once when the page loads
  document.addEventListener("DOMContentLoaded", displayProducts);
  
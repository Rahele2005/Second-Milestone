
const products = [
  {
    id: 1,
    name: "coat",
    price: 109.99,
    description: "Description for product 1.",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
  },
  {
    id: 2,
    name: "jacket",
    price: 29.99,
    description: "Description for product 2.",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
  },
  {
    id: 3,
    name: "sweatshirt",
    price: 64,
    description: "Description for product 3.",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",  
  },
  {
    id: 4,
    name: "jogging shirt",
    price: 20,
    description: "Description for product 4.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",

  }  
];
 
//sort function

const sortByprice = products.sort(function(a, b){
  if (a.price < b.price) return -1;
  if (a.price > b.price) return 1;
  else return 0;
});
console.log(sortByprice)

// or
// const sortByprice = products.sort((a, b) => a - b)
// console.log(sortByprice)



// Julia's code


function addProducts() {
  const container = document.querySelector(".products--list")

  //loop for clearing existing products (from GitHub)

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  for (let product of products) {
   const listItem = document.createElement('li')
   listItem.className = "product"
   listItem.innerHTML = `
    <div class="product card">
      <img src="${product.image}" alt="${product.name}" class="product--image">
      <div class="product--text">
        <h1 class="product--name">${product.name}</h1>
        <p>${product.price}</p>
        <button class="product--buy">Add to Cart</button>
      </div>
    </div>`
    container.appendChild(listItem)
  }
}
document.addEventListener("DOMContentLoaded", addProducts) 




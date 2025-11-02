let products = [
  {
    id: 1,
    name: "Apple Watch",
    description:
      "A sleek smartwatch with fitness tracking and notification features.",
    price: 299.99,
    image: "images/series 11.jpg",
  },
  {
    id: 2,
    name: "Sony Headphones",
    description:
      "High-quality wireless headphones with long battery life and great sound.",
    price: 149.99,
    image: "images/headset.jpg",
  },
  {
    id: 3,
    name: "Drone",
    description:
      "Capture stunning aerial footage and photos with advanced stabilization.",
    price: 129.99,
    image: "images/drone.jpg",
  },
  {
    id: 4,
    name: "Wireless Echo Speaker",
    description:
      "Portable speaker with crystal-clear sound and effortless connectivity.",
    price: 129.99,
    image: "images/Echo speaker.jpg",
  },
  {
    id: 5,
    name: "Hp Elitebook x360 1030 G4",
    description:
      "Powerful business laptop with Intel Core processors and advanced security",
    price: 129.99,
    image: "images/elitebook.jpg",
  },
  {
    id: 6,
    name: "Hisense TV",
    description:
      "Stunning 4K Smart TV with vibrant colors and immersive sound.",
    price: 129.99,
    image: "images/hisense tv.jpg",
  },
  {
    id: 7,
    name: "Iphone 15 Pro Max",
    description:
      "Flagship smartphone with stunning display and advanced camera system.",
    price: 129.99,
    image: "images/iphone 15 promax.jpg",
  },
  {
    id: 8,
    name: "Nintendo Switch",
    description: "Innovative gaming console for on-the-go fun and versatility.",
    price: 129.99,
    image: "images/nintendo switch.jpg",
  },
  {
    id: 9,
    name: "Oraimo Charger",
    description: "Compact portable charger for quick and safe device charging.",
    price: 129.99,
    image: "images/oraimo charger.jpg",
  },
  {
    id: 10,
    name: "PS 5",
    description:
      "Next-gen gaming console with lightning-fast load times and stunning graphics.",
    price: 129.99,
    image: "images/Ps 5.jpg",
  },
  {
    id: 11,
    name: "Wireless Earbud",
    description: "Sleek earbuds with pure audio and effortless connectivity.",
    price: 129.99,
    image: "images/wireless earbud.jpg",
  },
  {
    id: 12,
    name: "Apple Ipad Air",
    description:"Powerful tablet with stunning display and advanced performance.",
    price: 129.99,
    image: "images/apple ipad air.jpg",
  },
];

function createProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="price-and-button">
          <p class="price">$${product.price}</p>
          <button class="buy-now-button">Buy Now</button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts() {
  let productContainer = document.getElementById("product-container");
  let productCards = products.map((product) => createProductCard(product)).join("");
  productContainer.innerHTML = productCards;
}

renderProducts();

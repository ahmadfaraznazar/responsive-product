"use strict";

// Array of Products
const products = [
    { name: "ASUS Gaming Laptop", category: "Electronics", price: 149.99, description: "ASUS ROG Strix G16 (2023) Gaming Laptop, 16” 16:10 FHD 165Hz, GeForce RTX 4070, Intel Core i9-13980HX, 16GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11, G614JI-AS94, Eclipse Gray", image: "https://m.media-amazon.com/images/I/71v0BQo8T8L.__AC_SX300_SY300_QL70_FMwebp_.jpg" },
    { name: "Polyester Comfy Sofa", category: "Furniture", price: 300, description: "無印良品 Muji 84298172 Air Sofa Navy, Width 37.4 x Depth 37.4 x Height 28.5 inches (95 x 95 x 72.5 cm), Polyester.", image: "https://m.media-amazon.com/images/I/81Bdi+PQngL._AC_SX679_.jpg" },
    { name: "Hooded Shirt", category: "Clothing", price: 49.99, description: "Legendary Whitetails Men's Maplewood Hooded Shirt Jacket", image: "https://m.media-amazon.com/images/I/914F99c97kL._AC_SX522_.jpg" },
    { name: "Gaming Headphones", category: "Electronics", price: 187.25, description: "SteelSeries Arctis Nova 7 Wireless Multi-Platform Gaming Headset – Dragon Edition – Two Speaker Plate Sets — Dual Wireless 2.4GHz & Bluetooth – 38 HR Fast Charge Battery – PC, PS, Mac, Mobile, Switch", image: "https://m.media-amazon.com/images/I/618Fvl0siNL._AC_SX466_.jpg" },
    { name: "Coffee Table", category: "Furniture", price: 119.99, description: "SIMPLIHOME Hunter SOLID MANGO WOOD and Metal 32 inch Wide Square Industrial Contemporary Lift Top Coffee Table in Natural, for the Living Room and Family Room", image: "https://m.media-amazon.com/images/I/71FVGHY8nxL._AC_SX679_.jpg" },
    { name: "Men Sneakers", category: "Clothing", price: 40.99, description: "Paul Smith Women's Banks' Sneakers", image: "https://m.media-amazon.com/images/I/71UVAjwNPBL._AC_UL320_.jpg" }
  ];
  
  // to render product cards in HTML
  function renderProducts(productArray) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
  
    productArray.forEach(product => {
      const productHTML = productGrid.innerHTML += `
      <div class="product-card">
        <img class="product-image" src="${product.image}" alt="${product.name}">
        
        <div class='product-header'>
          <h3 class="product-name">${product.name}</h3>
          <span class="product-category">${product.category}</span>
        </div>
        
        <p class="product-description">${product.description}</p>
        
        <p class="product-price">$${product.price}</p>
        
        <button class="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    `;
    
    });

    
  }
  
  // Initially all 6 products should be displayed.
  renderProducts(products);
  
  // Filter Logic
  function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  
    let filteredProducts = products;
  
    // Category Filter 
    if (categoryFilter !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }
  
    // Price Filter
    if (priceFilter !== 'all') {
      const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
      filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
    }
  
    // Product Name Filter
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchTerm));
    }
  
    
    renderProducts(filteredProducts);
  }
  
  // Selecting Filters
  document.getElementById('categoryFilter').addEventListener('change', filterProducts);
  document.getElementById('priceFilter').addEventListener('change', filterProducts);
  document.getElementById('searchBar').addEventListener('input', filterProducts);
  
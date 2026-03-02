document.addEventListener("DOMContentLoaded", function () {
  //  GLOBAL VARIABLES 
  let products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 5000,
      category: "Electronics",
      rating: 4.5,
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 3500,
      category: "Shoes",
      rating: 4.2,
      stock: 8,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "T-Shirt",
      price: 1200,
      category: "Clothing",
      rating: 4.0,
      stock: 15,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      name: "Headphones",
      price: 2500,
      category: "Electronics",
      rating: 4.7,
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
    },
    {
      id: 5,
      name: "Sneakers",
      price: 4000,
      category: "Shoes",
      rating: 4.3,
      stock: 7,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop",
    },
    {
      id: 6,
      name: "Jacket",
      price: 3000,
      category: "Clothing",
      rating: 4.1,
      stock: 3,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop",
    },
    {
      id: 7,
      name: "Camera",
      price: 15000,
      category: "Electronics",
      rating: 4.8,
      stock: 2,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=200&fit=crop",
    },
    {
      id: 8,
      name: "Sandals",
      price: 800,
      category: "Shoes",
      rating: 3.9,
      stock: 12,
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=200&fit=crop",
    },
    {
      id: 9,
      name: "Jeans",
      price: 2000,
      category: "Clothing",
      rating: 4.2,
      stock: 9,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=200&fit=crop",
    },
    {
      id: 10,
      name: "Speaker",
      price: 3500,
      category: "Electronics",
      rating: 4.4,
      stock: 4,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=200&fit=crop",
    },
    {
      id: 11,
      name: "Boots",
      price: 4500,
      category: "Shoes",
      rating: 4.6,
      stock: 3,
      image:
        "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=300&h=200&fit=crop",
    },
    {
      id: 12,
      name: "Sweater",
      price: 1800,
      category: "Clothing",
      rating: 4.0,
      stock: 6,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=300&h=200&fit=crop",
    },
    {
      id: 13,
      name: "Wireless Earbuds",
      price: 3000,
      category: "Electronics",
      rating: 4.6,
      stock: 7,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=200&fit=crop",
    },
    {
      id: 14,
      name: "Hiking Boots",
      price: 5500,
      category: "Shoes",
      rating: 4.7,
      stock: 4,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      id: 15,
      name: "Hoodie",
      price: 2200,
      category: "Clothing",
      rating: 4.3,
      stock: 10,
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=300&h=200&fit=crop",
    },
    {
      id: 16,
      name: "Tablet",
      price: 12000,
      category: "Electronics",
      rating: 4.5,
      stock: 3,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop",
    },
    {
      id: 17,
      name: "Loafers",
      price: 2800,
      category: "Shoes",
      rating: 4.1,
      stock: 8,
      image:
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=300&h=200&fit=crop",
    },
    {
      id: 18,
      name: "Sunglasses",
      price: 1500,
      category: "Accessories",
      rating: 4.4,
      stock: 12,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=200&fit=crop",
    },
  ];

  let currentPage = 1;
  let itemsPerPage = 6;
  let filteredProducts = [...products];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  //  INITIALIZE 
  initializePage();

  function initializePage() {
    console.log("🚀 Initializing page with PKR currency...");
    setupNavbar();
    updateBadges();
    checkAuth();
    setupDarkMode();
    setupSlider();

    // Page specific initialization
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === "index.html" || currentPage === "") {
      setupHomePage();
    } else if (currentPage === "cart.html") {
      renderCartPage();
    } else if (currentPage === "wishlist.html") {
      renderWishlistPage();
    } else if (currentPage === "product-detail.html") {
      loadProductDetail();
    } else if (currentPage === "login.html") {
      setupLoginForm();
    } else if (currentPage === "signup.html") {
      setupSignupForm();
    }
  }

  //  NAVBAR SETUP 
  function setupNavbar() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger) {
      hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
      });
    }
  }

  //  SLIDER SETUP 
  function setupSlider() {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevSlide");
    const nextBtn = document.getElementById("nextSlide");
    const dots = document.querySelectorAll(".dot");

    if (!slides.length) return;

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      slides.forEach((s) => s.classList.remove("active"));
      dots.forEach((d) => d.classList.remove("active"));

      if (index >= slides.length) currentSlide = 0;
      if (index < 0) currentSlide = slides.length - 1;

      slides[currentSlide].classList.add("active");
      dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
      currentSlide++;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide--;
      showSlide(currentSlide);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        prevSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        nextSlide();
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", function () {
        currentSlide = index;
        showSlide(currentSlide);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
      });
    });

    showSlide(0);
    slideInterval = setInterval(nextSlide, 3000);
  }

  //  HOME PAGE SETUP 
  function setupHomePage() {
    console.log("🏠 Setting up home page");

    const productsGrid = document.getElementById("productsGrid");
    if (!productsGrid) return;

    // Search input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        console.log("🔍 Searching:", e.target.value);
        filterProducts(true); // Page reset karo search pe
      });
    }

    // Category filter
    const categoryFilter = document.getElementById("categoryFilter");
    if (categoryFilter) {
      categoryFilter.addEventListener("change", function () {
        console.log("📂 Category filter:", this.value);
        filterProducts(true); // Page reset karo filter pe
      });
    }

    // Sort filter
    const sortFilter = document.getElementById("sortFilter");
    if (sortFilter) {
      sortFilter.addEventListener("change", function () {
        console.log("📊 Sort filter:", this.value);
        filterProducts(true); // Page reset karo sort pe
      });
    }

    // Initial render
    filterProducts(true);
  }

  //  FILTER PRODUCTS 
  function filterProducts(resetPage = true) {
    console.log("🔄 Filtering products...");

    const searchTerm =
      document.getElementById("searchInput")?.value.toLowerCase() || "";
    const category = document.getElementById("categoryFilter")?.value || "all";
    const sortBy = document.getElementById("sortFilter")?.value || "default";

    // Filter by search and category
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory =
        category === "all" || product.category === category;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    if (sortBy === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    console.log(`📦 Found ${filtered.length} products after filtering`);

    filteredProducts = filtered;

    // Page reset only when needed (search/filter/sort)
    if (resetPage) {
      currentPage = 1;
    } else {
      // Make sure current page is valid
      const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
      if (currentPage > totalPages) {
        currentPage = totalPages || 1;
      }
    }

    renderProducts();
  }

  //  RENDER PRODUCTS WITH PAGINATION 
  function renderProducts() {
    const productsGrid = document.getElementById("productsGrid");
    if (!productsGrid) return;

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    console.log(
      `📄 Page ${currentPage}: Showing products ${startIndex + 1} to ${endIndex}`,
    );

    // Clear grid
    productsGrid.innerHTML = "";

    if (paginatedProducts.length === 0) {
      productsGrid.innerHTML =
        '<div class="no-products">No products found 😢</div>';
    } else {
      // Render each product
      paginatedProducts.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.dataset.id = product.id;

        // Check if in cart/wishlist
        const inCart = cart.some((item) => item.id === product.id);
        const inWishlist = wishlist.includes(product.id);

        productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-price">Rs. ${product.price}</p>
                        <p class="product-rating">⭐ ${product.rating} (${product.stock} left)</p>
                        <div class="product-actions">
                            <button class="btn-cart" onclick="addToCart(${product.id})" ${product.stock === 0 || inCart ? "disabled" : ""}>
                                ${inCart ? "✓ In Cart" : product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                            </button>
                            <button class="btn-wishlist ${inWishlist ? "active" : ""}" onclick="toggleWishlist(${product.id})">
                                ${inWishlist ? "❤️" : "🤍"} Wishlist
                            </button>
                        </div>
                    </div>
                `;

        // Navigate to detail page on card click
        productCard.addEventListener("click", function (e) {
          if (
            !e.target.classList.contains("btn-cart") &&
            !e.target.classList.contains("btn-wishlist")
          ) {
            window.location.href = `product-detail.html?id=${product.id}`;
          }
        });

        productsGrid.appendChild(productCard);
      });
    }

    // Render pagination
    renderPagination();
  }

  //  PAGINATION 
  function renderPagination() {
    const paginationDiv = document.getElementById("pagination");
    if (!paginationDiv) return;

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    if (totalPages <= 1) {
      paginationDiv.innerHTML = "";
      return;
    }

    let paginationHTML = "";

    // Previous button
    paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? "disabled" : ""}>❮ Prev</button>`;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      paginationHTML += `<button class="page-btn ${currentPage === i ? "active" : ""}" onclick="changePage(${i})">${i}</button>`;
    }

    // Next button
    paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? "disabled" : ""}>Next ❯</button>`;

    paginationDiv.innerHTML = paginationHTML;
  }

  //  CHANGE PAGE 
  window.changePage = function (page) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    renderProducts();

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //  ADD TO CART 
  window.addToCart = function (productId) {
    console.log("🛒 Adding to cart:", productId);

    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("Please login first!");
      window.location.href = "login.html";
      return;
    }

    const product = products.find((p) => p.id === productId);

    if (!product) return;

    // Check if already in cart
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity < product.stock) {
        existingItem.quantity++;
        alert(`✅ ${product.name} quantity increased!`);
      } else {
        alert("❌ Out of stock!");
        return;
      }
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        stock: product.stock,
      });
    //   alert(`✅ ${product.name} added to cart!`);
    }

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    updateBadges();

    // ✅ FIXED: Sirf renderProducts() call karo, filterProducts() nahi
    renderProducts(); // Yeh current page preserve karega

    // Agar cart page open hai to woh bhi update karo
    if (window.location.pathname.includes("cart.html")) {
      renderCartPage();
    }
  };

  //  TOGGLE WISHLIST 
  window.toggleWishlist = function (productId) {
    console.log("❤️ Toggling wishlist:", productId);

    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("Please login first!");
      window.location.href = "login.html";
      return;
    }

    const index = wishlist.indexOf(productId);

    if (index === -1) {
      wishlist.push(productId);
    //   alert("✅ Added to wishlist!");
    } else {
      wishlist.splice(index, 1);
    //   alert("❌ Removed from wishlist!");
    }

    // Save to localStorage
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateBadges();

    // FIXED: Sirf renderProducts() call karo
    renderProducts(); // Current page preserve karega

    // Agar wishlist page open hai to woh bhi update karo
    if (window.location.pathname.includes("wishlist.html")) {
      renderWishlistPage();
    }
  };

  //  UPDATE CART QUANTITY 
  window.updateCartQuantity = function (productId, change) {
    const item = cart.find((item) => item.id === productId);
    if (!item) return;

    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) {
      // Remove item
      cart = cart.filter((item) => item.id !== productId);
    //   alert("🗑️ Item removed from cart");
    } else if (newQuantity <= item.stock) {
      item.quantity = newQuantity;
    } else {
      alert("❌ Cannot add more than stock!");
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateBadges();
    renderCartPage();
  };

  //  REMOVE FROM CART 
  window.removeFromCart = function (productId) {
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateBadges();
    renderCartPage();
    // alert("🗑️ Item removed from cart");
  };

  //  RENDER CART PAGE 
  function renderCartPage() {
    const cartItems = document.getElementById("cartItems");
    const cartSummary = document.getElementById("cartSummary");
    const totalItems = document.getElementById("totalItems");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems) return;

    // Check authentication
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      window.location.href = "login.html";
      return;
    }

    if (cart.length === 0) {
      cartItems.innerHTML = `
                <div class="empty-cart">
                    <h3>Your cart is empty</h3>
                    <p>Browse products and add to cart</p>
                    <a href="index.html" class="btn-primary">Continue Shopping</a>
                </div>
            `;
      if (cartSummary) cartSummary.style.display = "none";
      return;
    }

    if (cartSummary) cartSummary.style.display = "block";

    // Calculate totals
    let itemsCount = 0;
    let total = 0;

    let cartHTML = "";

    cart.forEach((item) => {
      itemsCount += item.quantity;
      total += item.price * item.quantity;

      cartHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-price">Rs. ${item.price}</p>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)" ${item.quantity <= 1 ? "disabled" : ""}>-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)" ${item.quantity >= item.stock ? "disabled" : ""}>+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            `;
    });

    cartItems.innerHTML = cartHTML;

    if (totalItems) totalItems.textContent = itemsCount;
    if (totalPrice) totalPrice.textContent = `Rs. ${total}`;
  }

  //  RENDER WISHLIST PAGE 
  function renderWishlistPage() {
    const wishlistGrid = document.getElementById("wishlistGrid");
    const emptyWishlist = document.getElementById("emptyWishlist");

    if (!wishlistGrid) return;

    // Check authentication
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      window.location.href = "login.html";
      return;
    }

    const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

    if (wishlistProducts.length === 0) {
      wishlistGrid.innerHTML = "";
      if (emptyWishlist) emptyWishlist.style.display = "block";
      return;
    }

    if (emptyWishlist) emptyWishlist.style.display = "none";

    wishlistGrid.innerHTML = "";

    wishlistProducts.forEach((product) => {
      const inCart = cart.some((item) => item.id === product.id);

      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">Rs. ${product.price}</p>
                    <p class="product-rating">⭐ ${product.rating}</p>
                    <div class="product-actions">
                        <button class="btn-cart" onclick="addToCart(${product.id})" ${product.stock === 0 || inCart ? "disabled" : ""}>
                            ${inCart ? "✓ In Cart" : "Add to Cart"}
                        </button>
                        <button class="btn-wishlist active" onclick="toggleWishlist(${product.id})">❤️ Remove</button>
                    </div>
                </div>
            `;

      productCard.addEventListener("click", function (e) {
        if (
          !e.target.classList.contains("btn-cart") &&
          !e.target.classList.contains("btn-wishlist")
        ) {
          window.location.href = `product-detail.html?id=${product.id}`;
        }
      });

      wishlistGrid.appendChild(productCard);
    });
  }

  //  LOAD PRODUCT DETAIL 
  function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    const productDetail = document.getElementById("productDetail");

    if (!productDetail || !productId) return;

    const product = products.find((p) => p.id === productId);

    if (!product) {
      productDetail.innerHTML = "<h2>Product not found</h2>";
      return;
    }

    const inCart = cart.some((item) => item.id === product.id);
    const inWishlist = wishlist.includes(product.id);

    productDetail.innerHTML = `
            <div class="product-detail-card">
                <img src="${product.image}" alt="${product.name}" class="product-detail-img">
                <div class="product-detail-info">
                    <h1>${product.name}</h1>
                    <p class="product-detail-price">Rs. ${product.price}</p>
                    <p class="product-detail-rating">⭐ ${product.rating} / 5</p>
                    <p class="product-detail-stock">${product.stock > 0 ? `✅ In Stock (${product.stock} left)` : "❌ Out of Stock"}</p>
                    <p class="product-detail-category">Category: ${product.category}</p>
                    
                    <div class="product-detail-actions">
                        <button class="btn-cart large" onclick="addToCart(${product.id})" ${product.stock === 0 || inCart ? "disabled" : ""}>
                            ${inCart ? "✓ Already in Cart" : "Add to Cart"}
                        </button>
                        <button class="btn-wishlist large ${inWishlist ? "active" : ""}" onclick="toggleWishlist(${product.id})">
                            ${inWishlist ? "❤️ Remove from Wishlist" : "🤍 Add to Wishlist"}
                        </button>
                    </div>
                </div>
            </div>
        `;
  }

  //  AUTHENTICATION 
  function setupSignupForm() {
    const signupForm = document.getElementById("signupForm");
    if (!signupForm) return;

    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Get existing users
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Check if email exists
      if (users.some((u) => u.email === email)) {
        alert("❌ Email already exists!");
        return;
      }

      // Add new user
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("✅ Signup successful! Please login.");
      window.location.href = "login.html";
    });
  }

  function setupLoginForm() {
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Get users
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Find user
      const user = users.find(
        (u) => u.email === email && u.password === password,
      );

      if (user) {
        // Save current user
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`✅ Welcome back, ${user.name}!`);
        window.location.href = "index.html";
      } else {
        alert("❌ Invalid email or password!");
      }
    });
  }

  function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const authLinks = document.getElementById("authLinks");
    const userMenu = document.getElementById("userMenu");
    const welcomeUser = document.getElementById("welcomeUser");

    if (currentUser) {
      if (authLinks) authLinks.style.display = "none";
      if (userMenu) {
        userMenu.style.display = "flex";
        if (welcomeUser)
          welcomeUser.textContent = `Hi, ${currentUser.name.split(" ")[0]}`;
      }
    } else {
      if (authLinks) authLinks.style.display = "flex";
      if (userMenu) userMenu.style.display = "none";
    }
  }

  // Logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("currentUser");
      alert("👋 Logged out successfully!");
      window.location.href = "login.html";
    });
  }

  //  UPDATE BADGES 
  function updateBadges() {
    const cartBadge = document.getElementById("cartBadge");
    const wishlistBadge = document.getElementById("wishlistBadge");

    if (cartBadge) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartBadge.textContent = totalItems;
    }

    if (wishlistBadge) wishlistBadge.textContent = wishlist.length;
  }

  //  DARK MODE 
  function setupDarkMode() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (!darkModeToggle) return;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      darkModeToggle.textContent = "☀️ Light";
    }

    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️ Light";
        localStorage.setItem("theme", "dark");
      } else {
        darkModeToggle.textContent = "🌙 Dark";
        localStorage.setItem("theme", "light");
      }
    });
  }
});
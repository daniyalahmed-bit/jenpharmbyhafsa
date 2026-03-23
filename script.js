// Select elements
const cartIconBtn = document.getElementById('cart-icon');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartPanel = document.getElementById('cart-panel');
const cartContent = document.querySelector('.cart-content');

// Function to toggle cart visibility
function toggleCart() {
     cartPanel.classList.toggle('active');
     cartContent.classList.toggle('active');
}

// Event Listeners
cartIconBtn.addEventListener('click', toggleCart);

closeCartBtn.addEventListener('click', toggleCart);

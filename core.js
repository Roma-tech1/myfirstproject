// script.js

// Обновленный массив товаров
const products = [
    { id: 1, name: "Lenovo IdeaPad", price: 40000, image: "77_6413.jpeg" },
    { id: 2, name: "ASUS VivoBook", price: 35000, image: "1_4771_6308.jpeg" },
    { id: 3, name: "Lenovo ThinkPad", price: 45000, image: "1_7338.jpeg" },
];

let cart = [];

// Функция добавления товара в корзину
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartCount();
}

// Функция обновления количества товаров в корзине
function updateCartCount() {
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.textContent = `Корзина (${cart.length})`;
}

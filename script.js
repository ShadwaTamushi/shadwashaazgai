
let cart = {};

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceSpan = document.getElementById('total-price');
const clearCartButton = document.getElementById('clear-cart');


addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));

        if (cart[productName]) {
            cart[productName].quantity += 1;
        } else {
            cart[productName] = { price: productPrice, quantity: 1 };
        }

        
        updateCartDisplay();
    });
});


function updateCartDisplay() {
    
    cartItemsList.innerHTML = '';

    let total = 0;
    
    for (let item in cart) {
        const li = document.createElement('li');
        const itemDetails = cart[item];
        const quantityText = itemDetails.quantity > 1 ? `${itemDetails.quantity}x` : '';
        li.textContent = `${item} ${quantityText} - $${(itemDetails.price * itemDetails.quantity).toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += itemDetails.price * itemDetails.quantity;
    }

    
    totalPriceSpan.textContent = total.toFixed(2);
}

clearCartButton.addEventListener('click', () => {
    cart = {};
    updateCartDisplay();
});

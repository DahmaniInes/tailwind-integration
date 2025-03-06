// Configuration for the Curlly Shopping Cart

// Cart items data
const cartItems = [
    {
        id: 1,
        name: 'Curl Defining Cream',
        price: 24.99,
        size: '12 oz',
        type: 'Sulfate Free',
        quantity: 1,
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        id: 2,
        name: 'Moisturizing Shampoo',
        price: 19.99,
        size: '8 oz',
        type: 'Sulfate Free',
        quantity: 2,
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        id: 3,
        name: 'Moisturizing Shampoo',
        price: 19.99,
        size: '12 oz',
        type: 'Sulfate Free',
        quantity: 2,
        image: '/placeholder.svg?height=100&width=100'
    }
];

// Site configuration
const siteConfig = {
    siteName: 'cu.rly',
    currency: '$',
    taxRate: 0.08,
    shippingThreshold: 50, // Free shipping above this amount
    contactEmail: 'info@curlly@gmail.com',
    contactPhone: '+1 (0) 123 456',
    address: 'Curlly 2345'
};

// Initialize cart functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all quantity controls
    const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
    const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const checkoutButton = document.querySelector('.checkout-btn');
    
    // Add event listeners to decrease buttons
    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = quantityInputs[index];
            let value = parseInt(input.value);
            if (value > 1) {
                input.value = value - 1;
                updateCartTotals();
            }
        });
    });
    
    // Add event listeners to increase buttons
    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = quantityInputs[index];
            let value = parseInt(input.value);
            input.value = value + 1;
            updateCartTotals();
        });
    });
    
    // Add event listeners to quantity inputs
    quantityInputs.forEach(input => {
        input.addEventListener('change', function() {
            let value = parseInt(this.value);
            if (isNaN(value) || value < 1) {
                this.value = 1;
            }
            updateCartTotals();
        });
    });
    
    // Add event listeners to remove buttons
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.style.opacity = '0';
            setTimeout(() => {
                cartItem.remove();
                updateCartTotals();
                updateCartCount();
            }, 300);
        });
    });
    
    // Add event listener to checkout button
    checkoutButton.addEventListener('click', function() {
        alert('Proceeding to checkout...');
    });
    
    // Function to update cart totals
    function updateCartTotals() {
        let subtotal = 0;
        
        // Get all cart items
        const cartItems = document.querySelectorAll('.cart-item');
        
        cartItems.forEach(item => {
            const priceText = item.querySelector('.item-price p').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity-input').value);
            
            subtotal += price * quantity;
        });
        
        // Calculate tax and total
        const tax = subtotal * siteConfig.taxRate;
        const total = subtotal + tax;
        
        // Update the summary display
        document.querySelector('.summary-item:nth-child(2) span:last-child').textContent = '$' + subtotal.toFixed(2);
        document.querySelector('.summary-item:nth-child(4) span:last-child').textContent = '$' + tax.toFixed(2);
        document.querySelector('.summary-total span:last-child').textContent = '$' + total.toFixed(2);
    }
    
    // Function to update cart count
    function updateCartCount() {
        const cartItems = document.querySelectorAll('.cart-item');
        const cartCount = cartItems.length;
        
        // Update cart count in the header
        document.querySelector('.cart-info p').textContent = `Shopping Cart (${cartCount} items)`;
    }
});
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disable: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

let isSignup = false;
let formTitle = document.getElementById('form-title');
let nameField = document.getElementById('name-field');
let toggleSignup = document.getElementById('toggle-signup');
let submitBtn = document.getElementById('submit-btn');
let forgotPassword = document.getElementById('forgot-password');
let noAccount = document.getElementById('no-account');

// Function to toggle between Login and Signup
function toggleForm(e) {
    e.preventDefault();

    if (isSignup) {
        // Switch back to Login
        formTitle.innerText = 'Login now';
        nameField.style.display = 'none';
        submitBtn.value = 'Login now';
        toggleSignup.innerText = 'click Here';
        noAccount.innerHTML = "Don't have an account? <a href='#' id='toggle-signup'>click Here</a>";
        forgotPassword.style.display = 'block'; // Show the forgot password option again
        isSignup = false;
    } else {
        // Switch to Signup
        formTitle.innerText = 'Signup now';
        nameField.style.display = 'block';
        submitBtn.value = 'Signup now';
        noAccount.innerHTML = 'Already have an account? <a href="#" id="toggle-signup">click Here to login</a>';
        forgotPassword.style.display = 'none'; // Hide the forgot password option in signup mode
        isSignup = true;
    }

    // Reassign the event listener to the dynamically created link
    document.getElementById('toggle-signup').onclick = toggleForm;
}

// Initial event listener for toggle
toggleSignup.onclick = toggleForm;

function validateForm() {
    let emailField = document.getElementById('email-field').value;
    let passwordField = document.getElementById('password-field').value;

    // Basic email pattern check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailField.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check password length
    if (passwordField.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    // All validations passed
    return true;
}

// Attach the validation to form submission
document.querySelector('.login-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent submission if validation fails
    }
});

// Review carousel initialization
var reviewSwiper = new Swiper(".review-slider", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

// Cart functionality
let cart = [];
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const emptyCartMessage = document.getElementById('empty-cart-message');
const totalElement = document.querySelector('.shopping-cart .total');
const checkoutBtn = document.getElementById('checkout-btn');

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name} - ₹${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    totalElement.textContent = `Total: ₹${total.toFixed(2)}`;
    cartCountElement.textContent = cartCount;

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
        checkoutBtn.style.display = 'none';
    } else {
        emptyCartMessage.style.display = 'none';
        checkoutBtn.style.display = 'block';
    }
}

function registerUser(name, email, password) {
    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Registration failed. User may already exist.');
        }
        return response.json();
    })
    .then(data => {
        console.log('User registered:', data);
        alert('Registration successful!');
        // Optionally, reset the form fields after registration
        document.querySelector('.signup-form').reset();
    })
    .catch(error => {
        console.error('Error registering user:', error);
        alert(error.message);  // Display the error message to the user
    });
}

// Call this function when the signup form is submitted
document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name-field').value;
    const email = document.getElementById('email-field').value;
    const password = document.getElementById('password-field').value;

    if (validateForm()) {  // Ensure validation before sending the request
        registerUser(name, email, password);
    }
});

function addToCart(name, price, availableStock) {
    if (availableStock <= 0) {
        alert('Sorry, this item is out of stock.');
        return;  // Exit the function if no stock is available
    }

    const userId = 1;  // Replace this with the actual logged-in user ID if available

    fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userId,
            item: name,
            quantity: 1,
            price: price
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to add item to cart.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Product added to cart:', data);
        // Update the cart display here
        cart.push({ name, price });
        cartCount++;
        updateCartDisplay();
    })
    .catch((error) => { 
        console.error('Error:', error);
        alert(error.message);  // Display the error message to the user
    });
}


function removeFromCart(index) {
    cart.splice(index, 1);
    cartCount--;
    updateCartDisplay();
}

// Add event listeners to all "Add to cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart(name, price);
    });
});

// Checkout functionality
checkoutBtn.addEventListener('click', function() {
    alert('Thank you for your purchase!');
    cart = [];
    cartCount = 0;
    updateCartDisplay();
});

// Initial cart display update
updateCartDisplay();

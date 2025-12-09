



let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
    let cartContainer = document.getElementById("cartItems");
    let totalAmount = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        document.getElementById("totalAmount").innerText = "0";
        return;
    }

    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        totalAmount += item.price * item.quantity;

        cartContainer.innerHTML += `
            <div class="cart-item p-3 m-2">
                <img src="${item.image}" alt="">
                
                <div style="flex-grow:1">
                    <p style="font-size:18px; font-weight:bold;">${item.name}</p>
                    <p>Price: N${item.price}</p>
                </div>

                <div>
                    <button class="qty-btn" onclick="decreaseQty(${item.id})">−</button>
                    <span class="fw-bold m-3">${item.quantity}</span>
                    <button class="qty-btn" onclick="increaseQty(${item.id})">+</button>
                </div>

                <button class="delete-btn" onclick="deleteItem(${item.id})">X</button>
            </div>
        `;
    });

    document.getElementById("totalAmount").innerText = totalAmount.toLocaleString();
}

function increaseQty(id) {
    let item = cart.find(p => p.id === id);
    item.quantity++;
    saveCart();
}

function decreaseQty(id) {
    let item = cart.find(p => p.id === id);
    if (item.quantity > 1) {
        item.quantity--;
    }
    saveCart();
}

function deleteItem(id) {
    cart = cart.filter(p => p.id !== id);
    saveCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Load cart on page open
displayCart();

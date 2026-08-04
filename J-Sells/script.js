const grid = document.getElementById("product-grid");

if (grid) {

    products.forEach(product => {

        grid.innerHTML += `
        <div class="product-card">

            <div class="badge">✓ In Stock</div>

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <div class="stars">⭐⭐⭐⭐⭐</div>

            <p>$${product.price}</p>

            <button class="cart-btn" onclick="addToCart(${product.id})">
                🛒 Add to Cart
            </button>

            <button class="buy-btn" onclick="buyNow(${product.id})">
                ⚡ Buy Now
            </button>

        </div>
        `;

    });

}



let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function addToCart(id){

    const product = products.find(p => p.id === id);

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");

}

function buyNow(id){

    const product = products.find(p => p.id === id);

    alert(
`To purchase:

${product.name}

Please send $${product.price} to

Cash App: $JMPMVP11

After paying, DM @j_seller1to1 with your payment confirmation.`
    );

}


function checkout(){

    alert(
`Checkout

Send your payment to:

Cash App:
$JMPMVP11

After paying, DM @j_seller1to1 with:

• Your name
• Shipping address
• A screenshot of your payment

Thank you for shopping with J-Sells!`
    );

}


function updateCartCount(){

    const counter = document.getElementById("cart-count");

    if(counter){
        counter.innerText = cart.length;
    }

}


const cartContainer = document.getElementById("cart-items");

if (cartContainer) {

    cartContainer.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartContainer.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        cart.forEach((product, index) => {

    total += Number(product.price);

    cartContainer.innerHTML += `
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <div class="stars">⭐⭐⭐⭐⭐</div>

            <p>$${product.price}</p>

            <button class="remove-btn" onclick="removeFromCart(${index})">
                ❌ Remove
            </button>

        </div>
    `;

});

        const totalElement = document.getElementById("total");
        if (totalElement) {
            totalElement.textContent = `Total: $${total}`;
        }
    }
}


function removeFromCart(index){

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}


function searchProducts(){

    const input = document
        .getElementById("search")
        .value
        .toLowerCase();

    const results = document.getElementById("search-results");

    results.innerHTML = "";

    if(input === ""){

        results.style.display = "none";
        return;

    }

    const matches = products.filter(product =>
        product.name.toLowerCase().includes(input)
    );

    if(matches.length === 0){

        results.style.display = "none";
        return;

    }

    results.style.display = "block";

    matches.forEach(product=>{

        results.innerHTML += `
            <div class="search-item"
                 onclick="window.location.href='shop.html'">
                🔍 ${product.name}
            </div>
        `;

    });

}
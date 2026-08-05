// ==========================
// LOAD SUPPLIERS
// ==========================

const grid = document.getElementById("product-grid");

if (grid) {

    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    let productsToShow = products;

    if (productId) {
        productsToShow = products.filter(product => product.id == productId);
    }

    productsToShow.forEach(product => {

        grid.innerHTML += `
        <div class="product-card">

            <div class="badge">In Stock</div>

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="category">${product.category}</p>

            <p class="price">$${product.price}</p>

            <button class="buy-btn" onclick="window.location.href='contact.html'">
                Buy Now
            </button>

        </div>
        `;

    });

}

// ==========================
// SEARCH
// ==========================

function searchProducts(){

    const input = document
        .getElementById("search");

    if(!input) return;

    const value = input.value.toLowerCase();

    const results = document
        .getElementById("search-results");

    if(!results) return;

    results.innerHTML = "";

    if(value === ""){

        results.style.display = "none";

        return;

    }

    const matches = products.filter(product =>

        product.name
            .toLowerCase()
            .includes(value)

    );

    if(matches.length === 0){

        results.style.display = "none";

        return;

    }

    results.style.display = "block";

    matches.forEach(product=>{

        results.innerHTML += `
    <div
        class="search-item"
        onclick="window.location.href='shop.html?id=${product.id}'"
    >
        🔍 ${product.name}
    </div>
    
   `;
        
    });

}

// ==========================
// CLOSE SEARCH RESULTS
// ==========================

document.addEventListener("click", function(event){

    const search = document.getElementById("search");

    const results = document.getElementById("search-results");

    if(!search || !results) return;

    if(

        event.target !== search &&

        !results.contains(event.target)

    ){

        results.style.display = "none";

    }

}); 

const products = [
    { id: 1, name: 'Zawieszka 1', price: 10.00 },
    { id: 2, name: 'Zawieszka 2', price: 15.00 },
    { id: 3, name: 'Bransoleta 1', price: 20.00 },
    { id: 4, name: 'Kolczyki 1', price: 10.00 },
    { id: 5, name: 'Kolczyki 2', price: 15.00 },
    { id: 6, name: 'Kolczyki 3', price: 20.00 },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(col);
    });
}

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`Dodano do koszyka!`);
    localStorage.setItem('cart', JSON.stringify(cart));
}

displayProducts();

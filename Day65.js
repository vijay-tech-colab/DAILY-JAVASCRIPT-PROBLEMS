//! E-commerce Cart System Using JavaScript OOP

class Product {
    constructor(id, name, price, category, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
    }
    updateStock(quantity) {
        if (this.stock >= quantity) {
            this.stock -= quantity;
        } else {
            console.log(`Not enough stock available for ${this.name}`);
        }
    }

    getProductDetails() {
        return `Product: ${this.name}, Price: $${this.price}, Stock: ${this.stock}`;
    }
}

class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        if (product.stock < quantity) {
            console.log(`Not enough stock for ${product.name}`);
            return;
        }

        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new CartItem(product, quantity));
        }

        product.updateStock(quantity);
        console.log(`${quantity} ${product.name}(s) added to cart.`);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
        console.log(`Product with ID ${productId} removed from cart.`);
    }

    getTotalCost() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    checkout() {
        if (this.items.length === 0) {
            console.log("Cart is empty. Add some items first.");
            return;
        }
        console.log(`Total Cost: $${this.getTotalCost()}`);
        console.log("Order placed successfully!");
        this.items = [];
    }
}


// Create Products
const laptop = new Product(1, "Laptop", 800, "Electronics", 5);
const phone = new Product(2, "Phone", 500, "Electronics", 10);

// Create Shopping Cart
const cart = new ShoppingCart();

// Add Items to Cart
cart.addItem(laptop, 2);
cart.addItem(phone, 3);

// Display Total Cost
console.log("Total Cost: $" + cart.getTotalCost());

// Remove an Item
cart.removeItem(2);

// Checkout
cart.checkout();



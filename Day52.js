class Order {
    constructor(orderId) {
      this.orderId = orderId;
      this.items = []; // Array to store items in the order
      this.status = "Pending"; // Default status
    }
  
    // Method to add an item
    addItem(item) {
      this.items.push(item);
    }
  
    // Method to remove an item by name
    removeItem(itemName) {
      this.items = this.items.filter(item => item.name !== itemName);
    }
  
    // Method to calculate the total price of all items
    calculateTotal() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  
    // Method to update the order status
    updateStatus(newStatus) {
      this.status = newStatus;
    }
  
    // Method to display the order details
    displayOrder() {
      console.log(`Order ID: ${this.orderId}`);
      console.log("Items:");
      this.items.forEach(item => {
        console.log(`- ${item.name} (Price: ${item.price}, Quantity: ${item.quantity})`);
      });
      console.log(`Total Price: ${this.calculateTotal()}`);
      console.log(`Status: ${this.status}`);
    }
  }
  
  // Example usage:
  
  const myOrder = new Order(101);
  
  // Adding items to the order
  myOrder.addItem({ name: "Laptop", price: 50000, quantity: 1 });
  myOrder.addItem({ name: "Mouse", price: 1000, quantity: 2 });
  myOrder.addItem({ name: "Keyboard", price: 2000, quantity: 1 });
  
  // Displaying the order
  myOrder.displayOrder();
  
//   // Removing an item
//   myOrder.removeItem("Mouse");
//   console.log("\nAfter removing 'Mouse':");
//   myOrder.displayOrder();
  
//   // Updating the order status
//   myOrder.updateStatus("Shipped");
//   console.log("\nAfter updating status:");
//   myOrder.displayOrder();
  
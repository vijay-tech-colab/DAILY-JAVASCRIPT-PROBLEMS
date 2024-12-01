// Create a class Rectangle with methods to calculate the area and perimeter.

class Rectangle {
    constructor (height,length) {
        this.height = height;
        this.length  = length;
    }
    area(){
        return this.height * this.length;
    }
    perimeter(){
        return 2 * ( this.height + this.length);
    }
}
const rect = new Rectangle(10, 5);
console.log(rect.area()); // 50
console.log(rect.perimeter()); // 30

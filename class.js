class Rectangle {
    // Private and public class field are supported in Node version 12
    // height = 0;
    // width;
    constructor(height = 1, width) {
        this.height = height;
        this.width = width;
    }

    printArea() {
        console.log(`Area is ${this.height * this.width}`);
    }
}

const rectangle = new Rectangle(12, 12);
rectangle.printArea();
class Operation {
  static PI: number = 3.14;

  static getSquare(radius: number): number {
    return Operation.PI * radius * radius;
  }
}
let result = Operation.getSquare(30);
console.log('The area of a circle with radius 30 is ' + result);

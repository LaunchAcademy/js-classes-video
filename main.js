/*
# Learning Goals

- Justify the need for classes in Object Oriented Programming
- Declare a JavaScript class
- Build and invoke a JavaScript constructor
- Implement reader methods for a class
- Implement setter (mutation) methods for a class
*/

// let maxima = {
//   make: 'Nissan',
//   model: 'Maxima',
//   year: 2012,
//   price: 4999,
//   saleSummary() {
//     return `\$${this.price} - ${this.year} ${this.make} ${this.model}`
//   }
// }

// let jetta = {
//   make: 'Volkswagen',
//   model: 'Jetta',
//   year: 2014,
//   price: 6450,
//   saleSummary() {
//     return `\$${this.price} - ${this.year} ${this.make} ${this.model}`
//   }
// }

class Car {
  constructor(make, model, year, price) {
    this.make = make
    this.model = model
    this.year = year
    this.price = price
  }

  saleSummary() {
    return `\$${this.price} - ${this.year} ${this.make} ${this.model}`
  }
}

let jetta = new Car('Volkwagen', 'Jetta', 2014, 6450)
console.log(jetta.saleSummary())
let maxima = new Car('Nissan', 'Maxima', 2012, 4999)
console.log(maxima.saleSummary())

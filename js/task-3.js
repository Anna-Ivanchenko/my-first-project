class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const audi = new Car("Audi", "Q3", 36000);
const bmw = new Car("BMW", "X5", 58900);
const nissan = new Car("Nissan", "Murano", 31700);

console.log(audi);
console.log(bmw);
console.log(nissan);

// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

class CarA {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }
}
const audiA = new CarA({ 
  brand: "Audi", 
  model: "Q3", 
  price: 36000 });

const bmwA = new CarA({ 
  brand: "BMW", 
  model: "X5", 
  price: 58900 });

const nissanA = new CarA({ 
  brand: "Nissan", 
  model: "Murano", 
    price: 31700
});

console.log(audiA);
console.log(bmwA);
console.log(nissanA);

// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

class User {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({ 
	name: "Mango", 
	email: "mango@mail.com" 
});

console.log(mango.getEmail());  // “mango@mail.com”

// !wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww

class UserA {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

console.log(UserA.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}


class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class Building {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    }

    else {
      console.log("reach max apartments in Building");
    }
  }
}

const person1 = new Human("John", "male");
const person2 = new Human("Emili", "female");
const person3 = new Human("Aron", "male");
const person4 = new Human("Casey", "female");
const person5 = new Human("Kim", "female");
const person6 = new Human("Rose", "female");
const person7 = new Human("Carl", "male");

const apartment = new Apartment();
apartment.addResident(person1);
apartment.addResident(person2);
apartment.addResident(person3);
apartment.addResident(person4);
apartment.addResident(person5);
apartment.addResident(person6);
apartment.addResident(person7);

// const apartment2 = new Apartment();
// apartment2.addResident(person4);
// apartment2.addResident(person5);
// apartment2.addResident(person6);
// apartment2.addResident(person7);

const building = new Building(7);
building.addApartment(apartment);
// building.addApartment(apartment2);

console.log(building);


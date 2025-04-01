class Cat {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.species = "Cat";
    }

    speak() {
        return `${this.name} says meow!`;
    }
}

class Dog {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.species = "Dog";
    }

    speak() {
        return `${this.name} says woof!`;
    }
}

class Bird {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.species = "Bird";
    }

    speak() {
        return this.gender === "male"
            ? `It's me! ${this.name}, the parrot!`
            : `${this.name} says squawk!`;
    }
}

module.exports = { Cat, Dog, Bird };

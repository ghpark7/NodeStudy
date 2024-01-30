class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }

    breathe() {
        alert('h-a-a-a-m');
    }
}

class ghpark extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newghpark = new ghpark('human', 'Geonhwi', 'Park');
Human.isHuman(newghpark); // true

console.log(newghpark instanceof ghpark); // true
console.log(newghpark instanceof Human); // true
console.log(newghpark instanceof Object); // true
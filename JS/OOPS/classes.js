// class is blueprint that defines variables, methods common to all objects.
class  Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    speak() {
        console.log("Hi there: ", this.speaks);
    }

    // static methods doen's associated with objects, it can be called directly
    static myType() {
        console.log("Animal");
    }
}

// dont do this every time for every animal, so use class
// let doggy = {
//     name: "dog",
//     speaks: "bhow bhow",
//     legCount: 4
// }
// console.log(doggy["speaks"]);

// statics are called without metods
Animal.myType();
let dog = new Animal('dog', 4, 'bhow bhow');
dog.speak();
// dog.myType();        // give error for calling static methods
let cat = new Animal('cat', 4, 'meow');
cat.speak();
var Person = /** @class */ (function () {
    function Person(message) {
        this.message = message;
    }
    Person.prototype.speak = function () {
        console.log(this.message);
    };
    return Person;
}());
var person = new Person('Barry Alen!');
//person.message = 'Barry Alen''
person.speak();

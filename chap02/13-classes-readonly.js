var Person = /** @class */ (function () {
    function Person(message) {
        this.message = message;
    }
    Person.prototype.speak = function () {
        // this.message = 'speak' + this.message
        console.log(this.message);
    };
    return Person;
}());
var bruce = new Person('Batman');
//burce.message = 'Batman'
bruce.speak();

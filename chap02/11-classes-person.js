var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.speak = function () {
        console.log(this.message);
    };
    return Person;
}());
var batman = new Person();
batman.message = 'Bruce Wayne';
batman.speak();

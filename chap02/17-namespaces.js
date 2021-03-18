var Model;
(function (Model) {
    var FirstClass = /** @class */ (function () {
        function FirstClass() {
        }
        return FirstClass;
    }());
})(Model || (Model = {}));
var Model2;
(function (Model2) {
    var SecondClass = /** @class */ (function () {
        function SecondClass() {
        }
        return SecondClass;
    }());
    var test = new FirstClass();
})(Model2 || (Model2 = {}));

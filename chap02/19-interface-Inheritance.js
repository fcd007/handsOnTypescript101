var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motocycle = /** @class */ (function () {
        function Motocycle(name) {
            this.name = name;
        }
        Motocycle.prototype.updateWeelCount = function (newWeelCount) {
            this.weelCount = newWeelCount;
            console.log("Automobile has " + this.weelCount);
        };
        Motocycle.prototype.showNumberOfWeels = function () {
            console.log("Moved Automobile " + this.weelCount);
        };
        Motocycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motocycle;
    }());
    var moto = new Motocycle('Beginner-cycle');
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));

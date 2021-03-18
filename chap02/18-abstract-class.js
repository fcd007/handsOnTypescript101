var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractNamespace;
(function (AbstractNamespace) {
    var Vehicle = /** @class */ (function () {
        function Vehicle(wheelCount) {
            this.wheelCount = wheelCount;
        }
        Vehicle.prototype.showNumberOfWeel = function () {
            console.log("Move " + this.wheelCount + " miles");
        };
        return Vehicle;
    }());
    var Motocycle = /** @class */ (function (_super) {
        __extends(Motocycle, _super);
        function Motocycle() {
            return _super.call(this, 2) || this;
        }
        Motocycle.prototype.updateWeelCount = function (newWeelCount) {
            this.wheelCount = newWeelCount;
            console.log("Motocycle has " + this.wheelCount);
        };
        Motocycle.prototype.showNumberOfWeel = function () {
            console.log("Move " + this.wheelCount + " miles");
        };
        return Motocycle;
    }(Vehicle));
    var Automobile = /** @class */ (function (_super) {
        __extends(Automobile, _super);
        function Automobile() {
            return _super.call(this, 4) || this;
        }
        Automobile.prototype.updateWeelCount = function (newWeelCount) {
            this.wheelCount = newWeelCount;
            console.log("Automobile has " + this.wheelCount);
        };
        Automobile.prototype.showNumberOfWeel = function () {
            console.log("Move " + this.wheelCount + " miles");
        };
        return Automobile;
    }(Vehicle));
    var motoCycle = new Motocycle();
    motoCycle.updateWeelCount(1);
    var autoMobile = new Automobile();
    autoMobile.updateWeelCount(3);
})(AbstractNamespace || (AbstractNamespace = {}));

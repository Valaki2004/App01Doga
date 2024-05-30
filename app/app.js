var Terfogat = /** @class */ (function () {
    function Terfogat() {
        this.bindHtml();
        this.handleEvent();
    }
    Terfogat.prototype.bindHtml = function () {
        this.sideAInput = document.querySelector("#sideA");
        this.sideBInput = document.querySelector("#sideB");
        this.sideCInput = document.querySelector("#sideC");
        this.areaInput = document.querySelector("#area");
        this.calcButton = document.querySelector("#calcButton");
    };
    Terfogat.prototype.handleEvent = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.startCalc();
        });
    };
    Terfogat.prototype.startCalc = function () {
        var _a, _b, _c;
        var sideA = Number((_a = this.sideAInput) === null || _a === void 0 ? void 0 : _a.value);
        var sideB = Number((_b = this.sideBInput) === null || _b === void 0 ? void 0 : _b.value);
        var sideC = Number((_c = this.sideCInput) === null || _c === void 0 ? void 0 : _c.value);
        var area = this.calcArea(sideA, sideB, sideC);
        this.rederResult(area);
    };
    Terfogat.prototype.calcArea = function (sideA, sideB, sideC) {
        var sol = 3 / 4 * Math.PI * sideA * sideB * sideC;
        return sol;
    };
    Terfogat.prototype.rederResult = function (area) {
        if (this.areaInput) {
            this.areaInput.value = String(area);
        }
    };
    return Terfogat;
}());
new Terfogat;

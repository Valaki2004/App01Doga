class Terfogat {
    sideAInput?: HTMLInputElement | null;
    sideBInput?: HTMLInputElement | null;
    sideCInput?: HTMLInputElement | null;
    areaInput?: HTMLInputElement | null;
    calcButton?: HTMLInputElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.sideAInput = document.querySelector("#sideA");
        this.sideBInput = document.querySelector("#sideB");
        this.sideCInput = document.querySelector("#sideC");
        this.areaInput = document.querySelector("#area");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const sideA = Number(this.sideAInput?.value);
        const sideB = Number(this.sideBInput?.value);
        const sideC = Number(this.sideCInput?.value);
        const area = this.calcArea(sideA,sideB,sideC);
        this.rederResult(area);
    }
    calcArea(sideA: number, sideB :number, sideC :number): number {
        const sol = 3/4 * Math.PI * sideA * sideB * sideC;
        return sol;
    }
    rederResult(area: number) {
        if(this.areaInput) {
            this.areaInput.value = String(area);
        }        
    }
}

new Terfogat

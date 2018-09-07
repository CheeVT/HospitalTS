class LaboratoryExamination {
    start: Date;

    constructor(start) {
        this.start = start;
    }
}

class BloodPressure extends LaboratoryExamination {
    highValue: string;
    lowValue: string;
    puls: string;

    constructor(start, highValue, lowValue, puls) {
        super(start);
        this.highValue = highValue;
        this.lowValue = lowValue;
        this.puls = puls;

        //console.log()
    }
}

class BloodSugarLevel extends LaboratoryExamination {
    sugarValue: string;
    lastMeal: Date;

    constructor(start, sugarValue, lastMeal) {
        super(start);
        this.sugarValue = sugarValue;
        this.lastMeal = lastMeal;
    }
}

export {LaboratoryExamination, BloodPressure, BloodSugarLevel};
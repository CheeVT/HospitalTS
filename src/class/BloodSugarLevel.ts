import LaboratoryExamination from './LaboratoryExamination';

export default class BloodSugarLevel extends LaboratoryExamination {
    sugarValue: string;
    lastMeal: Date;

    constructor(start, sugarValue, lastMeal) {
        super(start);
        this.sugarValue = sugarValue;
        this.lastMeal = lastMeal;
    }
}
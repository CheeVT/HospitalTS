import LaboratoryExamination from './LaboratoryExamination';

export default class BloodPressure extends LaboratoryExamination {
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
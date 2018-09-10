import LaboratoryExamination from './LaboratoryExamination';

import {factory} from "./ConfigLog4j";
const log = factory.getLogger("model.BloodPressure");

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

    finishLaboratoryExamination(highValue, lowValue, puls) {
        this.highValue = highValue;
        this.lowValue = lowValue;
        this.puls = puls;

        log.info('Patient ' + this.patient.firstName + ' ' + this.patient.lastName + ' has finished laboratory examination (Blood pressure)!');
    }
}
import LaboratoryExamination from './LaboratoryExamination';
//import Patient from './Patient';

import {factory} from "./ConfigLog4j";
const log = factory.getLogger("model.BloodSugarLevel");

export default class BloodSugarLevel extends LaboratoryExamination {
    sugarValue: string;
    lastMeal: Date;

    constructor(start, sugarValue, lastMeal) {
        super(start);
    }

    finishLaboratoryExamination(sugarValue, lastMeal) {
        this.sugarValue = sugarValue;
        this.lastMeal = lastMeal;

        log.info('Patient ' + this.patient.firstName + ' ' + this.patient.lastName + ' has finished laboratory examination (Blood sugar level)!');
    }
}
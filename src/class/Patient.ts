import {factory} from "./ConfigLog4j";
const log = factory.getLogger("model.Patient");

export default class Patient {
    firstName: string;
    lastName: string;
    jmbg: number;
    medicalRecord: number;

    constructor(firstName, lastName, jmbg, medicalRecord) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jmbg = jmbg;
        this.medicalRecord = medicalRecord;
        log.info('Patient created: ' + this.firstName + ' ' + this.lastName);
    }

    chooseDoctor(Doctor) {
        log.info('Patient ' + this.firstName + ' ' + this.lastName + ' chose ' + Doctor.firstName + ' ' + Doctor.lastName + ' for his doctor.');
        //console.log('Doktor', Doctor.firstName);
    }

}
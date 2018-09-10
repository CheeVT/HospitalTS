import BloodPressure from './BloodPressure';
import BloodSugarLevel from './BloodSugarLevel';

import { factory } from "./ConfigLog4j";
const log = factory.getLogger("model.Doctor");

export default class Doctor {
    firstName: string;
    lastName: string;
    specialty: string;
    patients = [];

    constructor(firstName, lastName, specialty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialty = specialty;
        log.info('Doctor created: ' + this.firstName + ' ' + this.lastName);
    }

    //Add patients to "patients" array
    addPatient(Patient) {
        this.patients.push(Patient);
    }

    //Method for make appointment of laboratory examination to patient
    makeAppointment(Patient, Check) {
        Check.patient = Patient;
        log.info('Patient ' + Patient.firstName + ' is appointed to examination on ' + Check.start);
    }

    //Method for results after examination (need to write a condition to method, to determine)
    finishChecks(Patient, Check) {
        //console.log('chekkk', Check)
        if (Check instanceof BloodPressure) {
            Check.highValue = '3';
            console.log('BloodPressure');
        }
        else if (Check instanceof BloodSugarLevel) {
            console.log('BloodSuggar');
        }
    }
}
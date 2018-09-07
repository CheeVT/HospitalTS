import BloodPressure from './BloodPressure';
import BloodSugarLevel from './BloodSugarLevel';

export default class Doctor {
    firstName: string;
    lastName: string;
    specialty: string;

    constructor(firstName, lastName, specialty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialty = specialty;
        console.log('Doctor created: ' + this.firstName + ' ' + this.lastName);
    }

    //Method for make appointment of laboratory examination to patient
    makeAppointment(Patient, Check) {
        console.log('Patient ' + Patient.firstName + ' is appointed to examination on ' + Check.start);
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
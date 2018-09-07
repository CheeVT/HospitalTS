import {factory} from "./class/ConfigLog4j";

import Doctor from './class/Doctor';
import Patient from './class/Patient';
import {LaboratoryExamination, BloodPressure, BloodSugarLevel} from './class/LaboratoryExamination';

const logDoctor = factory.getLogger("model.Doctor");

window.onload = function() {
    //create a doctor
    let milan = new Doctor('Milan', 'Milic', 'Dental');
    //create a patient
    let dragan = new Patient('Dragan', 'Draganovic', '0705990847542', '092');
    //patient choose a doctor
    dragan.chooseDoctor(milan);

    
    //doctor create appointments and assign to a patient
    let appointment1 = new BloodPressure(new Date("September 14, 2018 10:00:00"), '', '', '');
    milan.makeAppointment(dragan, appointment1);

    let appointment2 = new BloodSugarLevel(new Date("September 14, 2018 10:15:00"), '', '');
    milan.makeAppointment(dragan, appointment2);

}
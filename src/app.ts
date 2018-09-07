import {factory} from "./class/ConfigLog4j";

import Doctor from './class/Doctor';
import Patient from './class/Patient';
import LaboratoryExamination from './class/LaboratoryExamination';
import BloodPressure from './class/BloodPressure';
import BloodSugarLevel from './class/BloodSugarLevel';

const log = factory.getLogger("model.Product");
const logOther = factory.getLogger("somethingElse");

window.onload = function() {
    let milan = new Doctor('Milan', 'Milic', 'Dental');
    let dragan = new Patient('Dragan', 'Draganovic', '0705990847542', '092');

    dragan.chooseDoctor(milan);

    log.debug("Casting debug magic spell: " + milan.firstName);

    alert('dsaads');

    let pregled1 = new BloodPressure(new Date("February 4, 2016 10:13:00"), '', '', '');

    milan.makeAppointment(dragan, pregled1);
}
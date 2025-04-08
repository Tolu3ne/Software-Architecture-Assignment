import { PatientRecord } from "./patient-record.dto";

export class DoctorPatientRecord extends PatientRecord {
    next_appt: string;
}
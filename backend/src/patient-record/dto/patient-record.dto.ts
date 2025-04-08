import { appointmentHistory } from "./appointment.dto"

export class PatientRecord {
    id: number
    name: string
    dob: string
    gender: string
    appointmentHistory: appointmentHistory
}
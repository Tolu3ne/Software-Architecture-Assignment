import { Prescription } from "@prisma/client";

export class appointmentHistory {
    id: number;
    patient: string;
    doctor: string;
    timestamp: string;
    diagnosis: string;
    treatment: string;
    status: string;
    prescription: Prescription;
}
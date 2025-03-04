import { Injectable } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { PatientRecordService } from "./patient-record-service";
import { DoctorPatientRecordService } from "./doctor-patient-record.service";
import { NursePatientRecordService } from "./nurse-patient-record.service";

@Injectable()
export class PatientRecordServiceFactory {
    constructor(private readonly moduleRef: ModuleRef) {}

    get(role: string): PatientRecordService {
        switch (role) {
            case 'DOCTOR':
                return this.moduleRef.get<PatientRecordService>(DoctorPatientRecordService);
            case 'NURSE':
                return this.moduleRef.get<PatientRecordService>(NursePatientRecordService);
            default:
                throw new Error('Invalid report type');
        }
    }
}
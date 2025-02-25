import { Injectable } from "@nestjs/common";
import { PatientRecordService } from "./patient-record-service";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class NursePatientRecordService implements PatientRecordService {
    constructor(private prisma: PrismaService) {}

    getAllRecords() {
        // TODO: implementation
    }

    getRecordById(id: string) {
        // TODO: implementation
    }
}
import { Injectable } from '@nestjs/common';
import { PatientRecordService } from './patient-record-service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NursePatientRecordService implements PatientRecordService {
  constructor(private prisma: PrismaService) { }

  async getAllRecords() {
    // TODO: implementation
    return this.prisma.patient.findMany();
  }

  getRecordById(id: string) {
    // TODO: implementation
  }
}

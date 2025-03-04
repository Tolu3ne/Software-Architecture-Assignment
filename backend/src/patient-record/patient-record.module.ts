import { Module } from '@nestjs/common';
import { PatientRecordController } from './patient-record.controller';
import { PatientRecordServiceFactory } from './patient-record-factory';
import { DoctorPatientRecordService } from './doctor-patient-record.service';
import { NursePatientRecordService } from './nurse-patient-record.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PatientRecordController],
  providers: [PatientRecordServiceFactory, DoctorPatientRecordService, NursePatientRecordService, PrismaService],
})
export class PatientRecordModule {}

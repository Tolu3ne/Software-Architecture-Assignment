import { Module } from '@nestjs/common';
import { PatientRegisterService } from './patient-register.service';
import { PatientRegisterController } from './patient-register.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PatientRegisterController],
  providers: [PatientRegisterService, PrismaService],
})
export class PatientRegisterModule {}

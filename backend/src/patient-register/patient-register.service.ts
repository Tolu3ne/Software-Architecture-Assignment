import { Injectable } from '@nestjs/common';
import { CreatePatientRegisterDto } from './dto/create-patient-register.dto';
import { UpdatePatientRegisterDto } from './dto/update-patient-register.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PatientRegisterService {
  constructor(private prisma: PrismaService) {}

  create(createPatientRegisterDto: CreatePatientRegisterDto) {
    // TODO: implementation

    return 'This action adds a new patientRegister';
  }

  update(id: number, updatePatientRegisterDto: UpdatePatientRegisterDto) {
    // TODO: implementation
  }

  remove(id: number) {
    // TODO: implementation? or not
    return `This action removes a #${id} patientRegister`;
  }
}

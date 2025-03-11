import { Injectable } from '@nestjs/common';
import { CreatePatientRegisterDto } from './dto/create-patient-register.dto';
import { UpdatePatientRegisterDto } from './dto/update-patient-register.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PatientRegisterService {
  constructor(private prisma: PrismaService) { }

  async create(createPatientRegisterDto: CreatePatientRegisterDto) {
    await this.prisma.patient.create({
      data: { ...createPatientRegisterDto },
    });
    return 'This action adds a new patientRegister';
  }

  async update(id: number, updatePatientRegisterDto: UpdatePatientRegisterDto) {
    await this.prisma.patient.update({
      where: {
        id: id,
      },
      data: { ...updatePatientRegisterDto },
    });
  }

  // async findAll() {
  //   return await this.prisma.patient.findMany();
  // }

  remove(id: number) {
    // TODO: implementation? or not
    return `This action removes a #${id} patientRegister`;
  }
}

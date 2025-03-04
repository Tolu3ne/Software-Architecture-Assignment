import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientRegisterService } from './patient-register.service';
import { CreatePatientRegisterDto } from './dto/create-patient-register.dto';
import { UpdatePatientRegisterDto } from './dto/update-patient-register.dto';

@Controller('patient')
export class PatientRegisterController {
  constructor(private readonly patientRegisterService: PatientRegisterService) {}

  @Post()
  create(@Body() createPatientRegisterDto: CreatePatientRegisterDto) {
    return this.patientRegisterService.create(createPatientRegisterDto);
  }

  // Get all method is omitted in this controller class, get patient self is not implemented cause no authentication module
  
  // @Get()
  // findAll() {
  //   return this.patientRegisterService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.patientRegisterService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientRegisterDto: UpdatePatientRegisterDto) {
    return this.patientRegisterService.update(+id, updatePatientRegisterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientRegisterService.remove(+id);
  }
}

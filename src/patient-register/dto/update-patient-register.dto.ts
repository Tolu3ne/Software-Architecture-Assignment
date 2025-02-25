import { PartialType } from '@nestjs/mapped-types';
import { CreatePatientRegisterDto } from './create-patient-register.dto';

export class UpdatePatientRegisterDto extends PartialType(CreatePatientRegisterDto) {}

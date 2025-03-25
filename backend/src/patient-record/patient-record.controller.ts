import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreatePatientRecordDto } from './dto/create-patient-record.dto';
import { UpdatePatientRecordDto } from './dto/update-patient-record.dto';
import { PatientRecordServiceFactory } from './patient-record-factory';

@Controller('patient')
export class PatientRecordController {
  constructor(
    private readonly patientRecordServiceFactory: PatientRecordServiceFactory,
  ) { }

  // IMPORTANT NOTE: By design both controller classes use the same API gateways, only different methods
  // Therefore, adding a @Post, @Patch or @Delete method into this gateway will lead to error cause of gateway duplication

  // Not implemented: Delete Post, Patch and Delete gateways

  @Get()
  findAll(@Query() queryObj: { type: string; filter: object }) {
    return this.patientRecordServiceFactory
      .get(queryObj.type)
      .getAllRecords(queryObj.filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('type') type: string) {
    return this.patientRecordServiceFactory.get(type).getRecordById(id);
  }
}

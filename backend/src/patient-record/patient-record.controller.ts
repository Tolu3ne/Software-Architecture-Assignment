import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  InternalServerErrorException,
} from '@nestjs/common';
import { PatientRecordServiceFactory } from './patient-record-factory';

@Controller('patient')
export class PatientRecordController {
  constructor(
    private readonly patientRecordServiceFactory: PatientRecordServiceFactory,
  ) {}

  // IMPORTANT NOTE: By design both controller classes use the same API gateways, only different methods
  // Therefore, adding a @Post, @Patch or @Delete method into this gateway will lead to error cause of gateway duplication

  // Not implemented: Delete Post, Patch and Delete gateways

  @Get()
  async findAll(@Query() queryObj: { type: string; searchTerm?: string }) {
    try {    
      const data = await this.patientRecordServiceFactory
        .get(queryObj.type)
        .getAllRecords(queryObj.searchTerm)
      return {
        success: true,
        data: data
      }
    }

    catch (error) {
      console.error('Error fetching patient records:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to fetch patient records',
        error: errorMessage,
      });
    }
  }

  @Get('/all')
  async findAllRecords(@Query('type') type: string) {
    try {    
      const data = await this.patientRecordServiceFactory
        .get(type)
        .getAllRecords()
      console.log(data[0].id)
      return {
        success: true,
        data: data
      }
    }

    catch (error) {
      console.error('Error fetching patient records:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      throw new InternalServerErrorException({
        success: false,
        message: 'Failed to fetch patient records',
        error: errorMessage,
      });
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('type') type: string) {
    return this.patientRecordServiceFactory.get(type).getRecordById(id);
  }
}

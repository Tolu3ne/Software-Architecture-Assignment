import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientRegisterModule } from './patient-register/patient-register.module';
import { PatientRecordModule } from './patient-record/patient-record.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [PatientRegisterModule, PatientRecordModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

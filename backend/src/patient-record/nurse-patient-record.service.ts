import { Injectable } from '@nestjs/common';
import { PatientRecordService } from './patient-record-service';
import { PrismaService } from 'src/prisma.service';
import { NursePatientRecord } from './dto/nurse-patient-record.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class NursePatientRecordService implements PatientRecordService {
  constructor(private prisma: PrismaService) { }

  async getAllRecords(searchTerm? : string): Promise<NursePatientRecord[]> {
    const result = await this.prisma.$queryRaw`
      WITH next_appointment AS (
    SELECT a.patientId, a.timestamp AS next_appt
    FROM Appointment a
    WHERE STR_TO_DATE(a.timestamp, '%H:%i %d/%m/%Y') = (
        SELECT MAX(STR_TO_DATE(b.timestamp, '%H:%i %d/%m/%Y'))
        FROM Appointment b
        WHERE b.patientId = a.patientId
    )
)
SELECT 
    p.id AS patient_id,
    p.name AS patient_name,
    p.dob,
    p.gender,
    na.next_appt,
    (
        SELECT JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', a.id,
                'patient', p.name,
                'doctor', d.name,
                'timestamp', a.timestamp,
                'diagnosis', a.diagnosis,
                'treatment', a.treatment,
                'status', a.status,
                'prescription', (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'medicineName', pr.medicineName,
                            'quantity', pr.quanity
                        )
                    )
                    FROM Prescription pr
                    WHERE pr.appointmentId = a.id
                )
            )
        )
        FROM (
            SELECT * FROM Appointment WHERE patientId = p.id ORDER BY STR_TO_DATE(timestamp, '%H:%i %d/%m/%Y') DESC
        ) a
        LEFT JOIN Doctor d ON a.doctorId = d.id
    ) AS appointmentHistory
FROM Patient p
WHERE ${searchTerm ? Prisma.sql`p.name LIKE ${'%' + searchTerm + '%'}` : Prisma.sql`TRUE`}
LEFT JOIN next_appointment na ON p.id = na.patientId;
    ` as Object[];
    const typecast: NursePatientRecord[] = result.map(item => {
            const record = new NursePatientRecord();
            record.id = item['patient_id'];
            record.name = item['patient_name'];
            record.dob = item['dob'];
            record.gender = item['gender'];
            record.appointmentHistory = item['appointmentHistory']
            return record
          })
    return typecast as NursePatientRecord[];
  }

  getRecordById(id: string) {
    // TODO: implementation
  }
}

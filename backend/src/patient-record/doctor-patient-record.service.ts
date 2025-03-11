import { Injectable } from '@nestjs/common';
import { PatientRecordService } from './patient-record-service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DoctorPatientRecordService implements PatientRecordService {
  constructor(private prisma: PrismaService) { }

  async getAllRecords() {
    // const result = await this.prisma.$queryRaw`
    //   WITH cte AS (
    //     SELECT a.timestamp, a.patientId,
    //            UNIX_TIMESTAMP(STR_TO_DATE(a.timestamp, '%H:%i %d/%m/%Y')) AS epoch_time
    //     FROM Appointment a
    //   ), cte2 AS (
    //   SELECT timestamp, patientId FROM cte c1
    //   WHERE epoch_time = (
    //     SELECT MAX(UNIX_TIMESTAMP(STR_TO_DATE(b.timestamp, '%H:%i %d/%m/%Y')))
    //     FROM Appointment b
    //     WHERE b.patientId = c1.patientId
    //   );
    //   )
    //   SELECT p.*, cte2.timestamp as next_appt
    //   FROM Patient p
    //   LEFT JOIN cte2
    //   ON Patient.id = cte2.patientId
    // `;

    const result = await this.prisma.$queryRaw`
     WITH cte AS (
  SELECT a.timestamp, a.patientId,
         UNIX_TIMESTAMP(STR_TO_DATE(a.timestamp, '%H:%i %d/%m/%Y')) AS epoch_time
  FROM Appointment a
),
cte2 AS (
  SELECT c1.timestamp, c1.patientId
  FROM cte c1
  WHERE c1.epoch_time = (
    SELECT MAX(c2.epoch_time)
    FROM cte c2
    WHERE c2.patientId = c1.patientId
  )
)
SELECT p.*, cte2.timestamp AS next_appt
FROM Patient p
LEFT JOIN cte2 ON p.id = cte2.patientId;
    `;

    return result;
  }

  getRecordById(id: string) {
    // TODO: implementation
  }
}

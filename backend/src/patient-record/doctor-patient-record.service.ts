import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PatientRecordService } from './patient-record-service';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { DoctorPatientRecord } from './dto/doctor-patient-record.dto';

@Injectable()
export class DoctorPatientRecordService implements PatientRecordService {
  constructor(private prisma: PrismaService) {}

  async getAllRecords(searchTerm?: string) : Promise<DoctorPatientRecord[]> {
    try {
      //       const result = await this.prisma.$queryRaw`
      // WITH cte AS (
      //   -- Convert timestamp to actual datetime for sorting and filtering
      //   SELECT
      //     a.id AS appointment_id,
      //     a.patientId,
      //     a.doctorId,
      //     a.diagnosis,
      //     a.status,
      //     a.treatment,
      //     a.timestamp,
      //     STR_TO_DATE(a.timestamp, '%H:%i %d/%m/%Y') AS appt_date
      //   FROM Appointment a
      // ),
      // cte_next_appt AS (
      //   -- Get the next upcoming appointment for each patient
      //   SELECT c1.patientId, c1.timestamp AS next_appt
      //   FROM cte c1
      //   WHERE c1.appt_date = (
      //     SELECT MIN(c2.appt_date)
      //     FROM cte c2
      //     WHERE c2.patientId = c1.patientId
      //     AND c2.appt_date > NOW() -- Select only future appointments
      //   )
      // ),
      // cte_appointments AS (
      //   -- Retrieve all appointment history with doctor and prescriptions
      //   SELECT
      //     a.patientId,
      //     a.appointment_id,
      //     d.name AS doctor_name,
      //     a.timestamp,
      //     a.diagnosis,
      //     a.treatment,
      //     a.status,
      //     IFNULL(
      //       JSON_ARRAYAGG(
      //         JSON_OBJECT(
      //           'medicineName', p.medicineName,
      //           'quantity', p.quanity
      //         )
      //       ),
      //       JSON_ARRAY()
      //     ) AS prescriptions
      //   FROM cte a
      //   JOIN Doctor d ON a.doctorId = d.id
      //   LEFT JOIN Prescription p ON a.appointment_id = p.appointmentId
      //   GROUP BY a.appointment_id, a.patientId, d.name, a.timestamp, a.diagnosis, a.treatment, a.status
      //   ORDER BY STR_TO_DATE(a.timestamp, '%H:%i %d/%m/%Y') DESC
      // )
      // SELECT
      //   p.id AS patient_id,
      //   p.name,
      //   p.dob,
      //   p.gender,
      //   n.next_appt,
      //   IFNULL(
      //     JSON_ARRAYAGG(
      //       JSON_OBJECT(
      //         'id', a.appointment_id,
      //         'patient', p.name,
      //         'doctor', a.doctor_name,
      //         'timestamp', a.timestamp,
      //         'diagnosis', a.diagnosis,
      //         'treatment', a.treatment,
      //         'status', a.status,
      //         'prescription', a.prescriptions
      //       )
      //     ),
      //     JSON_ARRAY()
      //   ) AS appointmentHistory
      // FROM Patient p
      // LEFT JOIN cte_next_appt n ON p.id = n.patientId
      // LEFT JOIN cte_appointments a ON p.id = a.patientId
      // GROUP BY p.id, p.name, p.dob, p.gender, n.next_appt;
      //       `;

      const result = await this.prisma.$queryRaw`
WITH cte AS (
  SELECT 
    a.id AS appointment_id,
    a.patientId,
    a.doctorId,
    a.diagnosis,
    a.status,
    a.treatment,
    a.timestamp,
    STR_TO_DATE(a.timestamp, '%H:%i %d/%m/%Y') AS appt_date
  FROM Appointment a
),
cte_next_appt AS (
  SELECT c1.patientId, c1.timestamp AS next_appt
  FROM cte c1
  WHERE c1.appt_date = (
    SELECT MIN(c2.appt_date)
    FROM cte c2
    WHERE c2.patientId = c1.patientId
    AND c2.appt_date > NOW()
  )
),
cte_appointments AS (
  SELECT 
    a.patientId,
    a.appointment_id,
    d.name AS doctor_name,
    a.timestamp,
    a.diagnosis,
    a.treatment,
    a.status,
    IFNULL(
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'medicineName', p.medicineName,
          'quantity', p.quanity
        )
      ), 
      JSON_ARRAY()
    ) AS prescriptions
  FROM cte a
  JOIN Doctor d ON a.doctorId = d.id
  LEFT JOIN Prescription p ON a.appointment_id = p.appointmentId
  GROUP BY a.appointment_id, a.patientId, d.name, a.timestamp, a.diagnosis, a.treatment, a.status
  ORDER BY STR_TO_DATE(a.timestamp, '%H:%i %d/%m/%Y') DESC
)
SELECT 
  p.id AS patient_id,
  p.name,
  p.dob,
  p.gender,
  n.next_appt,
  IFNULL(
    JSON_ARRAYAGG(
      JSON_OBJECT(
        'id', a.appointment_id,
        'patient', p.name,
        'doctor', a.doctor_name,
        'timestamp', a.timestamp,
        'diagnosis', a.diagnosis,
        'treatment', a.treatment,
        'status', a.status,
        'prescription', a.prescriptions
      )
    ), 
    JSON_ARRAY()
  ) AS appointmentHistory
FROM Patient p
LEFT JOIN cte_next_appt n ON p.id = n.patientId
LEFT JOIN cte_appointments a ON p.id = a.patientId
WHERE ${searchTerm ? Prisma.sql`p.name LIKE ${'%' + searchTerm + '%'}` : Prisma.sql`TRUE`}
GROUP BY p.id, p.name, p.dob, p.gender, n.next_appt;
    ` as Object[]; 
      const typecast: DoctorPatientRecord[] = result.map(item => {
        const record = new DoctorPatientRecord();
        record.id = item['patient_id'];
        record.name = item['name'];
        record.dob = item['dob'];
        record.gender = item['gender'];
        record.next_appt = item['next_appt'];
        record.appointmentHistory = item['appointmentHistory']
        return record
      })
      console.log(typecast)
      return typecast;
    } catch (error) {
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

  // async getAppointmentHistory(patientId: string) {
  //   try {
  //     const result = await this.prisma.$queryRaw`
  //       SELECT a.timestamp, a.diagnosis, a.treatment, a.status, a.prescription
  //       FROM Appointment a
  //       WHERE a.patientId = ${patientId}
  //     `;
  //     return { success: true, data: result };
  //   } catch (error) {
  //     console.error('Error fetching appointment history:', error);
  //     const errorMessage =
  //       error instanceof Error ? error.message : 'Unknown error';
  //     throw new InternalServerErrorException({
  //       success: false,
  //       message: 'Failed to fetch appointment history',
  //       error: errorMessage,
  //     });
  //   }
  // }

  getRecordById(id: string) {
    // TODO: implementation
  }
}

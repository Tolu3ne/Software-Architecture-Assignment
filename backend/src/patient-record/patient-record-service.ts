import { PatientRecord } from "./dto/patient-record.dto";

export interface PatientRecordService {
  getRecordById: (id: string) => void;
  getAllRecords: (searchTerm?: string) => Promise<PatientRecord[]>;
  // getAppointmentHistory: (patientId: string) => Promise<any>;
}

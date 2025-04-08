import { PatientRecord } from "./dto/patient-record.dto";

export interface PatientRecordService {
  getRecordById: (id: string) => void;
  getAllRecords: (filter: { searchTerm?: string }) => Promise<PatientRecord[]>;
  // getAppointmentHistory: (patientId: string) => Promise<any>;
}

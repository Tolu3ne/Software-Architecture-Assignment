export interface PatientRecordService {
  getRecordById: (id: string) => void;
  getAllRecords: (filter: { seartTerm?: string }) => Promise<any>;
  // getAppointmentHistory: (patientId: string) => Promise<any>;
}

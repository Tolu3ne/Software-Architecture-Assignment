export interface PatientRecordService {
  getRecordById: (id: string) => void;
  getAllRecords: (filter: { searchTerm?: string }) => Promise<any>;
  // getAppointmentHistory: (patientId: string) => Promise<any>;
}

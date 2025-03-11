export interface PatientRecordService {
  getRecordById: (id: string) => void;
  getAllRecords: () => Promise<any>;
}

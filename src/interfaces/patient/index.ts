import { AppointmentInterface } from 'interfaces/appointment';
import { UserInterface } from 'interfaces/user';
import { InsuranceInterface } from 'interfaces/insurance';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  user_id?: string;
  date_of_birth?: any;
  gender?: string;
  insurance_id?: string;
  medical_history?: string;
  emergency_contact?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  user?: UserInterface;
  insurance?: InsuranceInterface;
  _count?: {
    appointment?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  gender?: string;
  insurance_id?: string;
  medical_history?: string;
  emergency_contact?: string;
}

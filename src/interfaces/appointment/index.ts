import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  status: string;
  patient_id?: string;
  doctor_id?: string;
  organization_id?: string;
  appointment_type?: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  patient_id?: string;
  doctor_id?: string;
  organization_id?: string;
  appointment_type?: string;
}

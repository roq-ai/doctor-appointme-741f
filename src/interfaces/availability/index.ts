import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AvailabilityInterface {
  id?: string;
  doctor_id?: string;
  day_of_week: string;
  start_time: any;
  end_time: any;
  organization_id?: string;
  status?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface AvailabilityGetQueryInterface extends GetQueryInterface {
  id?: string;
  doctor_id?: string;
  day_of_week?: string;
  organization_id?: string;
  status?: string;
}

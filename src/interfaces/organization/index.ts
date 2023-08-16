import { AppointmentInterface } from 'interfaces/appointment';
import { AvailabilityInterface } from 'interfaces/availability';
import { InsuranceInterface } from 'interfaces/insurance';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  location?: string;
  working_hours?: string;
  contact_number?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  availability?: AvailabilityInterface[];
  insurance?: InsuranceInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    availability?: number;
    insurance?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  working_hours?: string;
  contact_number?: string;
  website?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

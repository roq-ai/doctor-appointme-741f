import { PatientInterface } from 'interfaces/patient';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id?: string;
  coverage?: string;
  terms_and_conditions?: string;
  provider_id?: string;
  created_at?: any;
  updated_at?: any;
  patient?: PatientInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    patient?: number;
  };
}

export interface InsuranceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
  coverage?: string;
  terms_and_conditions?: string;
  provider_id?: string;
}

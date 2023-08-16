import axios from 'axios';
import queryString from 'query-string';
import { InsuranceInterface, InsuranceGetQueryInterface } from 'interfaces/insurance';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInsurances = async (
  query?: InsuranceGetQueryInterface,
): Promise<PaginatedInterface<InsuranceInterface>> => {
  const response = await axios.get('/api/insurances', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInsurance = async (insurance: InsuranceInterface) => {
  const response = await axios.post('/api/insurances', insurance);
  return response.data;
};

export const updateInsuranceById = async (id: string, insurance: InsuranceInterface) => {
  const response = await axios.put(`/api/insurances/${id}`, insurance);
  return response.data;
};

export const getInsuranceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/insurances/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInsuranceById = async (id: string) => {
  const response = await axios.delete(`/api/insurances/${id}`);
  return response.data;
};

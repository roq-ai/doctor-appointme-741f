import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  date_of_birth: yup.date().nullable(),
  gender: yup.string().nullable(),
  medical_history: yup.string().nullable(),
  emergency_contact: yup.string().nullable(),
  user_id: yup.string().nullable(),
  insurance_id: yup.string().nullable(),
});

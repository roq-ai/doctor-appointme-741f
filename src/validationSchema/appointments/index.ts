import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  status: yup.string().required(),
  appointment_type: yup.string().nullable(),
  patient_id: yup.string().nullable(),
  doctor_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});

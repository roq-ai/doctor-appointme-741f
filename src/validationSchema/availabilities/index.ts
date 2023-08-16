import * as yup from 'yup';

export const availabilityValidationSchema = yup.object().shape({
  day_of_week: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  status: yup.string().nullable(),
  doctor_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});

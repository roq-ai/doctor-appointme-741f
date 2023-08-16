import * as yup from 'yup';

export const insuranceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  coverage: yup.string().nullable(),
  terms_and_conditions: yup.string().nullable(),
  organization_id: yup.string().nullable(),
  provider_id: yup.string().nullable(),
});

import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  invited_user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});

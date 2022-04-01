import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { ILoginForm } from '~/utils/interfaces/forms/login';

const PW_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.;:_=<>~`{}|()[\]\/'"\\]).{8,30}$/;
const min = 8;
const max = 30;

export const useLoginForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form: ILoginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    initialErrors: {
      email: t('FORM.ERRORS.REQUIRED_FIELD'),
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .email(t('FORM.ERRORS.INVALID_EMAIL_FORMAT')),
      password: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .min(min, t('FORM.ERRORS.MIN_LENGTH_REQUIRED', { min }))
        .max(max, t('FORM.ERRORS.MAX_LENGTH_REQUIRED', { max }))
        .matches(PW_REGEX, t('FORM.ERRORS.INVALID_PASSWORD_FORMAT')),
    }),
    onSubmit,
  });

  return form;
};

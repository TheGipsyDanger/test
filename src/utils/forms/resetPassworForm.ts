import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import {
  IResetPasswordRequestForm,
  IResetPasswordRequestCodeForm,
  IResetPasswordRequestEmailForm,
} from '~/utils/interfaces/forms/resetPassword';

export const useResetPasswordRequestEmailForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form: IResetPasswordRequestEmailForm = useFormik({
    initialValues: {
      email: '',
    },
    initialErrors: {
      email: t('FORM.ERRORS.REQUIRED_FIELD'),
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .email(t('FORM.ERRORS.INVALID_EMAIL_FORMAT')),
    }),
    onSubmit,
  });

  return form;
};

export const useResetPasswordRequestCodeForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form: IResetPasswordRequestCodeForm = useFormik({
    initialValues: {
      email: '',
      code: '',
    },
    initialErrors: {
      email: t('FORM.ERRORS.REQUIRED_FIELD'),
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .email(t('FORM.ERRORS.INVALID_EMAIL_FORMAT')),
      code: yup.string().required(t('FORM.ERRORS.REQUIRED_FIELD')),
    }),
    onSubmit,
  });

  return form;
};

const PW_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.;:_=<>~`{}|()[\]\/'"\\]{2}).{8,64}$/;
const min = 8;
const max = 64;

export const useResetPasswordForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form: IResetPasswordRequestForm = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    initialErrors: {
      newPassword: t('FORM.ERRORS.REQUIRED_FIELD'),
    },
    validationSchema: yup.object().shape({
      newPassword: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .min(min, t('FORM.ERRORS.MIN_LENGTH_REQUIRED', { min }))
        .max(max, t('FORM.ERRORS.MAX_LENGTH_REQUIRED', { max }))
        .matches(PW_REGEX, t('FORM.ERRORS.INVALID_PASSWORD_FORMAT')),
      confirmPassword: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .test('pw-match', t('FORM.ERRORS.PASS_NOT_EQUAL'), function (value) {
          return this.parent.newPassword === value;
        }),
    }),
    onSubmit,
  });

  return form;
};

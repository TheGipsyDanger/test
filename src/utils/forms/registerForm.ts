import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { cpf } from 'vindicce-validator';
import * as yup from 'yup';

import { dateFormmater } from '../functions/fields';

import { IRegisterForm } from '~/utils/interfaces/forms/register';

const PW_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.;:_=<>~`{}|()[\]\/'"\\]{2}).{8,64}$/;
const min = 8;
const max = 64;

export const useRegisterForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form: IRegisterForm = useFormik({
    initialValues: {
      name: '',
      document: '',
      phone: '',
      birthday: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    initialErrors: {
      email: t('FORM.ERRORS.REQUIRED_FIELD'),
    },
    validationSchema: yup.object().shape({
      name: yup.string().required(t('FORM.ERRORS.REQUIRED_FIELD')),
      document: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .test(
          'document-length',
          t('FORM.ERRORS.INVALID_TAXID_FORMAT'),
          function (document) {
            const documentToCheck = String(document);
            return documentToCheck.length == 11;
          }
        )
        .test(
          'document-length',
          t('FORM.ERRORS.INVALID_TAXID_FORMAT'),
          function (document) {
            const documentToCheck = String(document);
            if (documentToCheck.length == 11) {
              return cpf.isValid(documentToCheck);
            }
          }
        ),
      phone: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .test(
          'birthday-format',
          t('FORM.ERRORS.INVALID_PHONE_FORMAT'),
          function (phone) {
            const phoneCheck: string = String(phone);
            return phoneCheck.length == 11;
          }
        ),
      birthday: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .test(
          'birthday-format',
          t('FORM.ERRORS.INVALID_DATE_LENGTH'),
          function (birthday) {
            const birthdayCheck: string = String(birthday);
            return birthdayCheck.length == 8;
          }
        )
        .test(
          'birthday-format',
          t('FORM.ERRORS.INVALID_DATE_DD'),
          function (birthday) {
            const birthdayCheck: string = String(birthday);
            const divideDate: string[] =
              dateFormmater(birthdayCheck).split('/');
            return Number(divideDate[0]) <= 31;
          }
        )
        .test(
          'birthday-format',
          t('FORM.ERRORS.INVALID_DATE_MM'),
          function (birthday) {
            const birthdayCheck: string = String(birthday);
            const divideDate: string[] =
              dateFormmater(birthdayCheck).split('/');
            return Number(divideDate[1]) <= 12;
          }
        )
        .test(
          'birthday-format',
          t('FORM.ERRORS.INVALID_DATE_YYYY'),
          function (birthday) {
            const birthdayCheck: string = String(birthday);
            const divideDate: string[] =
              dateFormmater(birthdayCheck).split('/');
            const now = new Date();
            return Number(divideDate[2]) <= now.getFullYear();
          }
        )
        .test(
          'birthday-format',
          t('FORM.ERRORS.INVALID_AGE'),
          function (birthday) {
            const birthdayCheck: string = String(birthday);
            const divideDate: string[] =
              dateFormmater(birthdayCheck).split('/');
            const momentDate = `${divideDate[1]}/${divideDate[0]}/${divideDate[2]}`;
            return moment().diff(moment(momentDate), 'years') >= 18;
          }
        ),
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
      confirmPassword: yup
        .string()
        .required(t('FORM.ERRORS.REQUIRED_FIELD'))
        .test('pw-match', t('FORM.ERRORS.PASS_NOT_EQUAL'), function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit,
  });

  return form;
};

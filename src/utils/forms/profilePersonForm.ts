import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { IProfilePersonForm } from '~/utils/interfaces/forms/profilePerson';

export const useProfilePersonForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form: IProfilePersonForm = useFormik({
    initialValues: {
      name: '',
      document: '',
      birthday: '',
      paswordddd: '',
    },
    initialErrors: {
      name: t('FORM.ERRORS.REQUIRED_FIELD'),
    },
    validationSchema: yup.object().shape({
      email: yup.string(),
      paswordddd: yup.string(),
      birthday: yup.string(),
      document: yup.string(),
    }),
    onSubmit,
  });

  return form;
};

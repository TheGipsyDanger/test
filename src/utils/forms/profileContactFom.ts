import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { IProfileContactForm } from '~/utils/interfaces/forms/profileContact';

export const useProfileContactForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form: IProfileContactForm = useFormik({
    initialValues: {
      phone: '',
      email: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string(),
      phone: yup.string(),
    }),
    onSubmit,
  });

  return form;
};

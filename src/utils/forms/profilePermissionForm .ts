import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

export const useProfilePersonForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form = useFormik({
    initialValues: {
      email: false,
      sms: false,
      nationality: false,
    },
    validationSchema: yup.object().shape({
      nationality: yup.boolean(),
      sms: yup.boolean(),
      email: yup.boolean(),
    }),
    onSubmit,
  });

  return form;
};

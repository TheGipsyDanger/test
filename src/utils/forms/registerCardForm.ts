import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { cpf } from 'vindicce-validator';
import * as yup from 'yup';

import { IRegisterCardForm } from '~/utils/interfaces/forms/registerCard';

export const useRegisterCardForm = (onSubmit: any) => {
  const { t } = useTranslation();

  const form: IRegisterCardForm = useFormik({
    initialValues: {
      cardNumber: 0,
      userCardName: '',
      validity: '',
      cvv: 0,
      cpf: 0,
      surname: '',
    },
    initialErrors: {
      cardNumber: t('FORM.ERRORS.REQUIRED_FIELD'),
      userCardName: t('FORM.ERRORS.REQUIRED_FIELD'),
      validity: t('FORM.ERRORS.REQUIRED_FIELD'),
      cvv: t('FORM.ERRORS.REQUIRED_FIELD'),
      cpf: t('FORM.ERRORS.REQUIRED_FIELD'),
    },
    validationSchema: yup.object().shape({
      cardNumber: yup.number().required(t('FORM.ERRORS.REQUIRED_FIELD')),
      userCardName: yup.string().required(t('FORM.ERRORS.REQUIRED_FIELD')),
      validity: yup.string().required(t('FORM.ERRORS.REQUIRED_FIELD')),
      cvv: yup.number().required(t('FORM.ERRORS.REQUIRED_FIELD')),
      cpf: yup
        .number()
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
        )
        .required(t('FORM.ERRORS.REQUIRED_FIELD')),
    }),
    onSubmit: (values: any) => {
      onSubmit(values);
    },
  });

  return form;
};

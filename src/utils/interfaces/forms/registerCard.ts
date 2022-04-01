import { FormikProps } from 'formik';

export interface IRegisterCardFormProps {
  cardNumber: number;
  userCardName: string;
  validity: string;
  cvv: number;
  cpf: number;
  surname: string;
}

export type IRegisterCardForm = FormikProps<IRegisterCardFormProps>;

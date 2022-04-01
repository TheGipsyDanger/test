import { IField, IFormOption } from '~/utils';

export interface IResetPasswordModal {}

export interface IResetPasswordModalLayout extends IResetPasswordModal {
  t: any;
  isIos: boolean;
  step: number;
  fields: IField[];
  showRequestModal: boolean;
  closeModal(): void;
  form: IFormOption;
}

export interface IResetPasswordModalHeader
  extends Pick<IResetPasswordModalLayout, 't' | 'closeModal'> {}
export interface IResetPasswordModalResetForm
  extends Omit<IResetPasswordModalLayout, 'showRequestModal' | 'step'> {}

export interface IResetPasswordModalEmail
  extends Pick<IResetPasswordModalLayout, 'form' | 'fields' | 'isIos'> {}

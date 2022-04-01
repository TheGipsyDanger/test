import {
  IField,
  IModalSize,
  ILoginForm,
  withChildren,
  ISelectorItem,
  IRegisterForm,
} from '~/utils';

export interface ILoginAndRegisterModal {
  data?: any;
}

export interface ILoginAndRegisterModalLayout extends ILoginAndRegisterModal {
  t: any;
  isLogin: boolean;
  isShow: boolean;
  fields: IField[];
  form: ILoginForm | IRegisterForm;
  keyboardHeight: number;
  goToResetPssword(): void;
  closeModal(): void;
  showInfoModal: boolean;
  modalSizes: IModalSize;
  selectorData: ISelectorItem[];
  selectorPress(index: number): void;
}

export interface ILoginAndRegisterModalHeader
  extends Pick<ILoginAndRegisterModalLayout, 't' | 'closeModal'> {}

export interface ILoginAndRegisterModalLogin
  extends Pick<
    ILoginAndRegisterModalLayout,
    't' | 'form' | 'fields' | 'goToResetPssword'
  > {}

export interface ILoginAndRegisterModalRegister
  extends Pick<ILoginAndRegisterModalLayout, 't' | 'form' | 'fields'> {}

export interface IContainer
  extends withChildren,
    Pick<
      ILoginAndRegisterModalLayout,
      'isShow' | 'keyboardHeight' | 'modalSizes'
    > {}

export interface IInfoModal
  extends withChildren,
    Pick<ILoginAndRegisterModalLayout, 't' | 'modalSizes' | 'closeModal'> {}

export const selectorDataArray: ISelectorItem[] = [
  {
    label: 'Login',
    isActive: true,
  },
  {
    label: 'Cadastro',
    isActive: false,
  },
];

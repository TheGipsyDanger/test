import { IField, IRegisterCardForm } from "~/utils";

export interface ITestView {
  data?: any;
}

export interface ITestViewLayout extends ITestView {
  fields: IField[];
  t: any;
  form: IRegisterCardForm;
}

export interface IRegisterCardForms
  extends Pick<
  ITestViewLayout,
  't' | 'form' | 'fields'
  > { }
import { IFormOption, IField } from '~/utils';

export interface IFormInput extends IField {
  form: IFormOption;
  bg?: string;
  showErros?: boolean;
}

export interface IFormInputLayout extends IFormInput {
  onBlur(): void;
  defineShowIcon(): void;
  handleHide(): void;
  onChangeText(text: string): void;
}

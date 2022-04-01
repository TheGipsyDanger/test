import { IVariants, IButtonsVariants } from '~/utils';
export interface IButton {
  onPress: any;
  text: string;
  firstIcon?: string;
  secondIcon?: string;
  variant?: IButtonsVariants;
  height?: number;
  textVariant?: IVariants;
  color?: ITextColor;
  disabled?: boolean;
  backgroundColor?: string;
  borderColorProps?: string;
}

export type ITextColor = 'modals' | 'text' | 'primary';

export interface IButtonLayout extends IButton { }

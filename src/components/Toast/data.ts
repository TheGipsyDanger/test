import { withChildren } from '../../utils';

export interface IToast extends withChildren {
  onPress(): void;
}

export interface IToastLayout extends IToast {
  bottom: number;
}

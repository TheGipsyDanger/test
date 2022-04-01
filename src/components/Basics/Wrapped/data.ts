import {
  withChildren,
  IWrappedVariants,
  IButtonsVariants,
  IWrappedSystem,
} from '~/utils';

export interface IWrapped extends IWrappedSystem, withChildren {
  ref?: any;
  hitSlop?: any;
  variant?: IWrappedVariants;
  shadow?: string;
  testID?: string;
  center?: boolean;
  onPress?(): void;
  activeOpacity?: number;
}

export interface IWrappedLayout extends IWrapped {}

export type IWrappedButtonLayout = Omit<IWrapped, 'variant'> & {
  variant: IButtonsVariants;
};

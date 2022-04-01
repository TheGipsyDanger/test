import { withChildren, IWrappedVariants } from '~/utils';

import { SpaceProps, LayoutProps } from 'styled-system';

export interface IModalContainer extends LayoutProps, SpaceProps, withChildren {
  size?: number;
  isCenter?: boolean;
  hasSafeArea?: boolean;
  noTop?: boolean;
  variant?: IWrappedVariants;
}

export interface IModalContainerLayout extends IModalContainer {
  isIos: boolean;
  isShow: boolean;
  modalSize: number;
  androidModalSize: number;
  keyboardVerticalOffset: number;
}

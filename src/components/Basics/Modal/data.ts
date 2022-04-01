import { withChildren } from '~/utils';
import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  SpaceProps,
  TypographyProps,
  BackgroundColorProps,
  LayoutProps,
} from 'styled-system';

export interface IModal
  extends withChildren,
    BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    LayoutProps {
  testID?: string;
  center?: boolean;
  hasBackdrop?: boolean;
  hasClosableButton?: boolean;
  avoidKeyboard?: boolean;
  type?: string;
}

export interface IModalLayout extends IModal {
  closeModal(): void;
}

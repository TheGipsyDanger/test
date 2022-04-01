import { withChildren } from '~/utils';

import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  BorderProps,
  FlexboxProps,
  BoxShadowProps,
  TypographyProps,
  BorderColorProps,
  BackgroundColorProps,
} from 'styled-system';

export interface IPage
  extends withChildren,
    BorderProps,
    BoxShadowProps,
    ColorProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps,
    BackgroundColorProps,
    BorderColorProps,
    LayoutProps {
  testID?: string;
}

export interface IPageLayout extends IPage {}

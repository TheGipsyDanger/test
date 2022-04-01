import { withChildren, IFont, IFontSize, IVariants } from "~/utils";

import {
  SpaceProps,
  ColorProps,
  BorderProps,
  FontSizeProps,
  FontStyleProps,
  TypographyProps,
  FontFamilyProps,
  FontWeightProps,
} from "styled-system";

export interface IText
  extends withChildren,
    BorderProps,
    ColorProps,
    FontSizeProps,
    FontFamilyProps,
    FontWeightProps,
    FontStyleProps,
    SpaceProps,
    TypographyProps {
  variant?: IVariants;
  textTransform?: string;
  textDecoration?: string;
  font?: IFont;
  size?: IFontSize;
  testID?: string;
  numberOfLines?: number;
}

export interface ITextLayout extends IText {}

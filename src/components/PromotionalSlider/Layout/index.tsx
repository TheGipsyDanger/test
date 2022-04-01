import * as React from "react";

import { Slider } from "./Slider";
import { Indicator } from "./Indicator";
import { Wrapped } from "~/components/Basics/Wrapped";

import { IPromotionalSliderLayout } from "~/components/PromotionalSlider/data";

export const PromotionalSlider = ({
  height = 285,
  ...props
}: IPromotionalSliderLayout) => (
  <Wrapped testID={"PromotionalSlider"} height={height}>
    <Slider {...props} />
    <Indicator {...props} />
  </Wrapped>
);

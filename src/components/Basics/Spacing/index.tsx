import * as React from "react";
import { Children } from "react";

import { Wrapped } from "~/components/Basics/Wrapped";

import ISpacing from "./data";

export const Spacing = ({ children, space }: ISpacing): JSX.Element => {
  const childrens = Children.toArray(children);
  return (
    <>
      {childrens.map((child, index) => {
        if (index === childrens.length - 1) {
          return <Wrapped key={index}>{child}</Wrapped>;
        } else {
          return (
            <Wrapped key={index} mb={space}>
              {child}
            </Wrapped>
          );
        }
      })}
    </>
  );
};

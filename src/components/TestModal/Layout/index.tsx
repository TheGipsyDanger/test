import * as React from "react";

import { Wrapped, Text } from "~/components/Basics";

import { ITestModalLayout } from "~/components/TestModal/data";

export const TestModal = ({ data }: ITestModalLayout) => (
  <Wrapped>
    <Text size="xlarge">{`Modal de teste`}</Text>
  </Wrapped>
);

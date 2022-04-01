import * as React from 'react';

import { Wrapped, Conditional } from '~/components/Basics';

import { IAccordionLayout } from '~/components/Accordion/data';

export const Accordion = ({
  body,
  header,
  press,
  isOpen,
  headerOpen,
}: IAccordionLayout) => (
  <Wrapped testID={`Accordion`}>
    <Wrapped onPress={press}>
      {headerOpen ? (isOpen ? headerOpen : header) : header}
    </Wrapped>
    <Conditional render={isOpen}>{body}</Conditional>
  </Wrapped>
);

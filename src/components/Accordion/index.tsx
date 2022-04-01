import * as React from 'react';
import { useState } from 'react';

import { IAccordionPressResp } from '~/utils';

import { IAccordion } from '~/components/Accordion/data';
import { Accordion as Layout } from './Layout';

export const Accordion = (props: IAccordion) => {
  const { onPress = (ctx: IAccordionPressResp) => {} } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function press() {
    const newState = !isOpen;
    setIsOpen(newState);
    onPress({ isOpen: newState, id: props.id });
  }

  const layoutProps = {
    ...props,
    isOpen,
    press,
  };

  return <Layout {...layoutProps} />;
};

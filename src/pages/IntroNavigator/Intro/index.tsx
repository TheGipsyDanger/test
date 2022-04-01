import * as React from 'react';
import { useEffect } from 'react';

import { IStringToAnyMap } from '~/utils';
import { useModal } from '~/context';

import { IIntro } from '~/pages/IntroNavigator/Intro/data';
import { Intro as Layout } from './Layout';

export const Intro = (props: IIntro) => {
  const { openModal } = useModal();

  useEffect(() => {
    setTimeout(() => {
      openModal('RequestLocationModal');
    }, 2000);
  }, []);

  function currentFlow(flow: string) {
    const flows: IStringToAnyMap = {
      location: () => openModal('RequestLocationModal'),
    };

    return flows[flow] || null;
  }

  return (
    <>
      <Layout {...props} />
    </>
  );
};

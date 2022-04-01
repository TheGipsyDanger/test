import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useRegisterCardForm, defineFields } from '~/utils';

import { ITestView } from '~/pages/TestView/data';
import { TestView as Layout } from './Layout';

export const TestView = (props: ITestView) => {
  const { t } = useTranslation();

  const registerForm = useRegisterCardForm(onSubmit);

  function onSubmit() {
    console.log('?');
  }

  const form = registerForm;

  const layoutProps = {
    ...props,
    t,
    form,
    fields: defineFields(Object.keys(form.values)),
  };

  return <Layout {...layoutProps} />;
};

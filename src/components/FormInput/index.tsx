import * as React from 'react';
import { useState } from 'react';

import { IFormInput } from '~/components/FormInput/data';
import { FormInput as Layout } from './Layout';

export const FormInput = (props: IFormInput) => {
  const { form, field } = props;

  const [hide, setHide] = useState<boolean>(false);

  function defineShowIcon() {
    return ['password', 'confirmPassword', 'newPassword'].includes(field);
  }

  function handleHide() {
    return setHide((old) => !old);
  }

  const layoutProps = {
    ...props,
    handleHide,
    defineShowIcon,
    keyboardType: hide ? 'password' : props.keyboardType,
    onBlur: () => form.setFieldTouched(field),
    onChangeText: (text: string) => {
      form.setFieldValue(field, text);
    },
  };

  return <Layout {...layoutProps} />;
};

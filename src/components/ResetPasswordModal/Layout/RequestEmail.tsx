import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Button } from '~/components/Basics/Button';
import { Conditional } from '~/components/Basics/Conditional';
import { FormInput } from '~/components/FormInput';

import { IResetPasswordModalEmail } from '~/components/ResetPasswordModal/data';

export const RequestEmail = ({
  form,
  fields,
  isIos,
}: IResetPasswordModalEmail) => (
  <Wrapped flex={1}>
    {fields.map((item, index) => (
      <FormInput key={index} {...{ ...item, form }} />
    ))}
    <Wrapped mt={4} flex={1} justifyContent="flex-end">
      <Button
        height={48}
        disabled={!form.isValid}
        onPress={form.submitForm}
        textVariant="outback:h2"
        text="Entrar"
      />
      <Conditional render={!isIos}>
        <Wrapped mb={4} />
      </Conditional>
    </Wrapped>
  </Wrapped>
);

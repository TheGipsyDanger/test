import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Conditional } from '~/components/Basics/Conditional';
import { Button } from '~/components/Basics/Button';
import { FormInput } from '~/components/FormInput';

import { IResetPasswordModalEmail } from '~/components/ResetPasswordModal/data';

export const RequestCode = ({
  form,
  fields,
  isIos,
}: IResetPasswordModalEmail) => (
  <Wrapped flex={1}>
    {fields.map((item, index) => (
      <FormInput key={index} {...{ ...item, form }} />
    ))}
    <Wrapped mt={4} flex={1} justifyContent="space-between">
      <Button
        variant="outback:support"
        height={48}
        disabled={!form.isValid}
        onPress={form.submitForm}
        textVariant="outback:h2"
        text="Reenviar código"
      />
      <Wrapped>
        <Button
          height={48}
          disabled={!form.isValid}
          onPress={form.submitForm}
          textVariant="outback:h2"
          text="Continuar"
        />
        <Conditional render={!isIos}>
          <Wrapped mb={4} />
        </Conditional>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);

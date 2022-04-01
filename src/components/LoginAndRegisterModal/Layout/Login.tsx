import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { Button } from '~/components/Basics/Button';
import { Spacing } from '~/components/Basics/Spacing';
import { FormInput } from '~/components/FormInput';
import { OtherOptions } from './OtherOptions';

import { ILoginAndRegisterModalLogin } from '~/components/LoginAndRegisterModal/data';

export const Login = ({
  t,
  form,
  fields,
  goToResetPssword,
}: ILoginAndRegisterModalLogin) => (
  <Wrapped>
    <Spacing space={0}>
      {fields.map((item, index) => (
        <FormInput key={index} {...{ ...item, form }} />
      ))}
    </Spacing>
    <Wrapped mb={4} onPress={goToResetPssword}>
      <Text variant="outback:link" color="facebook">
        {t('LOGIN.FORGOT_PASSWORD')}
      </Text>
    </Wrapped>
    <Wrapped mb={8}>
      <Button
        height={48}
        disabled={!form.isValid}
        onPress={form.submitForm}
        textVariant="outback:h2"
        text="Entrar"
      />
    </Wrapped>
    <OtherOptions />
  </Wrapped>
);

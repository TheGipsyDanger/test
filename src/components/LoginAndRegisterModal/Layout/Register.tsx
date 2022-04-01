import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { Button } from '~/components/Basics/Button';
import { Spacing } from '~/components/Basics/Spacing';
import { FormInput } from '~/components/FormInput';

import { ILoginAndRegisterModalRegister } from '~/components/LoginAndRegisterModal/data';

export const Register = ({
  t,
  form,
  fields,
}: ILoginAndRegisterModalRegister) => (
  <Wrapped>
    <Spacing space={0}>
      {fields.map((item, index) => (
        <FormInput key={index} {...{ ...item, form }} />
      ))}
    </Spacing>
    <Wrapped mb={8}>
      <Button
        height={48}
        disabled={!form.isValid}
        onPress={form.submitForm}
        textVariant="outback:h2"
        text="Enviar"
      />
    </Wrapped>
    <Text variant="outback:body" textAlign="center" mb={0}>
      {t('REGISTER.FOOTER_MAIN')}
    </Text>
    <Wrapped flexDirection="row" center>
      <Wrapped onPress={() => alert('TERMOS DE USO')}>
        <Text variant="outback:link" color="facebook">
          {t('REGISTER.TERMS_OF_USE')}
        </Text>
      </Wrapped>
      <Text>{` e `}</Text>
      <Wrapped onPress={() => alert('Politica de Privacidade')}>
        <Text variant="outback:link" color="facebook">
          {t('REGISTER.PRIVACY_POLICY')}
        </Text>
      </Wrapped>
    </Wrapped>
  </Wrapped>
);

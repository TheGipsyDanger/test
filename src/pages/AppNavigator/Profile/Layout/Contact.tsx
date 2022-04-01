import * as React from 'react';

import { Wrapped, Spacing, FormInput } from '~/components';
import { Card } from './Card';

import { IProfileContactLayout } from '~/pages/AppNavigator/Profile/data';

export const Contact = ({
  profileContactForm,
  profileContactFormFields,
}: IProfileContactLayout) => {
  return (
    <Card>
      <Spacing space={3}>
        {profileContactFormFields.map((item, index) => (
          <FormInput
            key={index}
            bg="background"
            showErros={false}
            {...{ ...item, form: profileContactForm }}
          />
        ))}
      </Spacing>
      <Wrapped height={30} />
    </Card>
  );
};

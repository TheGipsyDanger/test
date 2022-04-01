import * as React from 'react';

import { Wrapped, Spacing, FormInput } from '~/components';
import { Card } from './Card';

import { IProfilePersonLayout } from '~/pages/AppNavigator/Profile/data';

export const Person = ({
  profilePersonForm,
  profilePersonFormFields,
}: IProfilePersonLayout) => {
  return (
    <Card>
      <Spacing space={3}>
        {profilePersonFormFields.map((item, index) => (
          <FormInput
            key={index}
            bg="background"
            showErros={false}
            {...{ ...item, form: profilePersonForm }}
          />
        ))}
      </Spacing>
      <Wrapped height={30} />
    </Card>
  );
};

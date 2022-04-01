import * as React from 'react';

import { Wrapped, Accordion, Spacing, Button } from '~/components';

import { SelectPeriod } from './SelectPeriod';
import { Avatar } from './Avatar';
import { Person } from './Person';
import { Contact } from './Contact';
import { Optional } from './Optional';
import { Permissions } from './Permissions';

import { IProfileLayout } from '~/pages/AppNavigator/Profile/data';

export const Profile = ({
  press,
  openLogin,
  infosState: { person, permissions, contact, optional },
  updateInfosState,
  ...props
}: IProfileLayout) => (
  <Wrapped flex={1} mt={8} px={4}>
    <Avatar />
    <Spacing space={2}>
      <Accordion
        onPress={() => updateInfosState('person')}
        header={<SelectPeriod text={'Dados pessoais'} isOpen={person} />}
        body={<Person {...props} />}
      />
      <Accordion
        onPress={() => updateInfosState('contact')}
        header={<SelectPeriod text={'Dados de contato'} isOpen={contact} />}
        body={<Contact {...props} />}
      />
      <Accordion
        onPress={() => updateInfosState('optional')}
        header={
          <SelectPeriod text={'Informações opcionais'} isOpen={optional} />
        }
        body={<Optional />}
      />
      <Accordion
        onPress={() => updateInfosState('permissions')}
        header={
          <SelectPeriod
            text={'Declarações e permissões'}
            isOpen={permissions}
          />
        }
        body={<Permissions />}
      />
      <Wrapped height={20} />
    </Spacing>
    <Button
      height={48}
      onPress={openLogin}
      textVariant="outback:h2"
      text={'login'}
    />
  </Wrapped>
);

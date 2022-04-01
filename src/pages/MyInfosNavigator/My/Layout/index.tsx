import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, Accordion, Spacing } from '~/components';

import { Header } from './Header';
import { SelectPeriod } from './SelectPeriod';
import { Avatar } from './Avatar';
import { Person } from './Person';
import { Contact } from './Contact';
import { Optional } from './Optional';
import { Permissions } from './Permissions';
import { Footer } from './Footer';

import { IProfileLayout } from '~/pages/MyInfosNavigator/My/data';

export const Profile = ({
  infosState: { person, permissions, contact, optional },
  updateInfosState,
  ...props
}: IProfileLayout) => (
  <Wrapped flex={1}>
    <Wrapped>
      <Header {...props} />
      <Wrapped
        height={200}
        bg="background"
        variant="outback:topRadius"
        position="absolute"
        left={0}
        right={0}
        top={92}
        bottom={0}
      />
    </Wrapped>
    <FlatList
      data={[{}]}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <Wrapped pt={4} px={4}>
          <Avatar {...props} />
          <Spacing space={2}>
            <Accordion
              onPress={() => updateInfosState('person')}
              header={<SelectPeriod text={'Dados pessoais'} isOpen={person} />}
              body={<Person {...props} />}
            />
            <Accordion
              onPress={() => updateInfosState('contact')}
              header={
                <SelectPeriod text={'Dados de contato'} isOpen={contact} />
              }
              body={<Contact {...props} />}
            />
            <Accordion
              onPress={() => updateInfosState('optional')}
              header={
                <SelectPeriod
                  text={'Informações opcionais'}
                  isOpen={optional}
                />
              }
              body={<Optional {...props} />}
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
          </Spacing>
          <Wrapped height={160} />
        </Wrapped>
      )}
    />
    <Footer {...props} />
  </Wrapped>
);

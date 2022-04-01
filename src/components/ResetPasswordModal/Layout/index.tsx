import * as React from 'react';
import { ScrollView } from 'react-native';

import { Header } from './Header';
import { ResetForm } from './ResetForm';
import { RequestCode } from './RequesrCode';
import { RequestEmail } from './RequestEmail';
import { Wrapped } from '~/components/Basics/Wrapped';
import { Conditional } from '~/components/Basics/Conditional';
import { ModalContainer } from '~/components/ModalContainer';

import { IResetPasswordModalLayout } from '~/components/ResetPasswordModal/data';

export const ResetPasswordModal = ({
  step,
  showRequestModal,
  ...props
}: IResetPasswordModalLayout) => (
  <Wrapped testID={`ResetPasswordModal`}>
    <ModalContainer size={91} px={1}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <Wrapped flex={1} mx={4} mt={4}>
          <Wrapped mb={4}>
            <Header {...props} />
          </Wrapped>
          <Conditional render={step === 0}>
            <RequestEmail {...props} />
            <RequestCode {...props} />
          </Conditional>
        </Wrapped>
      </ScrollView>
    </ModalContainer>
    <Conditional render={showRequestModal}>
      <ResetForm {...props} />
    </Conditional>
  </Wrapped>
);

import * as React from 'react';
import { ScrollView } from 'react-native';

import { Login } from './Login';
import { Header } from './Header';
import { Register } from './Register';
import { InfoModal } from './InfoModal';
import { Selector } from '~/components/Selector';
import { ModalContainer } from '~/components/ModalContainer';
import { Wrapped } from '~/components/Basics/Wrapped';
import { Conditional } from '~/components/Basics/Conditional';

import { ILoginAndRegisterModalLayout } from '~/components/LoginAndRegisterModal/data';

import S from './styles';

export const LoginAndRegisterModal = ({
  data,
  isLogin,
  selectorData,
  selectorPress,
  showInfoModal,
  ...props
}: ILoginAndRegisterModalLayout) => (
  <Wrapped testID={`LoginAndRegisterModal`}>
    <ModalContainer size={91}>
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}>
        <S.Content>
          <Header {...props} />
          <Wrapped mb={4}>
            <Selector data={selectorData} action={selectorPress} />
          </Wrapped>
          <Conditional render={isLogin}>
            <Login {...props} />
            <Register {...props} />
          </Conditional>
        </S.Content>
      </ScrollView>
    </ModalContainer>
    <Conditional render={showInfoModal}>
      <InfoModal {...props} />
    </Conditional>
  </Wrapped>
);

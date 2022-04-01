import * as React from 'react';
import { LoginView } from 'vindicce-b2c-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Loading } from '~/components/Basics/Loading';

import { metrics } from '~/styles';

import { IAzureLoginAndRegisterModalLayout } from '~/components/AzureLoginAndRegisterModal/data';

export const AzureLoginAndRegisterModal = ({
  onLogin,
  onFail,
}: IAzureLoginAndRegisterModalLayout) => {
  function loading() {
    return (
      <Wrapped
        height={metrics.height}
        width={metrics.width}
        position="absolute">
        <Loading />
      </Wrapped>
    );
  }

  return (
    <Wrapped height={metrics.height} width={metrics.width}>
      <SafeAreaView style={{ flex: 1 }}>
        <LoginView
          appId="b3dc1cc4-a124-41ff-a159-cbf00ce2817a"
          tenant="mybbi"
          loginPolicy="B2C_1_BBIx_Signup_Signin_dev"
          passwordResetPolicy="B2C_1_BBIx_Signup_Signin_dev"
          profileEditPolicy="B2C_1_BBIx_ProfileEdit_dev"
          onSuccess={onLogin}
          onFail={onFail}
          secureStore={SecureStore}
          renderLoading={loading}
          scope="openid"
          redirectURI="https://jwt.ms"
        />
      </SafeAreaView>
    </Wrapped>
  );
};

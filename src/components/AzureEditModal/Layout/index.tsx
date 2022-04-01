import * as React from 'react';
import { EditView } from 'vindicce-b2c-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SecureStore from 'expo-secure-store';

import { Wrapped } from '~/components/Basics';

import { IAzureEditModalLayout } from '~/components/AzureEditModal/data';
import { Loading } from '~/components/Basics/Loading';

import { metrics } from '~/styles';

export const AzureEditModal = ({ data }: IAzureEditModalLayout) => (
  <Wrapped height={metrics.height} width={metrics.width}>
    <SafeAreaView style={{ flex: 1 }}>
      <EditView
        appId="b3dc1cc4-a124-41ff-a159-cbf00ce2817a"
        tenant="mybbi"
        loginPolicy="B2C_1_BBIx_Signup_Signin_dev"
        passwordResetPolicy="B2C_1_BBIx_Signup_Signin_dev"
        profileEditPolicy="B2C_1_BBIx_ProfileEdit"
        secureStore={SecureStore}
        onSuccess={() => alert('Sucesso')}
        onFail={() => alert('Fail')}
        renderLoading={() => (
          <Wrapped
            height={metrics.height}
            width={metrics.width}
            position="absolute">
            <Loading />
          </Wrapped>
        )}
        scope="openid"
        redirectURI="https://jwt.ms"
      />
    </SafeAreaView>
  </Wrapped>
);

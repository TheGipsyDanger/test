import * as React from 'react';
import { Platform } from 'react-native';

import { Button } from '~/components/Basics/Button';
import { Wrapped } from '~/components/Basics/Wrapped';
import { Spacing } from '~/components/Basics/Spacing';

export const OtherOptions = () => (
  <Wrapped testID={`LoginAndRegisterModal`}>
    <Spacing space={2}>
      {Platform.OS === 'ios' && (
        <Button
          firstIcon="IcApple"
          height={48}
          variant="apple"
          textVariant="outback:h2"
          text="Entrar com Apple ID"
          onPress={() => alert('LOGIN APPLE')}
        />
      )}
      <Button
        firstIcon="IcFacebook"
        height={48}
        variant="facebook"
        textVariant="outback:h2"
        text="Entrar com Facebook"
        onPress={() => alert('LOGIN FACEBOOK')}
      />
      <Button
        firstIcon="IcGoogle"
        height={48}
        color="text"
        variant="google"
        textVariant="outback:h2"
        text="Entrar com Google"
        onPress={() => alert('LOGIN GOOGLE')}
      />
    </Spacing>
  </Wrapped>
);

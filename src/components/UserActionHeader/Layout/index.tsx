import * as React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Wrapped } from '~/components/Basics';
import { IcBack } from '~/assets/svg';

import { IUserActionHeaderLayout } from '~/components/UserActionHeader/data';

export const UserActionHeader = ({ backPress }: IUserActionHeaderLayout) => (
  <ImageBackground
    source={{
      uri: 'https://www.sopacultural.com/wp-content/uploads/2021/03/29_07_Outback-Super-Wings-scaled-e1615591155706.jpg',
    }}
    style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }}>
      <Wrapped onPress={backPress}>
        <Wrapped mt={2} ml={4}>
          <Wrapped width={32} height={32}>
            <IcBack color="white" />
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </SafeAreaView>
  </ImageBackground>
);

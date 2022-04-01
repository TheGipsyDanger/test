import * as React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Wrapped, Button } from '~/components/Basics';

import { Header } from './Header';
import { Resume } from './Resume';
import { Info } from './Info';

import { IOrderResumeModalLayout } from '~/components/OrderResumeModal/data';

export const OrderResumeModal = (props: IOrderResumeModalLayout) => {
  const { t } = props;
  return (
    <Wrapped flex={1} bg="background" testID={`OrderResumeModal`}>
      <Wrapped>
        <Header {...props} />
        <Wrapped
          height={100}
          bg="background"
          variant="outback:topRadius"
          position="absolute"
          left={0}
          right={0}
          top={112}
          bottom={0}
        />
      </Wrapped>
      <SafeAreaView style={{ flex: 1 }}>
        <Wrapped mx={3}>
          <FlatList
            data={[{}]}
            extraData={[{}]}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => (
              <Wrapped>
                <Resume {...props} />
                <Info {...props} />
                <Wrapped mt={4}>
                  <Button
                    height={40}
                    onPress={() => alert('red')}
                    textVariant="outback:h2"
                    text={t('MY_ORDERS.RESUME.BTN')}
                  />
                  <Wrapped mb={4} />
                </Wrapped>
              </Wrapped>
            )}
          />
        </Wrapped>
      </SafeAreaView>
    </Wrapped>
  );
};

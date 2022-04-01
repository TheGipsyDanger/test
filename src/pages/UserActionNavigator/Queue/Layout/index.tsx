import * as React from 'react';
import { FlatList } from 'react-native';

import {
  Text,
  Toast,
  Wrapped,
  Conditional,
  ModalContainer,
  UserActionHeader,
} from '~/components';
import { Footer } from './Footer';
import { IcClose } from '~/assets/svg';

import { IQueueLayout } from '~/pages/UserActionNavigator/Queue/data';
import { metrics } from '~/styles';

export const Queue = (props: IQueueLayout) => {
  const {
    t,
    bottom,
    listRef,
    showToast,
    renderItem,
    setShowToast,
    hasKeyboard,
  } = props;

  return (
    <Wrapped flex={1} justifyContent="flex-end" testID={`Queue`}>
      <UserActionHeader {...props} />
      <ModalContainer
        noTop={false}
        size={75}
        variant="outback:topRadius"
        hasSafeArea={false}>
        <FlatList
          ref={listRef}
          data={[{}, {}, {}]}
          extraData={[{}, {}, {}]}
          horizontal={true}
          scrollEnabled={false}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ index }) => (
            <FlatList
              data={[{}]}
              extraData={[{}]}
              keyExtractor={() => '1'}
              ListHeaderComponent={() => <Wrapped mt={2} />}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={() => (
                <Wrapped width={metrics.width}>{renderItem(index)}</Wrapped>
              )}
            />
          )}
          getItemLayout={(_, index) => ({
            length: metrics.width,
            offset: metrics.width * index,
            index,
          })}
        />
        {!hasKeyboard && <Wrapped height={metrics.bottomSpotlight + bottom} />}
      </ModalContainer>
      <Footer {...props} />
      <Conditional render={showToast}>
        <Toast onPress={() => setShowToast(false)}>
          <Wrapped
            flexDirection="row"
            flex={1}
            justifyContent="space-between"
            alignItems="center">
            <Text textAlign="center" variant="outback:h8">
              {t('ACTION.OUTBACK.QUEUE.STEP_1.TOAST')}
            </Text>
            <Wrapped>
              <IcClose />
            </Wrapped>
          </Wrapped>
        </Toast>
      </Conditional>
    </Wrapped>
  );
};

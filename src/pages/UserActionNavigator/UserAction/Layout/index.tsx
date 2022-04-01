import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped, ModalContainer, Conditional, InfoModal } from '~/components';
import { Header } from './Header';
import { Footer } from './Footer';

import { metrics } from '~/styles';

import { IUserActionLayout } from '~/pages/UserActionNavigator/UserAction/data';
import { navigate } from '~/utils';

export const UserAction = (props: IUserActionLayout) => {
  const {
    onClose,
    listRef,
    clearData,
    selectType,
    renderItem,
    hasKeyboard,
    showInfoModal,
    isChangeConsumption,
  } = props;
  return (
    <Wrapped flex={1} justifyContent="flex-end" testID={`UserAction`}>
      <Header {...props} />
      <ModalContainer
        noTop={selectType === 'queue' ? false : true}
        size={selectType === 'queue' ? 75 : 83}
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
            <Wrapped width={metrics.width}>{renderItem(index)}</Wrapped>
          )}
          getItemLayout={(_, index) => ({
            length: metrics.width,
            offset: metrics.width * index,
            index,
          })}
        />
        {!hasKeyboard && (
          <Wrapped height={metrics.bottomSpotlight + props.bottom} />
        )}
      </ModalContainer>
      <Footer {...props} />
      <Conditional render={showInfoModal}>
        {isChangeConsumption ? (
          <InfoModal
            showCloseButton={false}
            onClose={onClose}
            press={() => clearData()}
          />
        ) : (
          <InfoModal
            showCloseButton={false}
            onClose={onClose}
            press={() => navigate('Menu', '')}
          />
        )}
      </Conditional>
    </Wrapped>
  );
};

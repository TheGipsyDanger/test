import * as React from 'react';
import { FlatList } from 'react-native';

import { Wrapped } from '~/components';
import { Input } from './Input';
import { Types } from './Types';
import { Address } from './Address';

import { IUserActionFirstStep } from '~/pages/UserActionNavigator/UserAction/data';
import S from './styles';

export const FirstStep = (props: IUserActionFirstStep) => {
  const { t } = props;
  return (
    <FlatList
      data={[{}]}
      extraData={[{}]}
      keyExtractor={() => '1'}
      ListHeaderComponent={() => <Wrapped mt={2} />}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      renderItem={() => (
        <Wrapped>
          <Wrapped mb={4}>
            <S.Title>{t('ACTION.OUTBACK.DELIVERY.STEP_1.MAIN')}</S.Title>
          </Wrapped>
          <S.InputArea mx={3}>
            <S.ContentTitle mb={4}>
              {t('ACTION.OUTBACK.DELIVERY.STEP_1.REQUEST_ADDRESS')}
            </S.ContentTitle>
            <Input {...props} />
          </S.InputArea>
          <S.TypeArea>
            <S.ContentTitle mx={3}>
              {t('ACTION.OUTBACK.DELIVERY.STEP_1.TYPE')}
            </S.ContentTitle>
            <Types {...props} />
          </S.TypeArea>
          <Address {...props} />
        </Wrapped>
      )}
    />
  );
};

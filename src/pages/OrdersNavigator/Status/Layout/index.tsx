import * as React from 'react';
import { FlatList, Image } from 'react-native';

import {
  Text,
  Wrapped,
  OrderHeader,
  OrderStatus,
  Conditional,
} from '~/components';

import { Map } from './Map';
import { Resume } from './Resume';
import { Info } from './Info';
import { Bottom } from './Bottom';

import { modalBottom3 } from '~/assets/images';

import { IStatusLayout } from '~/pages/OrdersNavigator/Status/data';
import S from './styles';

export const Status = ({ data, ...props }: IStatusLayout) => {
  const { where } = props;
  return (
    <Wrapped flex={1} testID={`Status`} bg="background">
      <OrderHeader
        label={`Previsão de ${where === 'delivery' ? 'entrega' : 'retirada'}`}
        type="resume"
      />
      <FlatList
        data={[{}]}
        extraData={[{}]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => (
          <Wrapped flex={1}>
            <Wrapped
              mt={4}
              mx={3}
              {...(where === 'withdrawal' ? {} : { mb: 12 })}>
              <Text mb={2} variant="outback:h4">{`Acompanhe seu pedido`}</Text>
              <OrderStatus />
            </Wrapped>
            <Wrapped flex={1} mt={4}>
              <Conditional render={where === 'withdrawal'}>
                <S.Card>
                  <Map />
                </S.Card>
              </Conditional>
              <Wrapped
                flex={1}
                zIndex={10}
                bg="modals"
                variant="outback:topRadius"
                boxShadow="bottomSpotlight">
                <Wrapped>
                  <Wrapped mx={3}>
                    <Text my={4} variant="outback:title">
                      {'Detalhes do pedido'}
                    </Text>
                    <Resume {...props} />
                    <Info {...props} />
                    <Bottom {...props} />
                  </Wrapped>
                </Wrapped>
              </Wrapped>
              <Conditional render={where === 'delivery'}>
                <Wrapped
                  position="absolute"
                  top={-90}
                  left={0}
                  right={0}
                  height={200}>
                  <Image
                    source={modalBottom3}
                    style={{ width: '100%', height: 113 }}
                  />
                </Wrapped>
              </Conditional>
            </Wrapped>
          </Wrapped>
        )}
      />
    </Wrapped>
  );
};

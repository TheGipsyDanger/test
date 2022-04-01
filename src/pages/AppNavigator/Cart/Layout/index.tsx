import * as React from 'react';
import { ScrollView } from 'react-native';

import {
  List,
  Wrapped,
  Conditional,
  CartResumeModal,
  Text,
  Input,
} from '~/components';
import { Header } from './Header';
import { AddProduct } from './AddProduct';
import { EmptyList } from './EmptyList';

import { ICartLayout } from '~/pages/AppNavigator/Cart/data';
import { ToastModal } from '~/components/ToastModal';

export const Cart = (props: ICartLayout) => {
  const { itens, obs, updateObs, isOpened, setIsOpened } = props;
  return (
    <Wrapped flex={1}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Wrapped>
          <Conditional render={itens.length > 0}>
            <Wrapped mb={4}>
              <Wrapped mb={1}>
                <List data={itens} title="" variant="cart" direction="y" />
              </Wrapped>
            </Wrapped>
            <EmptyList {...props} />
          </Conditional>
          <Wrapped mx={4} mb={1}>
            <Wrapped mb={4}>
              <Text mb={2}>{`Observações:`}</Text>
              <Input
                size="h6"
                font="regular"
                borderRadius="card"
                bg="white"
                onChange={updateObs}
                p={2}
                pb={0}
                editable={true}
                height={75}
                multiline={true}
                numberOfLines={4}
                maxLength={140}
                value={obs}
                placeholder="Ex: tocar interfone"
                textAlignVertical="top"
              />
            </Wrapped>
          </Wrapped>
          <AddProduct {...props} />
          <List
            onPress={() => alert('add')}
            data={[{}, {}, {}, {}, {}]}
            title="Leve também:"
            variant="combine"
          />
        </Wrapped>
      </ScrollView>
      <CartResumeModal />
      {isOpened && <ToastModal onOpenModal={() => setIsOpened(!isOpened)} />}
      <Wrapped height={154} />
    </Wrapped>
  );
};

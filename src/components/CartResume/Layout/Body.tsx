import * as React from 'react';

import { Wrapped, Text, Input, Button, Conditional } from '~/components/Basics';

import { ICartResumeLayoutBody } from '~/components/CartResume/data';

export const Body = ({
  t,
  data,
  total,
  obs,
  where = 'cart',
}: ICartResumeLayoutBody) => (
  <Wrapped mt={2} mx={2} testID={`CartResume`}>
    {data.map((item, index) => (
      <Wrapped key={index}>
        <Wrapped mb={1} flexDirection="row">
          <Wrapped center>
            <Text variant="outback:h8" mr={1}>{`${item.amount}x`}</Text>
          </Wrapped>
          <Wrapped flex={1} flexDirection="row" justifyContent="space-between">
            <Wrapped flex={1} justifyContent="center">
              <Text
                variant="outback:h8"
                numberOfLines={1}>{`${item.name}`}</Text>
            </Wrapped>
            <Wrapped center>
              <Text variant="outback:h5">{`${item.price}`}</Text>
            </Wrapped>
          </Wrapped>
        </Wrapped>
        <Wrapped mb={0}>
          {item.extras.map((extra, extraIndex) => (
            <Wrapped key={extraIndex} ml={1}>
              <Wrapped
                ml={4}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between">
                <Text variant="outback:body">{`${extra.amount}x ${extra.name}`}</Text>
                <Text variant="outback:h5">{`${extra.price}`}</Text>
              </Wrapped>
            </Wrapped>
          ))}
        </Wrapped>
        <Conditional render={item.observation !== ''}>
          <Wrapped ml={4} mb={2} p={1} bg="background" borderRadius="card">
            <Text variant="outback:h6">{item.observation}</Text>
          </Wrapped>
        </Conditional>
      </Wrapped>
    ))}
    <Wrapped mt={4} mb={1}>
      <Wrapped mb={4}>
        <Conditional render={obs !== ''}>
          <Wrapped>
            <Text mb={2}>{`Observações:`}</Text>
            <Input
              size="h6"
              font="regular"
              borderRadius="card"
              bg="background"
              p={2}
              pb={0}
              editable={false}
              height={75}
              multiline={true}
              numberOfLines={4}
              maxLength={140}
              value={obs}
              textAlignVertical="top"
            />
          </Wrapped>
        </Conditional>
      </Wrapped>
    </Wrapped>
    <Wrapped mb={4}>
      <Wrapped mb={4}>
        <Wrapped>
          <Wrapped flexDirection="row" justifyContent="space-between">
            <Text variant="outback:h8">{t('CART.RESUME.DELIVERY')}</Text>
            <Text variant="outback:h5">{t('CART.RESUME.DELIVERY_VALUE')}</Text>
          </Wrapped>
        </Wrapped>
        <Wrapped mt={2} mb={3} height={1} bg="inactive" />
        <Wrapped>
          <Wrapped flexDirection="row" justifyContent="space-between">
            <Text variant="outback:h7">{t('CART.RESUME.TOTAL')}</Text>
            <Text variant="outback:h7">{total}</Text>
          </Wrapped>
        </Wrapped>
      </Wrapped>
    </Wrapped>
    <Wrapped mt={3}>
      <Conditional render={total === 'R$ 11,99' && where !== 'payment'}>
        <Button
          variant="outback:disabled"
          height={55}
          onPress={() => {}}
          textVariant="outback:h2"
          text={
            where === 'cart' ? t('CART.RESUME.BTN') : t('CART.RESUME.BTN_2')
          }
        />
        <Button
          height={55}
          onPress={() => alert('Ir para seleção de pagamento')}
          color="modals"
          textVariant="outback:h2"
          text={
            where === 'cart' ? t('CART.RESUME.BTN') : t('CART.RESUME.BTN_2')
          }
        />
      </Conditional>
    </Wrapped>
  </Wrapped>
);

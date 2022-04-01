import * as React from 'react';
import { Dimensions } from 'react-native';
import { IcClose } from '~/assets/svg';

import { Wrapped, Button, Text, Conditional } from '~/components/Basics';
import { BottomSpotlight } from '~/components/BottomSpotlight';

import {
  IUserActionFooter,
  defineButtonLabel,
} from '~/pages/UserActionNavigator/UserAction/data';

export const Footer = ({
  press,
  step,
  selectType,
  disabled,
  onPressError,
  completedInfo,
}: IUserActionFooter) => {
  return (
    <BottomSpotlight>
      <Wrapped flex={1} mx={4} mt={2} position="relative">
        <Conditional render={completedInfo}>
          <Wrapped
            position="absolute"
            bg="active"
            width={Dimensions.get('window').width - 50}
            top={'-40px'}
            height={35}
            borderRadius="card"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            px={2}>
            <Text textAlign="center" variant="outback:h8">
              {' '}
              Para prosseguir selecione um restaurante
            </Text>
            <Wrapped height={35} width={35} onPress={onPressError} center>
              <IcClose />
            </Wrapped>
          </Wrapped>
        </Conditional>
        <Conditional render={disabled}>
          <Wrapped mx={2}>
            <Button
              disabled={true}
              height={54}
              onPress={onPressError}
              textVariant="outback:h2"
              text={defineButtonLabel(selectType, step)}
            />
          </Wrapped>
          <Wrapped mx={2}>
            <Button
              height={54}
              onPress={press}
              textVariant="outback:h2"
              text={defineButtonLabel(selectType, step)}
            />
          </Wrapped>
        </Conditional>
      </Wrapped>
    </BottomSpotlight>
  );
};

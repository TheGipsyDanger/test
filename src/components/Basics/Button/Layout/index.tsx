import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';

import { IButtonLayout } from '~/components/Basics/Button/data';

import * as Icons from '~/assets/svg';

const Icon = ({ name }: { name: string }) => {
  // @ts-ignore
  const Icon = Icons[name];
  return <Icon />;
};

import S from './styles';

export const Button = ({
  height = 48,
  color,
  textVariant = 'outback:body',
  variant = 'outback:primary',
  disabled = false,
  firstIcon,
  secondIcon,
  text,
  onPress,
  borderColorProps,
}: IButtonLayout) => {
  return (
    <Wrapped opacity={disabled ? 0.4 : 1} onPress={onPress}>
      <S.Wrapped
        testID={`Button`}
        {...{
          variant,
          height,
        }}>
        <Wrapped
          flex={1}
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          border={`1px solid ${
            borderColorProps ? borderColorProps : 'transparent'
          }`}
          borderRadius="fullImageList">
          {firstIcon && <Icon name={firstIcon} />}
          <Text mx={1} color={color ? color : 'modals'} variant={textVariant}>
            {text}
          </Text>
          {secondIcon && <Icon name={secondIcon} />}
        </Wrapped>
      </S.Wrapped>
    </Wrapped>
  );
};

import * as React from 'react';
import { Image } from 'react-native';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { Spacing } from '~/components/Basics/Spacing';
import { Button } from '~/components/Basics/Button';
import { Conditional } from '~/components/Basics/Conditional';
import { Input } from '~/components/Basics/Input';

import { equivalent } from '~/utils';

import { IcClose } from '~/assets/svg';
import { IcModalSuccess, IcModalError } from '~/assets/svg';
import { modalBottom } from '~/assets/images';

import { IInfoModalLayout } from '~/components/InfoModal/data';

// TODO: REMOVER QUANDO ENTRAR O BACK
const teste = true;

export const InfoModal = ({
  t,
  press,
  pressSecond,
  infos,
  onClose,
  showCloseButton = true,
  modalSizes: { height },
  imageDontExist,
  secondButtonExist,
  textPropsSecondButton,
  subTitle,
  subTitleText,
  iconDontExist,
  inputExist,
}: IInfoModalLayout) => {
  return (
    <Wrapped px={4}>
      <Wrapped
        height={equivalent(height, 52)}
        bg="modals"
        borderRadius="card"
        justifyContent="center">
        <Wrapped
          position="absolute"
          top={10}
          right={10}
          width={30}
          height={30}
          mb={4}>
          <Conditional render={!showCloseButton && !infos.status}>
            <Wrapped flex={1} center onPress={() => onClose(!!infos.status)}>
              <IcClose width={12} height={12} />
            </Wrapped>
          </Conditional>
        </Wrapped>
        <Spacing space={4}>
          {!iconDontExist ? (
            <Wrapped center px={4}>
              {infos.status ? <IcModalSuccess /> : <IcModalError />}
            </Wrapped>
          ) : (
            <></>
          )}

          <Wrapped center px={4}>
            <Text textAlign="center" variant="outback:h7">
              {t(infos.text)}
            </Text>
          </Wrapped>
          {subTitle ? (
            <Wrapped center px={4}>
              <Text textAlign="center" variant="outback:body">
                {t(subTitleText ? subTitleText : '')}
              </Text>
            </Wrapped>
          ) : (
            <></>
          )}
          {inputExist ? (
            <Wrapped p={4}>
              <Text variant="outback:tabBar">
                Como gostaria de chamar este cartão?
              </Text>
              <Input borderRadius="fullImageList" p={1} bg="background" />
            </Wrapped>
          ) : (
            <></>
          )}

          <Wrapped px={4} mb={4}>
            <Button
              height={40}
              onPress={press}
              textVariant="outback:h2"
              text={t(infos.buttonText)}
            />
            {secondButtonExist ? (
              <Wrapped mb={4} mt={1}>
                <Button
                  height={40}
                  color="text"
                  backgroundColor="background"
                  borderColorProps="#A00F2D"
                  onPress={pressSecond}
                  textVariant="outback:h2"
                  text={t(textPropsSecondButton)}
                />
              </Wrapped>
            ) : (
              <></>
            )}
          </Wrapped>
        </Spacing>
        {!imageDontExist ? (
          <Wrapped position="absolute" bottom={0} left={0} right={0}>
            <Image source={modalBottom} style={{ width: '100%' }} />
          </Wrapped>
        ) : (
          <></>
        )}
      </Wrapped>
    </Wrapped>
  );
};

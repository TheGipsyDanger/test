import * as React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Icon, Modal, Spacing, Text, Button } from '~/components/Basics';
import { InfoModal } from '~/components/InfoModal';
import { FormInput } from '~/components/FormInput';
import { Wrapped } from '~/components/Basics/Wrapped';

import { goBack } from '~/utils';

import { card } from '~/assets/images/';
import { IAddCardLayout } from '../data';

export const AddCard = ({
  form,
  fields,
  showInfoModal,
  isCloseModal,
  isOpenCardModal,
  isCloseAllModal,
  t,
}: IAddCardLayout) => {
  return (
    <Modal
      bg="transparent"
      hasClosableButton={false}
      avoidKeyboard={true}
      flex={1}
      type={'full'}>
      <Wrapped flex={1} width="100%" bg="primary" zIndex={1000}>
        <Wrapped
          bg="primary"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="row">
          <Wrapped
            height={90}
            flexDirection="row"
            padding={5}
            alignItems="center"
            mt={3}>
            <Icon
              name="chevron-left"
              lib="FontAwesome5"
              color="white"
              size={20}
              onPress={() => goBack()}
            />
            <Text ml={9} variant="outback:h7" color="moldals">
              {t('PAYMENT.CARDS.NEW_CARD')}
            </Text>
          </Wrapped>
        </Wrapped>
        <Wrapped
          flex={1}
          justifyContent="center"
          bg="background"
          padding={4}
          borderTopLeftRadius="fullImageList"
          borderTopRightRadius="fullImageList">
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Wrapped alignItems="center" justifyContent="center" mb={6}>
              <Image source={card} />
              <Wrapped width="70%">
                <Text variant="outback:h5" textAlign="center">
                  {t('PAYMENT.CARDS.ALERT_CARD')}
                </Text>
              </Wrapped>
            </Wrapped>
            <Spacing space={0}>
              {fields.map((item, index) => (
                <FormInput key={index} {...{ ...item, form }} bg="#fff" />
              ))}
            </Spacing>
            <Button
              height={40}
              onPress={form.submitForm}
              textVariant="outback:h2"
              text={t('PAYMENT.CARDS.SAVE_CARD')}
            />
          </ScrollView>
        </Wrapped>
        {showInfoModal ? (
          <InfoModal
            showCloseButton={false}
            onClose={() => isCloseModal()}
            press={() => isCloseAllModal()}
          />
        ) : (
          <></>
        )}
      </Wrapped>
    </Modal>
  );
};

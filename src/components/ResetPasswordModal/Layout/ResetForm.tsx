import * as React from 'react';
import { ScrollView } from 'react-native';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';
import { Modal } from '~/components/Basics/Modal';
import { Spacing } from '~/components/Basics/Spacing';
import { Button } from '~/components/Basics/Button';
import { ModalContainer } from '~/components/ModalContainer';
import { FormInput } from '~/components/FormInput';
import { IcClose } from '~/assets/svg';

import { IcModalSuccess } from '~/assets/svg';

import { IResetPasswordModalResetForm } from '~/components/ResetPasswordModal/data';

// TODO: REMOVER QUANDO ENTRAR O BACK
const teste = false;

export const ResetForm = (props: IResetPasswordModalResetForm) => {
  const { t, closeModal, fields, form } = props;
  return (
    <Modal
      bg="transparent"
      hasClosableButton={false}
      avoidKeyboard={false}
      type={'full'}>
      <ModalContainer
        isCenter={true}
        px={4}
        size={68}
        variant="outback:fullRadius">
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          showsVerticalScrollIndicator={false}>
          <Spacing space={4}>
            <Wrapped center mt={4} px={4}>
              <IcModalSuccess />
            </Wrapped>
            <Wrapped center px={4}>
              <Text textAlign="center" variant="outback:h7">
                {t('RESET_PASSWORD.STEP_3.SUCCESS')}
              </Text>
            </Wrapped>
            <Wrapped px={4} mb={4}>
              <Text mb={4} variant="outback:title">
                {t('RESET_PASSWORD.STEP_3.MAIN')}
              </Text>
              {fields.map((item, index) => (
                <FormInput key={index} {...{ ...item, form }} />
              ))}
              <Wrapped mt={4}>
                <Button
                  height={48}
                  disabled={!form.isValid}
                  onPress={form.submitForm}
                  textVariant="outback:h2"
                  text={'Alterar senha'}
                />
              </Wrapped>
            </Wrapped>
          </Spacing>
          <Wrapped
            position="absolute"
            height={30}
            width={30}
            top={25}
            right={25}>
            <Wrapped onPress={closeModal} flex={1} center>
              <IcClose width={12} height={12} />
            </Wrapped>
          </Wrapped>
        </ScrollView>
      </ModalContainer>
    </Modal>
  );
};

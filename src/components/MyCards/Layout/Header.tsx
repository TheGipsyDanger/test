import * as React from 'react';

import { Wrapped, Text } from '~/components/Basics';
import { InfoModal } from '~/components/InfoModal';

import { IcTrash, IcEdit } from '~/assets/svg';

import { IMyCardsLayoutHeader } from '~/components/MyCards/data';

export const Header = ({
  t,
  edit,
  remove,
  showInfoModal,
  isCloseModal,
  showSurnameModal,
  isCloseModalSurname,
  saveSurname,
  isCloseDeleteCard,
  showDeleteCard,
  isOpenAlertDeleteCard,
  showAlertDeleteCard,
  isCloseAlertDeleteCard,
  isSucessCardModal,
  showSucessModal,
  closeSucessCardModal,
}: IMyCardsLayoutHeader) => (
  <Wrapped mx={3} mt={3} flexDirection="row" justifyContent="space-between">
    <Text variant="outback:h3">{t('PAYMENT.CARDS.TITLE')}</Text>
    <Wrapped flexDirection="row">
      <Wrapped onPress={edit} mr={3} justifyContent="flex-end">
        <Wrapped center>
          <IcEdit />
          <Text mt={0} variant="outback:body">
            {t('PAYMENT.CARDS.EDIT')}
          </Text>
        </Wrapped>
      </Wrapped>
      <Wrapped onPress={remove} justifyContent="flex-end">
        <Wrapped center>
          <IcTrash border={1} />
          <Text mt={0} variant="outback:body">
            {t('PAYMENT.CARDS.REMOVE')}
          </Text>
        </Wrapped>
      </Wrapped>
    </Wrapped>
    {showInfoModal ? (
      <InfoModal
        showCloseButton={false}
        imageDontExist={true}
        iconDontExist={true}
        inputExist={true}
        subTitleText={t('PAYMENT.CARDS.ALERT_CHANGE_SURNAME')}
        subTitle={true}
        onClose={() => isCloseModal()}
        press={() => saveSurname()}
      />
    ) : (
      <></>
    )}
    {showSurnameModal ? (
      <InfoModal
        showCloseButton={false}
        onClose={() => isCloseModalSurname()}
        press={() => isCloseModalSurname()}
      />
    ) : (
      <></>
    )}
    {showDeleteCard ? (
      <InfoModal
        showCloseButton={false}
        subTitleText={t('PAYMENT.CARDS.CONFIRM_REMOVE_CARD')}
        subTitle={true}
        secondButtonExist={true}
        textPropsSecondButton="Cancelar exclusão"
        onClose={() => isCloseModal()}
        press={() => isOpenAlertDeleteCard()}
        pressSecond={() => isCloseDeleteCard()}
      />
    ) : (
      <></>
    )}
    {showAlertDeleteCard ? (
      <InfoModal
        showCloseButton={false}
        subTitleText={t('PAYMENT.CARDS.CONFIRM_REMOVE_CARD')}
        subTitle={true}
        secondButtonExist={true}
        textPropsSecondButton="Fechar"
        onClose={() => isCloseModal()}
        press={() => isSucessCardModal()}
        pressSecond={() => isCloseAlertDeleteCard()}
      />
    ) : (
      <></>
    )}
    {showSucessModal ? (
      <InfoModal
        showCloseButton={false}
        onClose={() => closeSucessCardModal()}
        press={() => closeSucessCardModal()}
      />
    ) : (
      <></>
    )}
  </Wrapped>
);

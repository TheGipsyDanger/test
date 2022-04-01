import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RecyclerViewBackedScrollViewBase } from 'react-native';

import { IMyCards } from '~/components/MyCards/data';
import { useUserAction } from '~/context';
import { useCard } from '~/context/Card';
import {
  convertAES,
  defineFields,
  convertSHA256,
  prepareCardObj,
  useRegisterCardForm,
} from '~/utils';
import { MyCards as Layout } from './Layout';

export const MyCards = (props: IMyCards) => {
  const { t } = useTranslation();
  const [openAddCardModal, setOpenAddCardModal] = useState<boolean>(false);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const [showSucessModal, setShowSucessModal] = useState<boolean>(false);
  const [showDeleteCard, setShowDeleteCard] = useState<boolean>(false);
  const [showAlertDeleteCard, setShowAlertDeleteCard] =
    React.useState<boolean>(false);
  const [showSurnameModal, setShowSurnameModal] =
    React.useState<boolean>(false);
  const { cardPrincipal } = useCard();
  const { setUserActionInfosContext } = useUserAction();

  function isOpenModal() {
    setShowInfoModal(true);
    setUserActionInfosContext({
      text: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.CHANGE_RESTAURANT',
      buttonText: 'ACTION.OUTBACK.DELIVERY.INFOS_MODAL.BTN_CHANGE',
      status: false,
    });
  }

  function isOpenCardModal() {
    setShowInfoModal(true);
    setUserActionInfosContext({
      text: 'Cartão adicionado \n com sucesso!',
      buttonText: 'Fechar',
      status: true,
    });
  }

  function isCloseModal() {
    setShowInfoModal(false);
  }

  function isCloseAllModal() {
    setOpenAddCardModal(false);
    setShowInfoModal(false);
  }

  function edit() {
    setShowInfoModal(true);
    setUserActionInfosContext({
      text: 'Editar apelido',
      buttonText: 'Salvar novo apelido',
      status: false,
    });
  }

  function saveSurname() {
    setShowInfoModal(false);
    setShowSurnameModal(true);
    setUserActionInfosContext({
      text: 'Apelido alterado \n com sucesso!',
      buttonText: 'Fechar',
      status: true,
    });
  }

  function isCloseModalSurname() {
    setShowSurnameModal(false);
  }

  function remove() {
    setShowDeleteCard(true);
    setUserActionInfosContext({
      text: 'Excluir cartão',
      buttonText: 'Sim, quero excluir',
      status: false,
    });
  }

  function isCloseDeleteCard() {
    setShowDeleteCard(false);
  }

  function isOpenAlertDeleteCard() {
    setShowAlertDeleteCard(true);
    setShowDeleteCard(false);
    setUserActionInfosContext({
      text: 'Não conseguimos excluir este cartão agora.',
      buttonText: 'Tentar novamente',
      status: false,
    });
  }

  function isCloseAlertDeleteCard() {
    setShowAlertDeleteCard(false);
  }

  function isSucessCardModal() {
    setShowSucessModal(true);
    setShowAlertDeleteCard(false);
    setUserActionInfosContext({
      text: 'Cartão excluído!',
      buttonText: 'Fechar',
      status: true,
    });
  }

  function closeSucessCardModal() {
    setShowSucessModal(false);
  }

  const registerForm = useRegisterCardForm(onSubmit);

  function onSubmit(values: any) {
    const obj = prepareCardObj(values);
    algo(obj);
  }

  async function algo(obj: any) {
    const hash = await convertSHA256(obj);
    console.log();

    const teste = convertAES(hash as string);
    console.log({ teste });
  }

  const form = registerForm;

  const layoutProps = {
    ...props,
    t,
    edit,
    remove,
    fields: defineFields(Object.keys(form.values)),
    form,
    setOpenAddCardModal,
    openAddCardModal,
    cardPrincipal,
    isOpenModal,
    showInfoModal,
    isCloseModal,
    setShowSurnameModal,
    showSurnameModal,
    saveSurname,
    isSucessCardModal,
    isCloseModalSurname,
    isOpenCardModal,
    showDeleteCard,
    isCloseDeleteCard,
    isOpenAlertDeleteCard,
    showAlertDeleteCard,
    isCloseAlertDeleteCard,
    showSucessModal,
    closeSucessCardModal,
    isCloseAllModal,
  };

  return <Layout {...layoutProps} />;
};

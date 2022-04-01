import * as React from 'react';

import { Wrapped, Button, Conditional } from '~/components/Basics';
import { Header } from './Header';
import { DontHaveCards } from './DontHaveCards';
import { Cards } from './Cards';

import { IMyCardsLayout } from '~/components/MyCards/data';
import { AddCard } from './AddCard';

export const MyCards = (props: IMyCardsLayout) => {
  const {
    t,
    setOpenAddCardModal,
    openAddCardModal,
    fields,
    form,
    showInfoModal,
    isOpenModal,
    isCloseModal,
    isOpenCardModal,
    isCloseAllModal,
  } = props;
  return (
    <>
      {openAddCardModal ? (
        <AddCard
          t={t}
          form={form}
          fields={fields}
          showInfoModal={showInfoModal}
          isOpenModal={isOpenModal}
          isCloseModal={isCloseModal}
          isOpenCardModal={isOpenCardModal}
          isCloseAllModal={isCloseAllModal}
        />
      ) : (
        <Wrapped
          bg="modals"
          variant="outback:fullRadius"
          height={318}
          testID={`MyCards`}>
          <Header {...props} />
          <Conditional render={true}>
            <Cards {...props} />
            <DontHaveCards {...props} />
          </Conditional>
          <Wrapped width={230} alignSelf="center">
            <Button
              variant="outback:clean"
              height={40}
              onPress={() => setOpenAddCardModal(true)}
              textVariant="outback:h3"
              color="primary"
              borderColorProps="#221e1e"
              text={t('PAYMENT.CARDS.BTN')}
              backgroundColor="background"
            />
          </Wrapped>
        </Wrapped>
      )}
    </>
  );
};

import { IField, IRegisterCardForm } from "~/utils";

export interface IMyCards {
  data?: any;
}

export interface IMyCardsLayout extends IMyCards {
  t: any;
  edit(): void;
  remove(): void;
  fields: IField[];
  form: IRegisterCardForm;
  openAddCardModal: boolean;
  setOpenAddCardModal: any;
  cardPrincipal: string;
  showInfoModal: boolean;
  isOpenModal(): void;
  isCloseModal(): void;
  showSurnameModal: boolean,
  saveSurname(): void;
  isCloseModalSurname(): void;
  isOpenCardModal(): void;
  showDeleteCard: boolean,
  isCloseDeleteCard(): void
  isOpenAlertDeleteCard(): void;
  showAlertDeleteCard: boolean;
  isCloseAlertDeleteCard(): void;
  isSucessCardModal(): void;
  showSucessModal: boolean;
  closeSucessCardModal(): void;
  isCloseAllModal(): void;
}

export interface IMyCardsLayoutHeader
  extends Pick<IMyCardsLayout, 't' | 'closeSucessCardModal' | 'remove' | 'edit' | 'showInfoModal' | 'isCloseModal' | 'showSurnameModal' | 'saveSurname' | 'isCloseModalSurname' | 'showDeleteCard' | 'isCloseDeleteCard' | 'isOpenAlertDeleteCard' | 'showAlertDeleteCard' | 'isCloseAlertDeleteCard' | 'isSucessCardModal' | 'showSucessModal'> { }
export interface IMyCardsLayoutCards extends Pick<IMyCardsLayout, 't' | 'cardPrincipal'> { }
export interface IMyCardsLayoutDontHaveCards
  extends Pick<IMyCardsLayout, 't'> { }

export interface IAddCardLayout
  extends Pick<IMyCardsLayout, 't' | 'form' | 'fields' | 'showInfoModal' | 'isOpenModal' | 'isCloseModal' | 'isOpenCardModal' | 'isCloseAllModal'> { }

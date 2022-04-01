import {
  IType,
  IAddressType,
  ISelectPeriodTypeOptions,
  IStringMap,
  IUser,
} from '~/utils';
export interface IUserAction {
  data?: any;
}

export interface IActionContext {
  type: 'delivery' | 'withdrawal' | 'reserve' | 'queue' | null;
  step: number;
}

export interface IUserActionLayout extends IUserAction {
  t: any;
  id: string;
  setId(id: string): void;
  listRef: any;
  press(): void;
  bottom: number;
  top: number;
  types: IType[];
  address: string;
  selectType: string;
  openMap(): void;
  isChangeConsumption: boolean;
  changeInfos(): void;
  changeAddress(): void;
  onClose(status: boolean): void;
  clearData(where?: boolean): void;
  showInfoModal: boolean;
  addressData: IAddressType[];
  backPress(): void;
  ambient: string;
  changeLocation(): void;
  hasKeyboard: boolean;
  personCount: string;
  step: number;
  user: IUser;
  date: any;
  obs: string;
  setObs(value: string): void;
  toggle: boolean;
  disabled: boolean;
  completedInfo: boolean;
  selectedHour: string;
  onPressError(): void;
  setToggle(value: boolean): void;
  setAddress(text: string): void;
  pressType(index: number): void;
  accordionPress(ctx: any): void;
  pressAddress(index: number): void;
  renderItem(index: number): JSX.Element;
  selectPeriod: ISelectPeriodTypeOptions;
}

export interface IUserActionLayoutInput
  extends Pick<IUserActionLayout, 'address' | 'setAddress'> {}
export interface IUserActionLayoutType
  extends Pick<IUserActionLayout, 'pressType' | 'types'> {}

export interface IUserActionFirstStep
  extends Pick<
    IUserActionLayout,
    | 't'
    | 'pressType'
    | 'types'
    | 'addressData'
    | 'pressAddress'
    | 'bottom'
    | 'setAddress'
    | 'address'
  > {}
export interface IUserActionSecondStep
  extends Pick<
    IUserActionLayout,
    | 't'
    | 'id'
    | 'date'
    | 'ambient'
    | 'selectedHour'
    | 'personCount'
    | 'setId'
    | 'changeInfos'
    | 'selectPeriod'
    | 'accordionPress'
    | 'selectType'
    | 'pressAddress'
    | 'addressData'
    | 'setAddress'
    | 'address'
    | 'toggle'
    | 'setToggle'
    | 'user'
    | 'obs'
    | 'setObs'
    | 'bottom'
  > {}
export interface IUserActionThirdStep extends IUserActionLayout {}

export interface IUserActionSecondStepDelivery
  extends Pick<
    IUserActionLayout,
    't' | 'changeInfos' | 'changeAddress' | 'changeLocation'
  > {}
export interface IUserActionSecondStepQueue
  extends Pick<
    IUserActionLayout,
    | 't'
    | 'setAddress'
    | 'address'
    | 'id'
    | 'setId'
    | 'pressAddress'
    | 'addressData'
    | 'toggle'
    | 'setToggle'
    | 'user'
    | 'bottom'
    | 'date'
  > {}
export interface IUserActionSecondStepWithdrawal
  extends Pick<
    IUserActionLayout,
    | 't'
    | 'selectPeriod'
    | 'accordionPress'
    | 'date'
    | 'selectedHour'
    | 'obs'
    | 'setObs'
    | 'changeInfos'
  > {}
export interface IUserActionThirdStepReceived
  extends Pick<
    IUserActionLayout,
    't' | 'personCount' | 'ambient' | 'obs' | 'selectedHour' | 'changeInfos'
  > {}

export interface IUserActionFooter
  extends Pick<
    IUserActionLayout,
    | 't'
    | 'press'
    | 'selectType'
    | 'step'
    | 'disabled'
    | 'completedInfo'
    | 'onPressError'
  > {}
export interface IUserActionHeader
  extends Pick<IUserActionLayout, 'backPress' | 'top' | 'openMap'> {}

export interface IUserActionSelectPeiod {
  isOpen: boolean;
  text: string;
}

export const selectePeriodData: ISelectPeriodTypeOptions = {
  date: { isOpen: false },
  hour: { isOpen: false },
};

export interface IUserActionLayoutAddress
  extends Pick<
    IUserActionLayout,
    't' | 'pressAddress' | 'addressData' | 'bottom'
  > {}

export const defineButtonLabel = (type: string, step: number) => {
  const options: IStringMap = {
    reserve: 'Reservar',
    delivery: 'Entregar',
    withdrawal: 'Retirar',
    confirm: 'Confirmar',
  };

  if (step === 0) {
    return options['confirm'];
  } else {
    const keyOption = type === 'reserve' ? 'reserve' : 'confirm';
    return options[keyOption];
  }
};

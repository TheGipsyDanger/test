export interface IUserActionFactory {
  getContext(): IUserActionContext;
  changeStep(): IUserActionContext;
  updateContextStep(index: number): void;
  selectType(data: IType[], index: number): IUserActionSelectTypeResp;
  selectAddress(data: IAddressType[], index: number): IUserActionSelectTypeResp;
  cleanContext(
    types: IType[],
    address: IAddressType[]
  ): IUserActionCleanTypeResp;
}

export interface IUserActionSelectTypeResp {
  data: IType[] | IAddressType[];
  context: IUserActionContext;
}

export interface IUserActionCleanTypeResp {
  types: IType[];
  address: IAddressType[];
  context: IUserActionContext;
}

export interface IUserActionContext {
  type: 'delivery' | 'withdrawal' | 'reserve' | 'queue' | null;
  step: number;
  showInformationModal: boolean;
}

export interface IAddressType {
  name: string;
  address: string;
  distance: string;
  isSelected: boolean;
}

export interface IType {
  isSelected: boolean;
  type: 'delivery' | 'withdrawal' | 'reserve' | 'queue';
}

export interface ISelectPeriodTypeOptions {
  date: ISelectPeriodType;
  hour: ISelectPeriodType;
}

export interface ISelectPeriodType {
  isOpen: boolean;
}

export const types: IType[] = [
  {
    isSelected: false,
    type: 'delivery',
  },
  {
    isSelected: false,
    type: 'withdrawal',
  },
  {
    isSelected: false,
    type: 'reserve',
  },
];

export const addressTypes: IAddressType[] = [
  {
    name: 'Outback Iguatemi',
    address:
      'Av. Loureiro da Silva, 1670 - 302\nBelém Novo, Curitiba - 90090-008',
    distance: '500m',
    isSelected: false,
  },
  {
    name: 'Outback Madureira',
    address:
      'Av. Loureiro da Silva, 1670 - 302\nBelém Novo, Curitiba - 90090-008',
    distance: '1200m',
    isSelected: false,
  },
  {
    name: 'Outback Barra da Tijuca',
    address:
      'Av. Loureiro da Silva, 1670 - 302\nBelém Novo, Curitiba - 90090-008',
    distance: '10000m',
    isSelected: false,
  },
];

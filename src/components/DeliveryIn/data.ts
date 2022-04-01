export interface IDeliveryIn {
  data?: any;
}

export interface IDeliveryInLayout extends IDeliveryIn {
  t: any;
  isOpenModal(): void;
  showInfoModal: boolean;
  isCloseModal(): void;
}

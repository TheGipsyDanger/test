export interface IPayment {
  data?: any;
}

export interface IPaymentLayout extends IPayment {
  goBack(): void;
  t: any;
}

export interface IPaymentLayoutHeader extends Pick<IPaymentLayout, 'goBack' | 't'> { }

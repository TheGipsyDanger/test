export interface ICartResume {
  where?: 'cart' | 'payment';
  onClose(): void;
}

export interface ICartResumeLayout extends ICartResume {
  t: any;
  data: IData[];
  total: string;
  top: number;
  bottom: number;
  obs: any;
}

export interface ICartResumeLayoutHeader extends ICartResumeLayout {
  fullInfo?: boolean;
}

export interface ICartResumeLayoutBody extends ICartResumeLayout {}

export interface IData {
  amount: number;
  name: string;
  observation: string;
  price: number | string;
  extras: IExtras[];
}

export interface IExtras {
  name: string;
  amount: number;
  price: number | string;
}

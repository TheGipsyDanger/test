export interface IOrderHeader {
  label: string;
  type?: 'default' | 'resume';
  hasList?: boolean;
}

export interface IOrderHeaderLayout extends IOrderHeader {
  t: any;
  mt: number;
  hasList?: boolean;
  insetsTop: number;
  modalHeader: number;
  goBack(): void;
}

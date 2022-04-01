export interface IOrderStatus {
  data?: any;
}

export interface IOrderStatusLayout extends IOrderStatus {
  toggle(): void;
  isOpen: boolean;
}

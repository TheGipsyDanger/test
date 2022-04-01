import { IUser } from '~/utils';
export interface IQueue {}

export interface IQueueLayout extends IQueue {
  t: any;
  listRef: any;
  user: IUser;
  id: string;
  press(): void;
  setId(id: string): void;
  toggle: boolean;
  bottom: number;
  backPress(): void;
  showToast: boolean;
  isValid: boolean;
  hasKeyboard: boolean;
  setShowToast(value: boolean): void;
  setToggle(value: boolean): void;
  renderItem(index: number): JSX.Element;
}

export interface IQueueFooter extends Pick<IQueueLayout, 'press' | 'isValid'> {}

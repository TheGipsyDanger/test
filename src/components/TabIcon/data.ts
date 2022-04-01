export interface ITabIcon {
  name: string;
  title: string;
  focused: boolean;
}

export interface ITabIconLayout extends ITabIcon {
  count: number;
}

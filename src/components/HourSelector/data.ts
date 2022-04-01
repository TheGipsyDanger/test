export interface IHourSelector {
  data?: any;
}

export interface IHourSelectorLayout extends IHourSelector {
  keys: string[];
  selectedHour: string;
  invalidKeys: string[];
  press(value: string): void;
}

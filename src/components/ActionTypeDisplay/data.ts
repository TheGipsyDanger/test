export interface IActionTypeDisplay {
  variant?: string;
  isSelected: boolean;
  onPress(): void;
  type: 'delivery' | 'reserve' | 'withdrawal';
}

export interface IActionTypeDisplayLayout extends IActionTypeDisplay {
  icon: JSX.Element;
  description: string;
  label: string;
}

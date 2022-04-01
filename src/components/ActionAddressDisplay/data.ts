import { IText } from '~/components/Basics/Text/data';

export interface IActionAddressDisplay {
  variant?: string;
  isSelected: boolean;
  onPress(): void;
}

export interface IActionAddressDisplayLayout extends IActionAddressDisplay {}

export interface IActionAddressDisplaySelectable
  extends IActionAddressDisplay {}

export interface IActionAddressDisplayLayoutText
  extends IText,
    Pick<IActionAddressDisplay, 'isSelected'> {}

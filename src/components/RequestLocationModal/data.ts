import { withChildren, IModalSize } from '~/utils';
export interface IRequestLocationModal {
  data?: any;
}

export interface IRequestLocationModalLayout
  extends withChildren,
    IRequestLocationModal {
  modalSizes: IModalSize;
  currentModal: JSX.Element;
  locationRef: any;
  location: number;
  input: string;
  address: object;
  showOptions: boolean;
  doMeasure(): void;
  openInternal(): void;
  goToApp(): void;
  setAddressOption(address: object): void;
  goToStep(step: number): void;
  setInput(address: string): void;
}

export interface IRequestLocationZipLayout
  extends Pick<
    IRequestLocationModalLayout,
    | 'locationRef'
    | 'doMeasure'
    | 'location'
    | 'goToStep'
    | 'modalSizes'
    | 'input'
    | 'setInput'
    | 'goToApp'
    | 'address'
    | 'setAddressOption'
    | 'showOptions'
  > {}
export interface IRequestLocatioRequestLayout
  extends Pick<IRequestLocationModalLayout, 'goToStep' | 'modalSizes'> {}
export interface IRequestLocatioContainerLayout
  extends Pick<IRequestLocationModalLayout, 'modalSizes' | 'children'> {}
export interface IRequestLocatioWelcometLayout
  extends Pick<
    IRequestLocationModalLayout,
    'goToStep' | 'modalSizes' | 'openInternal'
  > {}

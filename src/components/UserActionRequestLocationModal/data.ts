export interface IUserActionRequestLocationModal {}

export interface IUserActionRequestLocationModalLayout
  extends IUserActionRequestLocationModal {
  t: any;
  press(): void;
  closeModal(): void;
}

import { IAddressDisplayFactory } from '../interfaces/factories/AddressDisplayFactory';
import {
  IAddressType,
  IUserActionContext,
  IUserActionSelectTypeResp,
} from '../interfaces/factories/UserActionFactory';

export function createAddressDisplayFactory(): IAddressDisplayFactory {
  function selectAddress(
    data: IAddressType[],
    index: number
  ): IUserActionSelectTypeResp {
    const newState = data.map((item, itemIndex) => ({
      ...item,
      isSelected: itemIndex === index ? !data[index].isSelected : false,
    }));

    return {
      data: newState,
      context: {} as IUserActionContext,
    };
  }

  return {
    selectAddress,
  };
}

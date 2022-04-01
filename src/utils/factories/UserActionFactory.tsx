import * as React from 'react';
import { useState } from 'react';
import { StringToNumberMap } from '../interfaces/customTypes';
import {
  IType,
  IAddressType,
  IUserActionFactory,
  IUserActionContext,
  IUserActionCleanTypeResp,
  IUserActionSelectTypeResp,
} from '../interfaces/factories/UserActionFactory';

export function createUserActionFactory(): IUserActionFactory {
  const [actionContext, setActionContext] = useState<IUserActionContext>({
    type: null,
    step: 0,
    showInformationModal: false,
  });

  function getContext(): IUserActionContext {
    return actionContext;
  }

  function cleanContext(
    types: IType[],
    address: IAddressType[]
  ): IUserActionCleanTypeResp {
    setActionContext((old) => ({
      ...old,
      type: null,
      step: 0,
      showInformationModal: false,
    }));

    const newTypes = types.map((item) => ({
      ...item,
      isSelected: false,
    }));

    const newAddress = address.map((item) => ({
      ...item,
      isSelected: false,
    }));

    return {
      types: newTypes,
      address: newAddress,
      context: actionContext,
    };
  }

  function updateContextStep(index: number): void {
    setActionContext((old) => ({
      ...old,
      step: index,
    }));
  }

  function selectType(data: IType[], index: number): IUserActionSelectTypeResp {
    const newState = data.map((item, itemIndex) => ({
      ...item,
      isSelected: itemIndex === index ? !data[index].isSelected : false,
    }));

    const item = newState.find((item) => item.isSelected);

    const context = { ...actionContext, type: (item && item?.type) || null };

    setActionContext(context);

    return {
      data: newState,
      context,
    };
  }

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
      context: actionContext,
    };
  }

  function changeStep(): IUserActionContext {
    const maxSteps: StringToNumberMap = {
      delivery: 1,
      withdrawal: 2,
      reserve: 2,
      queue: 1,
    };

    const maxStep = maxSteps[actionContext.type || 'delivery'];
    const hasNext = actionContext.step < maxStep;

    const context = {
      ...actionContext,
      showInformationModal: !hasNext,
      step: hasNext ? actionContext.step + 1 : actionContext.step,
    };

    setActionContext(context);
    return context;
  }

  return {
    getContext,
    changeStep,
    selectType,
    cleanContext,
    selectAddress,
    updateContextStep,
  };
}

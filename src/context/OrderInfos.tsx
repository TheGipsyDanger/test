import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { IOrderInfosContext, IResumeTypes } from '~/utils';

export const OrderInfosContext = createContext<IOrderInfosContext>(
  {} as IOrderInfosContext
);

export const OrderInfosProvider: React.FC = ({ children }) => {
  const [resumeToShow, setResumeToShow] = useState<IResumeTypes>('delivery');

  return (
    <OrderInfosContext.Provider value={{ resumeToShow, setResumeToShow }}>
      {children}
    </OrderInfosContext.Provider>
  );
};

export function useOrderInfos(): IOrderInfosContext {
  return useContext(OrderInfosContext);
}

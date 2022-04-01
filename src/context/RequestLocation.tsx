import * as React from 'react';
import { createContext, useContext, useState } from 'react';

import { IRequestLoscationContext } from '~/utils';

export const RequestLoscationContext = createContext<IRequestLoscationContext>(
  {} as IRequestLoscationContext
);

export const RequestLoscationProvider: React.FC = ({ children }) => {
  const [step, setStep] = useState<number>(0);
  return (
    <RequestLoscationContext.Provider value={{ step, setStep }}>
      {children}
    </RequestLoscationContext.Provider>
  );
};

export function useRequestLoscation(): IRequestLoscationContext {
  return useContext(RequestLoscationContext);
}

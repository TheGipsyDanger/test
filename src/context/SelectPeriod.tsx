import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { ISelectPeriodContext, ISelectPeriodDate } from '~/utils';

export const SelectPeriodContext = createContext<ISelectPeriodContext>(
  {} as ISelectPeriodContext
);

export const SelectPeriodProvider: React.FC = ({ children }) => {
  const [date, setDate] = useState<ISelectPeriodDate>({} as ISelectPeriodDate);
  const [selectedHour, setSelectedHour] = useState<string>('');

  return (
    <SelectPeriodContext.Provider
      value={{
        date,
        setDate,
        selectedHour,
        setSelectedHour,
      }}>
      {children}
    </SelectPeriodContext.Provider>
  );
};

export function useSelectPeriod(): ISelectPeriodContext {
  return useContext(SelectPeriodContext);
}

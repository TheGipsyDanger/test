import * as React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import { ICardContext } from '~/utils/interfaces/context/CardInterfaces';

export const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider: React.FC = ({ children }) => {
  const [cardData, setCardDate] = useState<any[]>([]);
  const [cardPrincipal, setCardPrincipal] = useState<string>(
    'Meu amor por comida'
  );

  const setCardPrimary = () => {
    setCardPrincipal('asdasd');
  };

  useEffect(() => {
    setCardPrimary();
  }, []);

  return (
    <CardContext.Provider
      value={{ cardData, setCardDate, cardPrincipal, setCardPrincipal }}>
      {children}
    </CardContext.Provider>
  );
};

export function useCard(): ICardContext {
  return useContext(CardContext);
}

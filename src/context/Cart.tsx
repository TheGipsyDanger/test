import * as React from 'react';
import { useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import { ICartContext, IUpdateType } from '~/utils';

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [itens, setItens] = useState<any[]>([]);
  const [obs, setObs] = useState<string>('');

  const addItem = useCallback(
    (item: any) => {
      setItens((prevState) => [...prevState, item]);
    },
    [setItens]
  );

  const updateItemAmount = useCallback(
    (itemId: string, action: IUpdateType) => {
      if (action === 'up') {
        return setItens((itens) => [
          itens.filter((item) => item.id === itemId)[0],
          ...itens,
        ]);
      } else {
        setItens((itens) => {
          const findItem = itens.findIndex((item) => item.id == itemId);
          return itens.filter((_, index) => index !== findItem);
        });
      }
    },
    [setItens]
  );

  const removeItem = useCallback(
    (itemId: string) => {
      setItens((itens) => itens.filter((item) => item.id !== itemId));
    },
    [setItens]
  );

  const updateObs = useCallback(
    (item: any) => {
      setObs(() => item);
    },
    [setObs]
  );

  return (
    <CartContext.Provider
      value={{
        itens,
        obs,
        updateObs,
        addItem,
        removeItem,
        updateItemAmount,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): ICartContext {
  return {
    obs: useContextSelector(CartContext, (cart) => cart.obs),
    updateObs: useContextSelector(CartContext, (cart) => cart.updateObs),
    itens: useContextSelector(CartContext, (cart) => cart.itens),
    addItem: useContextSelector(CartContext, (cart) => cart.addItem),
    removeItem: useContextSelector(CartContext, (cart) => cart.removeItem),
    updateItemAmount: useContextSelector(
      CartContext,
      (cart) => cart.updateItemAmount
    ),
  };
}

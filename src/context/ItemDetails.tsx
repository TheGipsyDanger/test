import * as React from 'react';
import { createContext, useContext, useState } from 'react';

import { IItemDetailsContext, IProduct } from '~/utils';

export const ItemDetailsContext = createContext<IItemDetailsContext>(
  {} as IItemDetailsContext
);

export const ItemDetailsProvider: React.FC = ({ children }) => {
  const [currentItem, setCurrentItem] = useState<any>({});
  const [combineItems, setCombineItems] = useState<number[]>([]);

  function addCombineItems(id: number) {
    setCombineItems([...combineItems, id]);
  }

  function decreaseCombineItems(id: number) {
    setCombineItems(combineItems.filter((item) => item !== id));
  }

  return (
    <ItemDetailsContext.Provider
      value={{
        combineItems,
        addCombineItems,
        decreaseCombineItems,
        currentItem,
        setCurrentItem,
      }}>
      {children}
    </ItemDetailsContext.Provider>
  );
};

export function useItemDetails(): IItemDetailsContext {
  return useContext(ItemDetailsContext);
}

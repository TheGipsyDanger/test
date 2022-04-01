import * as React from 'react';
import { createContext, useContext, useState } from 'react';

import { ICategoriesContext, ICategory } from '~/utils';

export const CategoriesContext = createContext<ICategoriesContext>(
  {} as ICategoriesContext
);

export const CategoriesProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    {} as ICategory
  );

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        selectedCategory,
        setSelectedCategory,
      }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export function useCategories(): ICategoriesContext {
  return useContext(CategoriesContext);
}

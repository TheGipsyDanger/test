import * as React from 'react';
import { useState } from 'react';

import { Menu } from './Layout/Menu';
import { More } from './Layout/More';
import { Combine } from './Layout/Combine';
import { BestSellers } from './Layout/BestSellers';
import { Promotions } from './Layout/Promotions';
import { MenuCategory } from './Layout/MenuCategory';
import { Cart } from './Layout/Cart';
import { History } from './Layout/History';
import { CartCombine } from './Layout/CartCombine';

import { useItemDetails, useCategories } from '~/context';

import { IList } from '~/components/List/data';
import { List as Layout } from './Layout';

export const List = (props: IList) => {
  const { variant, direction = 'x' } = props;
  const { combineItems } = useItemDetails();

  const [selected, setSelected] = useState<string>('');

  const {
    selectedCategory: { description },
  } = useCategories();

  function renderItem(props: any) {
    const views: any = {
      menu: (props: any) => (
        <Menu selected={selected} setSelected={setSelected} {...props} />
      ),
      history: (props: any) => <History {...props} />,
      bestSellers: (props: any) => <BestSellers {...props} />,
      promotions: (props: any) => <Promotions {...props} />,
      more: (props: any) => <More {...props} />,
      menuCategory: (props: any) => <MenuCategory {...props} />,
      cart: (props: any) => <Cart {...props} />,
      combineCart: (props: any) => <CartCombine {...props} />,
      combine: (props: any) => (
        <Combine
          {...{ ...props, isSelected: combineItems.includes(props?.index) }}
        />
      ),
    };

    return views[variant](props);
  }

  const listDirection =
    direction === 'x' ? { horizontal: true } : { vertical: true };

  const layoutProps = {
    ...props,
    renderItem,
    listDirection,
    description,
    showDetails: variant === 'menu' && !!selected,
  };

  return <Layout {...layoutProps} />;
};

import * as React from 'react';
import { useState, useEffect } from 'react';
import chunk from 'lodash/chunk';

import { useUserAction } from '~/context';
import { populateItemData } from '~/utils';

import {
  IItemPicker,
  personData,
  ambientData,
} from '~/components/ItemPicker/data';
import { ItemPicker as Layout } from './Layout';

export const ItemPicker = (props: IItemPicker) => {
  const { setAmbient, setPersonCount, personCount } = useUserAction();
  const { numOfLines = 1, type } = props;

  const data = type === 'ambient' ? ambientData : personData;

  const [list, setlist] = useState(
    chunk(populateItemData(data), Math.ceil(data.length / numOfLines))
  );

  useEffect(() => {
    if (type === 'person' && personCount === '') {
      setlist(
        chunk(populateItemData(data), Math.ceil(data.length / numOfLines))
      );
    }
  }, [personCount]);

  function press(listIndex: number, item: string) {
    const flatList = list.flat();

    type === 'ambient' ? setAmbient(item) : setPersonCount(item);

    const updateList = flatList.map((itemList) => ({
      ...itemList,
      isActive: itemList.label === item,
    }));

    setlist(chunk(updateList, Math.ceil(data.length / numOfLines)));
  }

  const layoutProps = {
    ...props,
    press,
    list,
  };

  return <Layout {...layoutProps} />;
};

import { BRLMoney } from './money';
import { ICartData, IProduct } from '../interfaces';

export const prepareCartData = (data: any[]) => {
  return data.map((item: any) => ({
    ...item,
    price: BRLMoney(item.productStore.price),
    extras: item.extras.map((extra: any) => ({
      ...extra,
      price: BRLMoney(extra.price),
    })),
  }));
};

export const calculateTotal = (data: any[]) => {
  const extraTotal = data.reduce((acc, curr) => {
    return curr.extras.reduce((acc1: number, curr1: any) => {
      acc += curr1.price * curr1.amount;
      return acc;
    }, 0);
  }, 0);

  const total = data.reduce((acc, curr) => {
    acc += curr.productStore.price * curr.amount;
    return acc;
  }, 0);

  return total + extraTotal;
};

export const prepareToCart = (data: IProduct[]) => {
  return data.reduce((acc, curr) => {
    const checkExist = acc.some((item) => item.id === curr.id);
    const item = {
      ...curr,
      amount: !checkExist
        ? 1
        : acc.find((item) => item.id === curr.id).amount + 1,
    };

    acc = checkExist ? acc.filter((item) => item.id !== curr.id) : acc;
    acc = [...acc, item];
    return acc;
  }, [] as any[]);
};

export const defineAdditionals = (additionals: any[]) => {
  const additionalsCounts = additionals.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.name]: {
        ...curr,
        amount: acc.hasOwnProperty(curr.name) ? acc[curr.name].amount + 1 : 1,
      },
    };
  }, {});

  return Object.keys(additionalsCounts).map((item) => ({
    name: item,
    price: additionalsCounts[item].price,
    amount: additionalsCounts[item].amount,
  }));
};

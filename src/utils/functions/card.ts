import * as Crypto from 'expo-crypto';

export const prepareCardObj = (values: any) => {
  return {
    cardData: {
      type: 1,
      cardHolderName: values.userCardName,
      cardNumber: values.cardNumber,
      expirationDate: `${values.validity.slice(0, 2)}/${values.validity.slice(
        2,
        4
      )}`,
      securityCode: values.cvv,
    },
    paymentMethodid: 1,
    storeId: 123,
    documentOwner: values.cpf,
    alias: values.surname,
  };
};

export const convertAES = (hash: string) => {};

export const convertSHA256 = async (values: any) => {
  try {
    const resp = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      JSON.stringify(values)
    );
    return resp;
  } catch (error) {
    console.log('Error ao transformar o objeto', error);
  }
};

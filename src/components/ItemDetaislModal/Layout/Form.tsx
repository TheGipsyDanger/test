import * as React from 'react';

import { Wrapped, Spacing, Text, Input } from '~/components/Basics';
import { ItemQuantityInput } from '~/components/ItemQuantityInput';

import {
  additionals,
  IItemModalForm,
} from '~/components/ItemDetaislModal/data';

export const Form = ({
  observation,
  addAdditional,
  setObservation,
  removeAdditional,
}: IItemModalForm) => (
  <Wrapped>
    <Wrapped mb={4}>
      <Text mb={2} variant="outback:h4">{`Adicionais`}</Text>
      <Spacing space={3}>
        {additionals.map((item) => (
          <ItemQuantityInput
            key={item.name}
            add={addAdditional}
            decrese={removeAdditional}
            item={item}
          />
        ))}
      </Spacing>
    </Wrapped>
    <Wrapped>
      <Text
        mb={2}
        variant="outback:h4">{`Gostaria de deixar alguma observação?`}</Text>
      <Input
        elevation={3}
        size="h6"
        font="regular"
        placeholder="Ex: Ponto da carne, maionese à parte, etc."
        borderRadius="card"
        boxShadow="card"
        bg="moldals"
        value={observation}
        onChange={setObservation}
        p={3}
        pb={0}
        height={90}
        multiline={true}
        numberOfLines={4}
        maxLength={140}
        textAlignVertical="top"
      />
    </Wrapped>
  </Wrapped>
);

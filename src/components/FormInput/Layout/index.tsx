// @ts-nocheck
import * as React from 'react';

import { Wrapped } from '~/components/Basics/Wrapped';
import { Conditional } from '~/components/Basics/Conditional';
import { Text } from '~/components/Basics/Text';
import { Input } from '~/components/Basics/Input';

import { IcOpenEyes } from '~/assets/svg';

import { IFormInputLayout } from '~/components/FormInput/data';

export const FormInput = ({
  label,
  field,
  mask,
  autoFocus,
  placeholder,
  keyboardType,
  defineShowIcon,
  handleHide,
  form: { values, errors, touched },
  onChangeText,
  bg = 'background',
  showErros = true,
  onBlur,
}: IFormInputLayout) => (
  <Wrapped testID={`FormInput`}>
    <Text variant="outback:tabBar" mb={0}>
      {label}
    </Text>
    <Wrapped>
      <Wrapped
        bg="background"
        borderRadius="button"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        bg={bg ? bg : ''}
        px={3}>
        <Wrapped flex={1}>
          <Input
            label={label}
            autoFocus={autoFocus}
            onBlur={onBlur}
            value={values[field]}
            onChange={onChangeText}
            mask={mask}
            type={keyboardType}
            placeholder={placeholder}
            size="h5"
            font="regular"
            height={40}
          />
        </Wrapped>
        {defineShowIcon() && (
          <Wrapped onPress={handleHide}>
            <Wrapped width={30} height={40} center>
              <IcOpenEyes />
            </Wrapped>
          </Wrapped>
        )}
      </Wrapped>
      <Conditional render={showErros}>
        <Wrapped minHeight={15} my={0}>
          {errors[field] && touched[field] && (
            <Text variant="outback:h3" color="alerts">
              {errors[field]}
            </Text>
          )}
        </Wrapped>
      </Conditional>
    </Wrapped>
  </Wrapped>
);

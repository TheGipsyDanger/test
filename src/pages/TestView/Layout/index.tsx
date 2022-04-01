import * as React from 'react';

import { Icon, Spacing, Text, Map } from '~/components';
import { FormInput } from '~/components/FormInput';
import { Wrapped } from '~/components/Basics/Wrapped';
import { IRegisterCardForms } from '../data';
import { card } from '~/assets/images/';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { goBack } from '~/utils';

export const TestView = ({ form, fields }: IRegisterCardForms) => {
  return <Map size={100} />;
};

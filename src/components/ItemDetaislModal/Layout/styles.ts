import styled from 'styled-components/native';
import { KeyboardAvoidingView, ScrollView } from 'react-native';

import { Wrapped } from '~/components/Basics';
import { colors, metrics } from '~/styles';

export default {
  Container: styled(Wrapped)`
    width: ${metrics.width}px;
    height: ${metrics.height - 24}px;
  `,
  Body: styled(Wrapped).attrs({
    mt: -2,
    pt: 4,
    bg: 'background',
    borderTopLeftRadius: 'fullImageList',
    borderTopRightRadius: 'fullImageList',
  })`
    flex: 1;
  `,
  Scroll: styled(ScrollView).attrs({
    keyboardShouldPersistTaps: 'handled',
    showsVerticalScrollIndicator: false,
    bounces: false,
    contentContainerStyle: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: colors['background'],
    },
  })``,
  Icon: styled(Wrapped).attrs({
    height: 30,
    width: 30,
    bg: 'orange',
    borderRadius: 'circle',
  })``,
  KeyboardAvoidStyled: styled(KeyboardAvoidingView)`
    flex: 1;
  `,
};

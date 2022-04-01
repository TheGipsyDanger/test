import styled from 'styled-components/native';
import { Wrapped, Text, Icon } from '~/components/Basics';

export default {
  Container: styled(Wrapped).attrs({
    px: 3,
    height: 120,
    borderRadius: 'card',
  })`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  OtherContainer: styled(Wrapped).attrs({
    px: 3,
    borderRadius: 'card',
  })`
    flex-direction: row;
    justify-content: space-between;
  `,
  IconContainer: styled(Wrapped).attrs({
    borderRadius: 'circle',
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: 'primary',
    center: true,
  })``,
};

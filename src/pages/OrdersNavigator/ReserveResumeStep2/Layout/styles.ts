import styled from 'styled-components/native';
import { Wrapped } from '~/components';
import { space } from '~/styles/Theme';

export default {
  Text: styled.Text`
    font-size: 18px;
    color: #f37321;
    font-weight: bold;
  `,
  Content: styled(Wrapped).attrs({
    bg: 'modals',
    borderRadius: 'card',
  })``,
  Card: styled(Wrapped).attrs({
    variant: 'outback:topRadius',
    boxShadow: 'bottomSpotlight',
  })`
    margin-top: -${space[3]}px;
  `,
};

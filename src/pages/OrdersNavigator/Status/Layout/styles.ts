import styled from 'styled-components/native';
import { Wrapped } from '~/components';
import { space } from '~/styles/Theme';

export default {
  Card: styled(Wrapped).attrs({
    bg: 'modals',
    variant: 'outback:topRadius',
    boxShadow: 'bottomSpotlight',
  })`
    margin-top: -${space[3]}px;
  `,
};

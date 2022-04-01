import styled from 'styled-components/native';
import { Wrapped } from '~/components/Basics/Wrapped';
import { Text } from '~/components/Basics/Text';

export default {
  Content: styled(Wrapped).attrs({
    flex: 1,
    mx: 4,
    mt: 4,
    justifyContent: 'space-between',
  })``,
  Link: styled(Text).attrs({
    variant: 'outback:h5',
  })`
    text-decoration-line: underline;
  `,
};

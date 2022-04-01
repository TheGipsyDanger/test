import styled from 'styled-components/native';
import { Wrapped } from '~/components/Basics';

export default {
  Container: styled(Wrapped).attrs({
    mb: 4,
    px: 2,
    py: 3,
    minHeight: 81,
    bg: 'modals',
    boxShadow: 'bottomSpotlight',
    variant: 'outback:fullRadius',
  })``,
  Circle: styled(Wrapped).attrs((props) => ({
    borderRadius: 'circle',
    width: props.size,
    height: props.size,
  }))``,
  Row: styled(Wrapped).attrs({
    variant: 'outback:row',
    alignItems: 'center',
    justifyContent: 'space-between',
  })``,
  Left: styled(Wrapped).attrs({
    ml: 6,
  })``,
};

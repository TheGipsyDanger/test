import styled from 'styled-components/native';
import { Wrapped, Text } from '~/components';

export default {
  Title: styled(Text).attrs({
    variant: 'outback:desk',
  })`
    text-align: center;
  `,
  ContentTitle: styled(Text).attrs({
    variant: 'outback:h4',
  })``,
  InputArea: styled(Wrapped).attrs({
    mb: 4,
  })``,
  TypeArea: styled(Wrapped).attrs({})``,
  ResumeInfo: styled(Wrapped).attrs({
    height: 66,
    borderRadius: 'card',
    px: 4,
    bg: 'background',
    variant: 'outback:row:center',
  })``,
  ResumeInfoObs: styled(Wrapped).attrs({
    height: 120,
    borderRadius: 'card',
    p: 4,
    bg: 'background',
    variant: 'outback:row',
  })``,
  InfoLabel: styled(Wrapped).attrs({
    flex: 1,
  })``,
  InfoContent: styled(Wrapped).attrs({
    flex: 2,
  })``,
};

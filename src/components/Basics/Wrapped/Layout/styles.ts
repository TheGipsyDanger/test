import styled, { css } from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';
import { IWrappedLayout } from '~/components/Basics/Wrapped/data';
import { shadows, metrics } from '~/styles';
import { theme } from '~/styles/Theme';

import {
  color,
  space,
  border,
  flexbox,
  variant,
  boxShadow,
  typography,
  backgroundColor,
} from 'styled-system';

const Wrapped = styled.View<IWrappedLayout>`
  ${space};
  ${color};
  ${typography};
  ${border};
  ${flexbox};
  ${boxShadow};
  ${backgroundColor};

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: ${theme.shadows[shadow as string]};
      elevation: 3;
    `}

  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${theme.radii[borderRadius as string] || 'Light'}px;
    `}

${({ center }) =>
    center &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

const elevation = Platform.OS === 'android' ? { elevation: 3 } : {};

const androidStatus = StatusBar.currentHeight ? StatusBar.currentHeight * 2 : 0;

export default {
  Wrapped: styled(Wrapped)(
    variant({
      variants: {
        'outback:card': {
          boxShadow: shadows['card'],
          ...elevation,
        },
        'outback:card:row': {
          flexDirection: 'row',
          boxShadow: shadows['card'],
          ...elevation,
        },
        'outback:card:row:center': {
          flexDirection: 'row',
          alignItems: 'center',
          boxShadow: shadows['card'],
          ...elevation,
        },
        'outback:row': {
          flexDirection: 'row',
        },
        'outback:row:center': {
          flexDirection: 'row',
          alignItems: 'center',
        },
        'outback:card:row:space': {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: shadows['card'],
        },
        'outback:topRadius': {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        'outback:bottomRadius': {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
        'outback:fullRadius': {
          borderRadius: 20,
        },
        'outback:modal:full': {
          width: metrics.width,
          height:
            Platform.OS === 'ios'
              ? metrics.height
              : metrics.height - androidStatus,
        },
      },
    })
  ),
};

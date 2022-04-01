import styled, { css } from 'styled-components/native';
import { IWrappedButtonLayout } from '~/components/Basics/Wrapped/data';
import { theme, colors } from '~/styles/Theme';

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

const ButtonWrapped = styled.View<IWrappedButtonLayout>`
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

export default {
  Wrapped: styled(ButtonWrapped)(
    variant({
      variants: {
        facebook: {
          borderRadius: 100,
          backgroundColor: colors['facebook'],
        },
        google: {
          borderRadius: 100,
          backgroundColor: colors['background'],
        },
        apple: {
          borderRadius: 100,
          backgroundColor: colors['text'],
        },
        'outback:primary': {
          borderRadius: 100,
          backgroundColor: colors['primary'],
        },
        'outback:clean': {
          borderRadius: 100,
          borderWidth: 1,
          borderColor: colors['text'],
        },
        'outback:secondary': {
          borderRadius: 100,
          backgroundColor: colors['secondary'],
        },
        'outback:support': {
          borderRadius: 100,
          backgroundColor: colors['support'],
        },
        'outback:disabled': {
          borderRadius: 100,
          backgroundColor: colors['inactive'],
        },
        'outback:white:border': {
          borderRadius: 100,
          backgroundColor: colors['modals'],
          borderWidth: 1,
          borderColor: colors['text'],
        },
        'outback:white:border:red': {
          borderRadius: 100,
          backgroundColor: colors['modals'],
          borderWidth: 1,
          borderColor: colors['primary'],
        },
      },
    })
  ),
};

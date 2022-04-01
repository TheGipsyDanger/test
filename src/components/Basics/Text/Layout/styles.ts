import styled, { css } from 'styled-components/native';
import { Text as TextBase } from 'react-native';
import { color, space, border, typography, variant } from 'styled-system';
import { ITextLayout } from '~/components/Basics/Text/data';
import { fonts, fontSizes, fontSizesNumber, colors } from '~/styles';

const Text = styled(TextBase)<ITextLayout>`
  ${space};
  ${color};
  ${typography};
  ${border};

  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}

  ${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `}

  font-size: ${({ size }) => fontSizes[size || 'default']};
  font-family: ${({ font }) => fonts[font as string] || 'Regular'};
  color: ${({ color }) => colors[color as string]};
`;

export default {
  Text: styled(Text)(
    variant({
      variants: {
        'outback:h1': {
          fontFamily: fonts['bold'],
          fontSize: fontSizesNumber['h1'],
        },
        'outback:h2': {
          fontFamily: fonts['medium'],
          fontSize: fontSizesNumber['h2'],
        },
        'outback:h3': {
          fontFamily: fonts['bold'],
          fontSize: fontSizesNumber['h3'],
        },
        'outback:h4': {
          fontFamily: fonts['regular'],
          fontSize: fontSizesNumber['h4'],
        },
        'outback:h5': {
          fontFamily: fonts['light'],
          fontSize: fontSizesNumber['h5'],
          lineHeight: '20px',
        },
        'outback:h6': {
          fontFamily: fonts['light'],
          fontSize: fontSizesNumber['h6'],
        },
        'outback:h7': {
          fontFamily: fonts['medium'],
          fontSize: fontSizesNumber['h7'],
          lineHeight: '26px',
        },
        'outback:h8': {
          fontFamily: fonts['medium'],
          fontSize: fontSizesNumber['h8'],
        },
        'outback:tabBar': {
          fontFamily: fonts['medium'],
          fontSize: fontSizesNumber['tabBar'],
        },
        'outback:body': {
          fontSize: fontSizesNumber['body'],
        },
        'outback:title': {
          fontFamily: fonts['bold'],
          fontSize: fontSizesNumber['title'],
        },
        'outback:XXG': {
          fontFamily: fonts['Black'],
          fontSize: fontSizesNumber['XXG'],
          lineHeight: '70px',
        },
        'outback:desk': {
          fontFamily: fonts['bold'],
          fontSize: fontSizesNumber['desk'],
          lineHeight: '21px',
        },
        'outback:por': {
          fontFamily: fonts['thin'],
          fontSize: fontSizesNumber['por'],
          lineHeight: '21px',
        },
        'outback:link': {
          fontFamily: fonts['regular'],
          fontSize: fontSizesNumber['link'],
          textDecorationLine: 'underline',
        },
      },
    })
  ),
};

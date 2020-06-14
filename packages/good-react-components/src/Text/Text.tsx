import styled from '@emotion/styled'
import { system, typography } from 'styled-system'

import { Box } from '../Box'

const textColorConfig: { textColor: any; color?: any } = {
  textColor: {
    property: 'color',
    scale: 'colors',
  },
}

// ### Open Question: Allow color prop or is it being confused with built-in color prop
textColorConfig.color = textColorConfig.textColor

const textColor = system(textColorConfig)

const textShadow = system({
  textShadow: {
    property: 'textShadow',
    scale: 'shadows',
  },
})

export const Text = styled(Box)(
  {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  textColor,
  textShadow,
  typography
)

Text.defaultProps = {
  fontFamily: 'default',
  fontSize: 'default',
  lineHeight: 'default',
}

import styled from '@emotion/styled'
import { border, flexbox, layout, space, system } from 'styled-system'

const backgroundColor = system({
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
  },
})

const boxShadow = system({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
})

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  backgroundColor,
  boxShadow,
  border,
  space,
  layout
)

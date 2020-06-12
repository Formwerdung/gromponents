// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import styled from '@emotion/styled'
import { color } from 'styled-system'
import { FunctionComponent } from 'react'

export const DopeEditor: FunctionComponent = () => {
  const theme: any = useTheme()

  return <p css={{ color: theme.main }}>The Dopest Editor You Ever Editted With</p>
}

export const Box = styled.div`
  ${color}
`

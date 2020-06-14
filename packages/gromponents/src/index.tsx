// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { FunctionComponent } from 'react'

export * from './Box'
export * from './Flex'
export * from './Grid'
export * from './Text'

export const DopeEditor: FunctionComponent = () => {
  const theme: any = useTheme()

  return (
    <p css={{ color: theme.main }}>The Dopest Editor You Ever Editted With</p>
  )
}

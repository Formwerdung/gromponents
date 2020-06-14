import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'emotion-theming'

const space = [
  0,
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '1rem',
  '1.5rem',
  '2rem',
  '3rem',
  '4.5rem',
  '6rem',
]

const theme = {
  colors: {
    main: 'orange',
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
  },
  fontSizes: ['0.6rem', '0.8rem', '1rem'],
  space: space,
  lineHeights: space,
  breakpoints: ['512px', '768px', '1024px', '1280px'],
  shadows: {
    default: '5px 10px #888888',
  },
  fonts: {
    default: `apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    headings: 'Georgia, serif',
  },
  radii: {
    small: '4px',
    default: '8px',
    large: '12px',
  },
  sizes: {
    touchable: '2.5rem',
    full: '100%',
  },
}

;(theme as any).lineHeights.default = space[5]
;(theme as any).fontSizes.default = space[4]

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

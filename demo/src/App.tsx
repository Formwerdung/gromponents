// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { DopeEditor, Box, Text } from 'good-react-components'

function App() {
  return (
    <Box m={4}>
      <DopeEditor />
      <p css={(theme) => ({ color: theme.main })}>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Box
        backgroundColor="main"
        color="white"
        p={[4, 6]}
        margin={4}
        display="flex"
        boxShadow="default"
        flexDirection="column"
        borderRadius={['small', 'default', 'large']}
      >
        <span>Hello Kitchen Sink Box</span>
        <span>Hello my lovelies</span>
      </Box>
      <Box backgroundColor="main" size="touchable" />
      <Text
        as="h1"
        mt={4}
        textColor="navy"
        textShadow="default"
        lineHeight={4}
        textAlign="right"
      >
        Hello World
      </Text>
      <Text as="h2" fontFamily="headings">
        What a nice intermittend heading
      </Text>
    </Box>
  )
}

export default App

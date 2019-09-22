import React from 'react'
import { render, Text, Box } from 'ink'
import Link from 'ink-link'

/**
 * See: https://github.com/vadimdemedes/ink/issues/230
 * 
 * Output:
 *  Example 1
 *  
 *  React for CLIs. Build and test your CLI output using components. It even comes
 *  with convenient helpers for wrapping long text! Woot!
 *  
 *  Example 2
 *  
 *  Check out Ink's online docs.
 *  
 *  Example 3
 *  
 *  React for CLIs. Build and test your CLI output using components. Check out the
 *  online docs.
 *
 * Expected:
 *  TBD -- we got the expected output. Might not be recreating this right.. :confused:
 */

const Example: React.FC = () => {
  return (
    <>
      <Text>Example 1</Text>
      <Box marginTop={1} marginBottom={1}>
        <Box width={80} textWrap="wrap">
          React for CLIs. Build and test your CLI output using components. It even comes with convenient helpers for wrapping long text! Woot!
        </Box>
      </Box>
      <Text>Example 2</Text>
      <Box marginTop={1} marginBottom={1}>
        <Box width={80} textWrap="wrap">
          Check out Ink's <Link url="https://github.com/vadimdemedes/ink">online docs</Link>.
        </Box>
      </Box>
      <Text>Example 3</Text>
      <Box marginTop={1} marginBottom={1}>
        <Box width={80} textWrap="wrap">
          React for CLIs. Build and test your CLI output using components. Check out the <Link url="https://github.com/vadimdemedes/ink">online docs</Link>.
        </Box>
      </Box>
    </>
  )
}

async function run() {
  const { waitUntilExit } = render(<Example />, {
    debug: process.env.DEBUG === 'true'
  })
  await waitUntilExit()
}

run()

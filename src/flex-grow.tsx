import React from 'react'
import { render, Box, Color } from 'ink'

/**
 * See: https://github.com/vadimdemedes/ink/issues/233
 * 
 * Output:
 *  STARTExample Step:[1/6]                                                      END
 * Expected:
 *  STARTExample Step:                                                      [1/6]END
 */

const Example: React.FC = () => {
  return (
    <Box flexDirection='row' width={80}>
      START
      <Box flexGrow={0}>
        <Color white>Example Step:</Color>
      </Box>
      <Box flexGrow={1} justifyContent='flex-end'>
        <Color grey>[1/6]</Color>
      </Box>
      END
    </Box>
  )
}

async function run() {
  const { waitUntilExit } = render(<Example />, {
    debug: process.env.DEBUG === 'true',
    // @ts-ignore
    // experimental: true
  })
  await waitUntilExit()
}

run()

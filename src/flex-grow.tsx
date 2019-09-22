import React from 'react'
import { render, Box, Color } from 'ink'

/**
 * Output:
 *  Example Step:[1/6]
 * Expected:
 *  Example Step:                [1/6]
 * 
 * Notes:
 *  Possible bug with flexGrow?
 */

const Example: React.FC = () => {
  return (
    <Box flexDirection='row' width={80}>
      <Box flexGrow={0}>
        <Color white>Example Step:</Color>
      </Box>
      <Box flexGrow={1} justifyContent='flex-end'>
        <Color grey>[1/6]</Color>
      </Box>
    </Box>
  )
}

render(<Example />)

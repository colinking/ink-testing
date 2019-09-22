import React, { useState, useEffect } from 'react'
import { render, Box, Color } from 'ink'

/**
 * See: https://github.com/vadimdemedes/ink/issues/228
 * 
 * Output:
 *  1
 *  2
 *  3
 * 
 * Expected:
 *  1
 *  2
 *  3
 *  4
 *  5
 */

const Example: React.FC = () => {
  // We're waiting for an async process, so we'll want a loading state.
  const [isLoading, setIsLoading] = useState(true)

  // Fake loading some async data.
  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(t)
  }, [])

  // Loading state if we're still waiting on the results
  if (isLoading) {
    return (
      <Box height={3}>
        <Color grey>Loading...</Color>
      </Box>
    )
  }

  // Once the results load, show the list:
  return (
    <Box flexDirection="column">
      <Color>1</Color>
      <Color>2</Color>
      <Color>3</Color>
      <Color>4</Color>
      <Color>5</Color>
    </Box>
  )
}

async function run() {
  const { waitUntilExit } = render(<Example />, {
    debug: process.env.DEBUG === 'true',
    // @ts-ignore
    experimental: false
  })
  await waitUntilExit()
}

run()

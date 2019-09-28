import React, { useState } from 'react'
import { render, Box, Color, useInput } from 'ink'

/**
 * See: https://github.com/vadimdemedes/ink/issues/TODO
 * 
 * Note: the output of this script depends on your terminal width. If you have enough space,
 * the ErrorBoundary (An error occurred: Whoops!) will overwrite the "React will try to..."
 * line entirely.
 * 
 * Output:
 *  Hit any key to crash!
 *  The above error occurred in the <Example> component:
 *      in Example
 *      in ErrorBoundary
 *      in App
 *  
 *  React will try to recreate this component tree from scratch using the error boundary you proAn error occurred: Whoops!
 * Expected:
 *  An error occurred: Whoops!
 */

interface ErrorBoundaryState {
  error?: Error
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state = {} as ErrorBoundaryState

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { error }
  }

  render() {
    const { error } = this.state

    if (!error) {
      return this.props.children
    }

    return (
      <Box>
        <Color>An error occurred: {error.message}</Color>
      </Box>
    )
  }
}

const Example: React.FC = () => {
  const [shouldError, setShouldError] = useState(false)
  useInput(() => {
    setShouldError(true)
  })

  if (shouldError) {
    throw new Error('Whoops!')
  }

  return (
    <Box>
      <Color green>Hit any key to crash!</Color>
    </Box>
  )
}

async function run() {
  const { waitUntilExit } = render((
    <ErrorBoundary>
      <Example />
    </ErrorBoundary>
  ), {
    debug: process.env.DEBUG === 'true',
  })
  await waitUntilExit()
}

run()

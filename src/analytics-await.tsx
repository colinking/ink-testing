import React from 'react'
import { render, Text, Box } from 'ink'
import Analytics from 'analytics-node'

/**
 * Seems like it is exiting without awaiting for the promise around analytics-node.
 * 
 * Output:
 *  Hello World!
 *  [cli]: opening promise to send analytics
 *
 * Expected:
 *  Hello World!
 *  [cli]: opening promise to send analytics
 *  [cli]: track call callback fired
 *  [cli]: promise awaited; closing
 *
 * Solution:
 *  You need to `unmount()`, otherwise the node event loop will shut off. Ink should
 *  maybe hang instead, so make these issues clear.
 */

const Example: React.FC = () => {
  return <Text>Hello World!{'\n'}</Text>
}

async function run() {
  const { unmount } = render(<Example />, {
    debug: process.env.DEBUG === 'true'
  })
  // This is the fix:
  unmount()

  // Fire some analytics.
  const analyticsNode = new Analytics('123456789', {
    flushAt: 1
  })

  console.log('[cli]: opening promise to send analytics')

  await new Promise(resolve => {
    analyticsNode.track({
      event: 'Command Run',
      anonymousId: 'tbd',
    }, () => {
      console.log('[cli]: track call callback fired')
      resolve()
    })
  })
  
  console.log('[cli]: promise awaited; closing')
}

run()

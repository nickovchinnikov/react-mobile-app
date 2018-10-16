import React from 'react'

import { storiesOf } from '@storybook/react'

import { isMobile, isTablet } from '../src'

storiesOf('Mobile detector test', module).add('Simple mobile detector test', () => {
  return (
    <div>
      <div>isMobile {String(isMobile())}</div>
      <div>isTablet {String(isTablet())}</div>
    </div>
  )
})

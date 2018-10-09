# react-mobile-app


## Tool which help you to create clear mobile architecture in React.js

If you are building big web application with different components for desktop / mobile + tablet (landscape and portrait), after some time you'll face with lots of problems.

## Install

```
npm i react-mobile-app -S
```

#### First, it will be too much code in one place

#### Secondly, how can you manage it, when user will change device orientation and your application should handle it completely rebuilding frontend?

For clear components-based architecture I propose to use the following approach

```javascript
import { mobileDetector } from 'react-mobile-app'

import { ComponentDesktop } from './Component.desktop'

import { ComponentMobilePortrait } from './ComponentMobile.portrait'
import { ComponentMobileLandscape } from './ComponentMobile.landscape'

import { ComponentTabletPortrait } from './ComponentTablet.portrait'
import { ComponentTabletLandscape } from './ComponentTablet.landscape'

export const Component = mobileDetector(
  ComponentDesktop,
  [ComponentMobilePortrait, ComponentMobileLandscape],
  [ComponentTabletPortrait, ComponentTabletLandscape]
)
```

So this's it, ground zero.

## How I can use it, extended version

```javascript
mobileDetector(
  ComponentDesktop,
  [ComponentMobilePortrait?, ComponentMobileLandscape?],
  [ComponentTabletPortrait?, ComponentTabletLandscape?]
)
```

`mobileDetector` has only required param `mobileDetector(ComponentDesktop)` for the desktop view

If you skip any other parameters it will work in the following way

1. `mobileDetector(ComponentDesktop, [ComponentMobilePortrait])` 
ComponentDesktop for all mobile devices representation, ignore orientation and device type (mobile / tablet)

2. `mobileDetector(ComponentDesktop, [ComponentMobilePortrait, ComponentMobileLandscape])`
Both presentations (landscape / portrait) but ignoring device type (mobile / tablet)

3. `mobileDetector(ComponentDesktop, [ComponentMobilePortrait, ComponentMobileLandscape], [ComponentTabletPortrait])`
For mobile presented two different orientaion (landscape / portrait) but for the tablet it'll be one view

4. `mobileDetector(ComponentDesktop, [ComponentMobilePortrait, ComponentMobileLandscape], [ComponentTabletPortrait])`
Full version - mobile / tablet presented in two orientaions (landscape / portrait)

### If you want to use low-lvl API

You can find the next helpfull methods under the hood

Library based on the [mobile-detect](https://github.com/hgoebl/mobile-detect.js) so everything you can find inside `mobileDetect` instance

```javascript
import MobileDetect from 'mobile-detect'

const isMobile = (): boolean => Boolean

const isTablet = (): boolean => Boolean

const matchMediaQuery = (): MediaQueryList => window.matchMedia('(orientation: landscape)')

const isLandscape = (): boolean => matchMediaQuery().matches

const mobileDetect: MobileDetect = new MobileDetect(navigator.userAgent)

```

You can import anything what you need

```javascript

import {
  mobileDetector,
  isMobile,
  isTablet,
  matchMediaQuery,
  isLandscape,
  mobileDetect
} from 'react-mobile-app'

```

### With redux

```javascript
import { connect } from 'react-redux'
import { mobileDetector } from 'react-mobile-app'

import { action } from './reducer'

import { ComponentDesktop } from './Component.desktop'

import { ComponentMobilePortrait } from './ComponentMobile.portrait'
import { ComponentMobileLandscape } from './ComponentMobile.landscape'

import { ComponentTabletPortrait } from './ComponentTablet.portrait'
import { ComponentTabletLandscape } from './ComponentTablet.landscape'

const mapStateToProps = props => ({ ...props })

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(action())
})

const Component = connect(
  mapStateToProps,
  mapDispatchToProps,
  mobileDetector(
    ComponentDesktop,
    [ComponentMobilePortrait, ComponentMobileLandscape],
    [ComponentTabletPortrait, ComponentTabletLandscape]
  )
)
```

### With React-Storybook

Use [Storybook](https://github.com/storybooks/storybook) for easy UI development

You can configurate it for different flow on mobile and desktop

```javascript
import React from 'react'
import { configure } from '@storybook/react'
import { isMobile, isTablet } from 'react-mobile-app'

const desktopContext = () => require.context('../src', true, /\.((?!mobile)|(?!tablet))\..*\.story\.js$/)
const mobileContext = () => require.context('../src', true, /\.mobile\.story\.js$/)
const tabletContext = () => require.context('../src', true, /\.tablet\.story\.js$/)

const calculateContext = () => {
  if (isMobile()) {
    return mobileContext()
  }

  if (isTablet()) {
    tabletContext()
  }

  return desktopContext()
}

const ctx = calculateContext()

function loadStories() {
  ctx.keys().forEach(ctx)
}

configure(loadStories, module)

```

Then you can easily add specific stories to your filesystem mobile and tablet 

> May the force be with you!

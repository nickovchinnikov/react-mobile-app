// @flow

import MobileDetect from 'mobile-detect'

export const mobileDetect: MobileDetect = new MobileDetect(navigator.userAgent)

export const isMobile = (): boolean => Boolean(mobileDetect.mobile())

export const isTablet = (): boolean => Boolean(mobileDetect.tablet())

export const matchMediaQuery = (): MediaQueryList => window.matchMedia('(orientation: landscape)')

export const isLandscape = (): boolean => matchMediaQuery().matches

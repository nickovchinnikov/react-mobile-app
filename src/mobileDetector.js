//@flow

import {
  orientationDetector,
  calculateMobileComponentByOrientation,
  calculateTabletComponentByOrientation
} from './calculateComponentByOrientation'

import type { keyValueType, reactComponentType, reactComponentsArrayType } from './types'

import { isMobile, isTablet } from './helpers'

export const mobileDetector = (
  desktop: reactComponentType,
  [portrait, landscape]: reactComponentsArrayType = [],
  [tablePortrait, tableLandscape]: reactComponentsArrayType = []
): reactComponentType => {
  if (isMobile()) {
    return calculateMobileComponentByOrientation(desktop, [portrait, landscape])
  }

  if (isTablet()) {
    return calculateTabletComponentByOrientation(desktop, [portrait, landscape], [tablePortrait, tableLandscape])
  }

  return desktop
}

export const onlyDesktop = desktop => {
  if (!isMobile() && !isTablet()) {
    return desktop
  }

  return () => {}
}

export const onlyMobile = (portrait, landscape) => {
  if (isMobile()) {
    return orientationDetector(portrait, landscape)
  }

  return () => {}
}

export const onlyTablet = (portrait, landscape) => {
  if (isTablet()) {
    return orientationDetector(portrait, landscape)
  }

  return () => {}
}

export const deviceType: keyValueType = {
  desktop: 'desktop',
  mobile: 'mobile',
  tablet: 'tablet'
}

export const screenOrientation: keyValueType = {
  portrait: 'portrait',
  landscape: 'landscape'
}

//@flow

import type { keyValueType, reactComponentType, reactComponentsArrayType } from './types'
import {
  isMobile,
  isTablet,
  calculateMobileComponentByOrientation,
  calculateTabletComponentByOrientation
} from './helpers'

type mobileDetectoraArgsType = {
  desktop?: reactComponentType,
  mobile?: reactComponentType,
  tablet?: reactComponentType
}

export const mobileDetector = ([
  desktop: reactComponentType,
  [portrait, landscape]: reactComponentsArrayType = [],
  [tablePortrait, tableLandscape]: reactComponentsArrayType = []
]: mobileDetectoraArgsType): reactComponentType => {
  if (isMobile()) {
    return calculateMobileComponentByOrientation(desktop, [portrait, landscape])
  }

  if (isTablet()) {
    return calculateTabletComponentByOrientation(desktop, [portrait, landscape], [tablePortrait, tableLandscape])
  }

  return desktop
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

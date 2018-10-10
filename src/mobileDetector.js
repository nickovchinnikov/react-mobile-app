//@flow

import {
  orientationDetector,
  calculateMobileComponentByOrientation,
  calculateTabletComponentByOrientation
} from './calculateComponentByOrientation'

import type { reactComponentType, reactComponentsArrayType } from './types'

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

const reactDumpFunctionalComponent = () => null

export const onlyDesktop = (desktop: reactComponentType): reactComponentType =>
  !isMobile() && !isTablet() ? desktop : reactDumpFunctionalComponent

export const onlyMobile = (portrait: reactComponentType, landscape: reactComponentType): reactComponentType =>
  isMobile() ? orientationDetector(portrait, landscape) : reactDumpFunctionalComponent

export const onlyTablet = (portrait: reactComponentType, landscape: reactComponentType): reactComponentType =>
  isTablet() ? orientationDetector(portrait, landscape) : reactDumpFunctionalComponent

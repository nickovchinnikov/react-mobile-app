//@flow

import type { reactComponentType, reactComponentsArrayType } from './types'

import { hocWrapper } from './hocWrapper'

export const orientationDetector = (
  portrait: reactComponentType,
  landscape: reactComponentType
): reactComponentType => {
  if (!landscape) {
    return portrait
  }

  return hocWrapper([portrait, landscape])
}

export const calculateMobileComponentByOrientation = (
  desktop: reactComponentType,
  [portrait, landscape]: reactComponentsArrayType = []
): reactComponentType => {
  if (!portrait) {
    return desktop
  }

  return orientationDetector(portrait, landscape)
}

export const calculateTabletComponentByOrientation = (
  desktop: reactComponentType,
  [mobilePortrait, mobileLandscape]: reactComponentsArrayType = [],
  [tabletPortrait, tabletLandscape]: reactComponentsArrayType = []
): reactComponentType => {
  if (!tabletPortrait) {
    return calculateMobileComponentByOrientation(desktop, [mobilePortrait, mobileLandscape])
  }

  return orientationDetector(tabletPortrait, tabletLandscape)
}

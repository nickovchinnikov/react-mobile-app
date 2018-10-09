import { hocWrapper } from './hocWrapper'

export const calculateMobileComponentByOrientation = (
  desktop: reactComponentType,
  [portrait, landscape]: reactComponentsArrayType = []
): reactComponentType => {
  if (!portrait) {
    return desktop
  }

  if (!landscape) {
    return portrait
  }

  return hocWrapper([portrait, landscape])
}

export const calculateTabletComponentByOrientation = (
  desktop: reactComponentType,
  [mobilePortrait, mobileLandscape]: reactComponentsArrayType = [],
  [tabletPortrait, tabletLandscape]: reactComponentsArrayType = []
): reactComponentType => {
  if (!tabletPortrait) {
    return calculateMobileComponentByOrientation(desktop, [mobilePortrait, mobileLandscape])
  }

  if (!tabletLandscape) {
    return tabletPortrait
  }

  return hocWrapper([tabletPortrait, tabletLandscape])
}

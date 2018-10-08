// @flow

import React from 'react'
import type { Node } from 'react'
import MobileDetect from 'mobile-detect'

import type { reactComponentsArrayType, reactComponentType } from './types'
import { MobileDetectorHOC } from './MobileDetectorHOC'

export const mobileDetect: MobileDetect = new MobileDetect(navigator.userAgent)

export const isMobile = (): boolean => Boolean(mobileDetect.mobile())

export const isTablet = (): boolean => Boolean(mobileDetect.tablet())

export const matchMediaQuery = (): MediaQueryList => window.matchMedia('(orientation: landscape)')

export const isLandscape = (): boolean => matchMediaQuery().matches

export const hocWrapper = ([portrait, landscape]: reactComponentsArrayType): reactComponentType => {
  const CalculatedComponent = (props: Object): Node => (
    <MobileDetectorHOC {...props} components={[portrait, landscape]} />
  )

  return CalculatedComponent
}

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

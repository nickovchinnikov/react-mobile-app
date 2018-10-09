import React from 'react'
import { MobileDetectorHOC } from './MobileDetectorHOC'

export const hocWrapper = ([portrait, landscape]: reactComponentsArrayType): reactComponentType => {
  const CalculatedComponent = (props: Object): Node => (
    <MobileDetectorHOC {...props} components={[portrait, landscape]} />
  )

  return CalculatedComponent
}

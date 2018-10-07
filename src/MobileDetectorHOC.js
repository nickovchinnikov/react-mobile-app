//@flow

import React, { Component } from 'react'

import type { reactComponentType } from './types'

import { isLandscape, matchMediaQuery } from './helpers'

type mobileDetectorHOCPropsType = {
  components: reactComponentType
}

type mobileDetectorHOCStateType = {
  orientation: boolean
}

export class MobileDetectorHOC extends Component<mobileDetectorHOCPropsType, mobileDetectorHOCStateType> {
  orientationWatcher: MediaQueryList
  isCancelled: boolean

  constructor(props: mobileDetectorHOCPropsType) {
    super(props)
    this.state = {
      orientation: isLandscape()
    }

    this.orientationWatcher = matchMediaQuery()
  }

  orientationChangedHandler = () => {
    !this.isCancelled &&
      this.setState({
        orientation: isLandscape()
      })
  }

  componentWillUnmount() {
    this.isCancelled = true
    this.orientationWatcher.removeListener(this.orientationChangedHandler)
  }

  componentDidMount() {
    this.orientationWatcher.addListener(this.orientationChangedHandler)
  }

  getComponentByDevice([portrait, landscape]: reactComponentType): reactComponentType {
    const { orientation } = this.state

    return orientation ? landscape : portrait
  }

  render() {
    const Component = this.getComponentByDevice(this.props.components)
    return <Component {...this.props} />
  }
}

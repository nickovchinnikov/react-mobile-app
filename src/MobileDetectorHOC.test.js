import React from 'react'

import { shallow } from 'enzyme'

import * as dependency from './helpers'
import { MobileDetectorHOC } from './MobileDetectorHOC'

const mockPortraitComponent = jest.fn(() => 1)
const mockLandscapeComponent = jest.fn(() => 2)

const testRender = () => <MobileDetectorHOC components={[mockPortraitComponent, mockLandscapeComponent]} />

describe('MobileDetectorHOC testing', () => {
  it('mockPortraitComponent works', () => {
    dependency.isLandscape = jest.fn(() => false)
    const wrapper = shallow(testRender())

    expect(wrapper.type()()).toBe(1)
  })

  it('mockLandscapeComponent works', () => {
    dependency.isLandscape = jest.fn(() => true)
    const wrapper = shallow(testRender())

    expect(wrapper.type()()).toBe(2)
  })

  it('isLandscape state works as well', () => {
    dependency.isLandscape = jest.fn(() => false)
    const wrapper = shallow(testRender())

    expect(wrapper.type()()).toBe(1)

    wrapper.setState({ isLandscape: true })

    expect(wrapper.type()()).toBe(2)
  })

  it('componentDidMount / componentWillUnmount add and remove listeners', () => {
    const addListener = jest.fn(() => true)
    const removeListener = jest.fn(() => true)

    dependency.matchMediaQuery = () => ({
      addListener,
      removeListener
    })

    const wrapper = shallow(testRender())

    expect(addListener.mock.calls.length).toBe(1)

    wrapper.unmount()

    expect(removeListener.mock.calls.length).toBe(1)
  })
})

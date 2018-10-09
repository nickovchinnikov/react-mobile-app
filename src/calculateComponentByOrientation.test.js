import { shallow } from 'enzyme'

import {
  calculateMobileComponentByOrientation,
  calculateTabletComponentByOrientation
} from './calculateComponentByOrientation'
import { MobileDetectorHOC } from './MobileDetectorHOC'

describe('calculateComponentByOrientation testing', () => {
  it('calculateMobileComponentByOrientation only desktop', () => {
    const mockDesktopComponent = jest.fn(() => 0)

    const mockMobileComponentInstance = calculateMobileComponentByOrientation(mockDesktopComponent)

    mockMobileComponentInstance()

    expect(mockMobileComponentInstance.mock.results[0].value).toBe(0)
  })

  it('calculateMobileComponentByOrientation only portrait', () => {
    const mockDesktopComponent = jest.fn(() => 0)
    const mockMobilePortraitComponent = jest.fn(() => 1)

    const mockMobilePortraitComponentInstance = calculateMobileComponentByOrientation(mockDesktopComponent, [
      mockMobilePortraitComponent
    ])

    mockMobilePortraitComponentInstance()

    expect(mockMobilePortraitComponentInstance.mock.results[0].value).toBe(1)
  })

  it('calculateMobileComponentByOrientation landscape', () => {
    const mockDesktopComponent = jest.fn(() => 0)
    const mockMobilePortraitComponent = jest.fn(() => 1)
    const mockMobileLandscapeComponent = jest.fn(() => 2)

    const mockMobileLandscapeComponentInstance = calculateMobileComponentByOrientation(mockDesktopComponent, [
      mockMobilePortraitComponent,
      mockMobileLandscapeComponent
    ])

    const wrapper = shallow(mockMobileLandscapeComponentInstance())

    expect(wrapper.instance()).toBeInstanceOf(MobileDetectorHOC)
  })

  it('calculateTabletComponentByOrientation only desktop', () => {
    const mockDesktopComponent = jest.fn(() => 0)

    const mockTabletComponentInstance = calculateTabletComponentByOrientation(mockDesktopComponent)

    mockTabletComponentInstance()

    expect(mockTabletComponentInstance.mock.results[0].value).toBe(0)
  })

  it('calculateTabletComponentByOrientation only mobile portrait', () => {
    const mockDesktopComponent = jest.fn(() => 0)
    const mockMobilePortraitComponent = jest.fn(() => 1)

    const mockTabletComponentInstance = calculateTabletComponentByOrientation(mockDesktopComponent, [
      mockMobilePortraitComponent
    ])

    mockTabletComponentInstance()

    expect(mockTabletComponentInstance.mock.results[0].value).toBe(1)
  })

  it('calculateTabletComponentByOrientation mobile landscape', () => {
    const mockDesktopComponent = jest.fn(() => 0)
    const mockMobilePortraitComponent = jest.fn(() => 1)
    const mockMobileLandscapeComponent = jest.fn(() => 2)

    const mockTabletComponentInstance = calculateTabletComponentByOrientation(mockDesktopComponent, [
      mockMobilePortraitComponent,
      mockMobileLandscapeComponent
    ])

    mockTabletComponentInstance()

    const wrapper = shallow(mockTabletComponentInstance())

    expect(wrapper.instance()).toBeInstanceOf(MobileDetectorHOC)
  })

  it('calculateTabletComponentByOrientation table portrait', () => {
    const mockDesktopComponent = jest.fn(() => 0)
    const mockMobilePortraitComponent = jest.fn(() => 1)
    const mockMobileLandscapeComponent = jest.fn(() => 2)
    const mockTablePortraitComponent = jest.fn(() => 3)

    const mockTabletComponentInstance = calculateTabletComponentByOrientation(
      mockDesktopComponent,
      [mockMobilePortraitComponent, mockMobileLandscapeComponent],
      [mockTablePortraitComponent]
    )

    mockTabletComponentInstance()

    expect(mockTabletComponentInstance.mock.results[0].value).toBe(3)
  })

  it('calculateTabletComponentByOrientation table landscape', () => {
    const mockDesktopComponent = jest.fn(() => 0)
    const mockMobilePortraitComponent = jest.fn(() => 1)
    const mockMobileLandscapeComponent = jest.fn(() => 2)
    const mockTablePortraitComponent = jest.fn(() => 3)
    const mockTableLandscapeComponent = jest.fn(() => 4)

    const mockTabletComponentInstance = calculateTabletComponentByOrientation(
      mockDesktopComponent,
      [mockMobilePortraitComponent, mockMobileLandscapeComponent],
      [mockTablePortraitComponent, mockTableLandscapeComponent]
    )

    const wrapper = shallow(mockTabletComponentInstance())

    expect(wrapper.instance()).toBeInstanceOf(MobileDetectorHOC)
  })
})

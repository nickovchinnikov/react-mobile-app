import * as dependency from './helpers'
import { mobileDetector } from './mobileDetector'

describe('mobileDetector testing', () => {
  it('Only desktop component and isMobile false', () => {
    dependency.isMobile = jest.fn(() => false)
    dependency.isTablet = jest.fn(() => false)

    const desktopComponentMockFunction = jest.fn(() => 0)

    const desktopComponentInstance = mobileDetector([desktopComponentMockFunction])

    desktopComponentInstance()

    expect(desktopComponentMockFunction.mock.results[0].value).toBe(0)
  })

  it('Only desktop component and isMobile true', () => {
    dependency.isMobile = jest.fn(() => true)
    dependency.isTablet = jest.fn(() => false)

    const desktopComponentMockFunction = jest.fn(() => 0)

    const desktopComponentInstance = mobileDetector([desktopComponentMockFunction])

    desktopComponentInstance()

    expect(desktopComponentMockFunction.mock.results[0].value).toBe(0)
  })

  it('Only desktop component and isTablet true', () => {
    dependency.isMobile = jest.fn(() => false)
    dependency.isTablet = jest.fn(() => true)

    const desktopComponentMockFunction = jest.fn(() => 0)

    const desktopComponentInstance = mobileDetector([desktopComponentMockFunction])

    desktopComponentInstance()

    expect(desktopComponentMockFunction.mock.results[0].value).toBe(0)
  })

  it('Desktop and mobile components and isMobile false', () => {
    dependency.isMobile = jest.fn(() => false)
    dependency.isTablet = jest.fn(() => false)

    const desktopComponentMockFunction = jest.fn(() => 0)
    const mobilePortraitComponentMockFunction = jest.fn(() => 1)
    const mobileLandscapeComponentMockFunction = jest.fn(() => 2)

    const desktopComponentInstance = mobileDetector([
      desktopComponentMockFunction,
      [mobilePortraitComponentMockFunction, mobileLandscapeComponentMockFunction]
    ])

    desktopComponentInstance()

    expect(desktopComponentMockFunction.mock.results[0].value).toBe(0)
  })

  it('Desktop and mobile components and isMobile true', () => {
    dependency.isMobile = () => true
    dependency.isTablet = () => false

    const calculateMobileComponentByOrientation = jest.fn(() => 3)
    dependency.calculateMobileComponentByOrientation = calculateMobileComponentByOrientation

    const desktopComponentMockFunction = jest.fn(() => 0)
    const mobilePortraitComponentMockFunction = jest.fn(() => 1)
    const mobileLandscapeComponentMockFunction = jest.fn(() => 2)

    mobileDetector([
      desktopComponentMockFunction,
      [mobilePortraitComponentMockFunction, mobileLandscapeComponentMockFunction]
    ])

    expect(calculateMobileComponentByOrientation.mock.results[0].value).toBe(3)
  })

  it('Desktop and mobile components and isTablet true', () => {
    dependency.isMobile = () => false
    dependency.isTablet = () => true

    const calculateTabletComponentByOrientation = jest.fn(() => 5)
    dependency.calculateTabletComponentByOrientation = calculateTabletComponentByOrientation

    const desktopComponentMockFunction = jest.fn(() => 0)

    const mobilePortraitComponentMockFunction = jest.fn(() => 1)
    const mobileLandscapeComponentMockFunction = jest.fn(() => 2)

    const tabletPortraitComponentMockFunction = jest.fn(() => 3)
    const tabletLandscapeComponentMockFunction = jest.fn(() => 4)

    mobileDetector([
      desktopComponentMockFunction,
      [mobilePortraitComponentMockFunction, mobileLandscapeComponentMockFunction],
      [tabletPortraitComponentMockFunction, tabletLandscapeComponentMockFunction]
    ])

    expect(calculateTabletComponentByOrientation.mock.results[0].value).toBe(5)
  })
})

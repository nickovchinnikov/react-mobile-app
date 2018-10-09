import { shallow } from 'enzyme'

import { hocWrapper } from './hocWrapper'
import { MobileDetectorHOC } from './MobileDetectorHOC'

describe('Helpers testing', () => {
  it('hocWrapper works', () => {
    const mockMobilePortraitComponent = jest.fn(() => 1)
    const mockMobileLandscapeComponent = jest.fn(() => 2)
    const HocWrapperInstance = hocWrapper([mockMobilePortraitComponent, mockMobileLandscapeComponent])

    expect(HocWrapperInstance).toBeInstanceOf(Function)

    const wrapper = shallow(HocWrapperInstance())

    expect(wrapper.instance()).toBeInstanceOf(MobileDetectorHOC)
  })
})

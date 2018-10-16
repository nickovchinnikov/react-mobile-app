// @flow

const deviceHasTouchEvent = () => {
  try {
    document.createEvent('TouchEvent')
    return true
  } catch (e) {
    return false
  }
}

const isMobileUserAgents = () => {
  const regexp = new RegExp(
    '/Mobi|Mobile|Android|iPhone|iPod|IEMobile|Windows Phone|BlackBerry|webOS|Tablet|iPad|Nexus 7|Nexus 10|KFAPWI/',
    'i'
  )
  return regexp.test(navigator.userAgent)
}

const mobileCheck = () => deviceHasTouchEvent() && isMobileUserAgents()

const isTabletDevice = () => window.innerHeight / window.innerWidth <= 1.6

export const isMobile = (): boolean => mobileCheck() && !isTabletDevice()

export const isTablet = (): boolean => mobileCheck() && isTabletDevice()

export const matchMediaQuery = (): MediaQueryList => window.matchMedia('(orientation: landscape)')

export const isLandscape = (): boolean => matchMediaQuery().matches

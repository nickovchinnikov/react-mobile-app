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

export const matchMediaQuery = (): MediaQueryList => window.matchMedia('(orientation: landscape)')

export const isLandscape = (): boolean => matchMediaQuery().matches

const mobileCheck = () => deviceHasTouchEvent() && isMobileUserAgents()

const isTabletDevice = () => {
  const { innerWidth, innerHeight } = window
  const proportion = isLandscape() ? innerWidth / innerHeight : innerHeight / innerWidth
  return proportion <= 1.6
}

export const isMobile = (): boolean => mobileCheck() && !isTabletDevice()

export const isTablet = (): boolean => mobileCheck() && isTabletDevice()

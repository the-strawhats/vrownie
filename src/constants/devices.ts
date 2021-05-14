const size = {
  mobileS: '320px',
  mobileM: '500px',
  mobileL: '768px',
  tablet: '1024px',
  laptop: '1366px',
  desktop: '1920px'
}

export const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
}

import React from 'react'

const composer = (...functions) => (Component: React.FC) => {
  return props => {
    const composeProps = functions.reduce((enhacerFunction, func) => {
      const functionsProps = func(enhacerFunction)
      return {
        ...enhacerFunction,
        ...functionsProps
      }
    }, {})
    return <Component {...props} {...composeProps} />
  }
}

export default composer

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  FailureViewContainer,
  Image,
  Heading,
  Text,
  RetryBtn,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <FailureViewContainer>
            <Image
              src={
                theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure view"
            />
            <Heading theme={theme}>Oops! Something Went Wrong</Heading>
            <Text theme={theme}>
              We are having some trouble to complete your request. Please try
              again.
            </Text>
            <RetryBtn type="button" onClick={onRetry}>
              Retry
            </RetryBtn>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView

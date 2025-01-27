import {Component} from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  BgContainer,
  NotFoundContainer,
  Image,
  Heading,
  Text,
} from './styledComponents'

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <BgContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {theme} = value
              return (
                <NotFoundContainer theme={theme}>
                  <Image
                    src={
                      theme === 'light'
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    }
                    alt="not found"
                  />
                  <Heading theme={theme}>Page Not Found</Heading>
                  <Text theme={theme}>
                    We are sorry, the page you requested could not be found.
                  </Text>
                </NotFoundContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </BgContainer>
      </>
    )
  }
}

export default NotFound

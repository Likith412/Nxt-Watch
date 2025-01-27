import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  BgContainer,
  GamingContainer,
  GamingHeader,
  GamingLogoContainer,
  GamingText,
  GamingVideosListContainer,
  LoaderContainer,
} from './styledComponents'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const fetchStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    fetchStatus: fetchStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.fetchGamingVideos()
  }

  fetchGamingVideos = async () => {
    this.setState({fetchStatus: fetchStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videosList = data.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        videosList,
        fetchStatus: fetchStatusConstants.success,
      })
    } else {
      this.setState({
        fetchStatus: fetchStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <GamingVideosListContainer>
        {videosList.map(eachItem => (
          <GamingVideoItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </GamingVideosListContainer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.fetchGamingVideos} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderGamingVideosList = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case fetchStatusConstants.success:
        return this.renderSuccessView()
      case fetchStatusConstants.failure:
        return this.renderFailureView()
      case fetchStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

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
                <GamingContainer theme={theme} data-testid="gaming">
                  <GamingHeader theme={theme}>
                    <GamingLogoContainer theme={theme}>
                      <SiYoutubegaming />
                    </GamingLogoContainer>
                    <GamingText theme={theme}>Gaming</GamingText>
                  </GamingHeader>
                  {this.renderGamingVideosList()}
                </GamingContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </BgContainer>
      </>
    )
  }
}

export default Trending

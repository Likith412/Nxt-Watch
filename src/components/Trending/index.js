import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'

import Header from '../Header'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  BgContainer,
  TrendingContainer,
  TrendingHeader,
  TrendingLogoContainer,
  TrendingText,
  TrendingVideosListContainer,
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
    this.fetchTrendingVideos()
  }

  fetchTrendingVideos = async () => {
    this.setState({fetchStatus: fetchStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
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
      <TrendingVideosListContainer>
        {videosList.map(eachItem => (
          <VideoItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </TrendingVideosListContainer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.fetchTrendingVideos} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrendingVideosList = () => {
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
                <TrendingContainer theme={theme} data-testid="trending">
                  <TrendingHeader theme={theme}>
                    <TrendingLogoContainer theme={theme}>
                      <FaFire />
                    </TrendingLogoContainer>
                    <TrendingText theme={theme}>Trending</TrendingText>
                  </TrendingHeader>
                  {this.renderTrendingVideosList()}
                </TrendingContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </BgContainer>
      </>
    )
  }
}

export default Trending

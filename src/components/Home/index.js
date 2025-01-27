import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoCloseSharp, IoSearch} from 'react-icons/io5'

import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoCardItem from '../VideoCardItem'
import FailureView from '../FailureView'

import {
  BgContainer,
  HomeContainer,
  Banner,
  BannerBody,
  WebsiteLogo,
  BannerText,
  GetItNowBtn,
  BannerCloseBtn,
  SearchContainer,
  SearchInput,
  SearchBtn,
  VideosListContainer,
  LoaderContainer,
  NoResultsContainer,
  NoResultsImg,
  NoResultsHeading,
  NoResultsText,
  RetryBtn,
} from './styledComponents'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const fetchStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    isBannerClosed: false,
    searchInput: '',
    videosList: [],
    fetchStatus: fetchStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({fetchStatus: fetchStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  closeBanner = () => {
    this.setState({
      isBannerClosed: true,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSearch = () => {
    this.fetchVideos()
  }

  renderBanner = () => (
    <Banner data-testid="banner">
      <BannerBody>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
        <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
      </BannerBody>
      <BannerCloseBtn
        type="button"
        onClick={this.closeBanner}
        data-testid="close"
      >
        <IoCloseSharp />
      </BannerCloseBtn>
    </Banner>
  )

  renderNoResultsView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <NoResultsContainer>
            <NoResultsImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoResultsHeading theme={theme}>
              No Search results found
            </NoResultsHeading>
            <NoResultsText theme={theme}>
              Try Different key words or remove search filter.
            </NoResultsText>
            <RetryBtn type="button" onClick={this.fetchVideos}>
              Retry
            </RetryBtn>
          </NoResultsContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoResultsView()
    }
    return (
      <VideosListContainer>
        {videosList.map(eachItem => (
          <VideoCardItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </VideosListContainer>
    )
  }

  renderFailureView = () => <FailureView onRetry={this.fetchVideos} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosList = () => {
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
    const {isBannerClosed, searchInput} = this.state
    return (
      <>
        <Header />
        <BgContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {theme} = value
              return (
                <HomeContainer theme={theme} data-testid="home">
                  {!isBannerClosed && this.renderBanner()}
                  <SearchContainer theme={theme}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      theme={theme}
                    />
                    <SearchBtn
                      type="button"
                      theme={theme}
                      data-testid="searchButton"
                      onClick={this.onSearch}
                    >
                      <IoSearch />
                    </SearchBtn>
                  </SearchContainer>
                  {this.renderVideosList()}
                </HomeContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </BgContainer>
      </>
    )
  }
}

export default Home

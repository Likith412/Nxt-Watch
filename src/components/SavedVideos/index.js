import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideoItem from '../VideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  BgContainer,
  SavedVideosContainer,
  SavedVideosHeader,
  SavedVideosLogoContainer,
  SavedVideosText,
  SavedVideosListContainer,
  NoVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosText,
} from './styledComponents'

class SavedVideos extends Component {
  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosHeading theme={theme}>
              No Saved videos found
            </NoVideosHeading>
            <NoVideosText theme={theme}>
              You can save your videos while watching them
            </NoVideosText>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSavedVideosList = videosList => (
    <SavedVideosListContainer>
      {videosList.map(eachItem => (
        <VideoItem key={eachItem.id} videoDetails={eachItem} />
      ))}
    </SavedVideosListContainer>
  )

  render() {
    return (
      <>
        <Header />
        <BgContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {theme, savedVideosList} = value
              return (
                <SavedVideosContainer theme={theme} data-testid="savedVideos">
                  <SavedVideosHeader theme={theme}>
                    <SavedVideosLogoContainer theme={theme}>
                      <MdPlaylistAdd />
                    </SavedVideosLogoContainer>
                    <SavedVideosText theme={theme}>
                      Saved Videos
                    </SavedVideosText>
                  </SavedVideosHeader>
                  {savedVideosList.length === 0
                    ? this.renderNoVideosView()
                    : this.renderSavedVideosList(savedVideosList)}
                </SavedVideosContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </BgContainer>
      </>
    )
  }
}

export default SavedVideos

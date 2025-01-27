import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideosListItem,
  CustomLink,
  ThumbnailImg,
  VideoDetailsContainer,
  VideoTitle,
  VideoInfoText,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <VideosListItem>
            <CustomLink to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoDetailsContainer>
                <VideoTitle theme={theme}>{title}</VideoTitle>
                <VideoInfoText theme={theme}>
                  {viewCount} Watching Worldwide
                </VideoInfoText>
              </VideoDetailsContainer>
            </CustomLink>
          </VideosListItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem

import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideosListItem,
  CustomLink,
  ThumbnailImg,
  ChannelLogoAndVideoDetailsContainer,
  ChannelLogo,
  VideoDetailsContainer,
  VideoTitle,
  ChannelNameAndVideoAnalyticsContainer,
  VideoInfoText,
  VideoAnalyticsContainer,
  DotItem,
  XSDotItem,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <VideosListItem>
            <CustomLink to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ChannelLogoAndVideoDetailsContainer>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <VideoDetailsContainer>
                  <VideoTitle theme={theme}>{title}</VideoTitle>
                  <ChannelNameAndVideoAnalyticsContainer>
                    <VideoInfoText theme={theme}>{channel.name}</VideoInfoText>
                    <XSDotItem theme={theme} />
                    <VideoAnalyticsContainer>
                      <VideoInfoText theme={theme}>{viewCount}</VideoInfoText>
                      <DotItem theme={theme} />
                      <VideoInfoText theme={theme}>
                        {formatDistanceToNow(new Date(publishedAt))}
                      </VideoInfoText>
                    </VideoAnalyticsContainer>
                  </ChannelNameAndVideoAnalyticsContainer>
                </VideoDetailsContainer>
              </ChannelLogoAndVideoDetailsContainer>
            </CustomLink>
          </VideosListItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem

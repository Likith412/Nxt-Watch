import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const VideosListItem = styled.li`
  list-style-type: none;
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 576px) {
    width: 50%;
    padding: 10px;
  }

  @media (min-width: 992px) {
    width: 33.3%;
  }
`

export const CustomLink = styled(Link)`
  text-decoration: none;
`

export const ThumbnailImg = styled.img`
  width: 100%;
`

export const ChannelLogoAndVideoDetailsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 40px;
`

export const VideoDetailsContainer = styled.div`
  margin-left: 10px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.theme === 'light' ? '#313131' : '#f4f4f4')};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
`

export const ChannelNameAndVideoAnalyticsContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 576px) {
    flex-direction: column;
  }
`

export const VideoInfoText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.theme === 'light' ? '#606060' : '#7e858e')};
  font-size: 12px;
`

export const VideoAnalyticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 576px) {
    margin-top: 5px;
  }
`

export const DotItem = styled(BsDot)`
  color: #606060;
`

export const XSDotItem = styled(DotItem)`
  @media (min-width: 576px) {
    display: none;
  }
`

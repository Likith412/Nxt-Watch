import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const VideosListItem = styled.li`
  list-style-type: none;
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 576px) {
    padding: 30px;
    margin: 0;
  }
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;

  @media (min-width: 576px) {
    width: 60%;
    max-width: 450px;
  }
`

export const ChannelLogoAndVideoDetailsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (min-width: 576px) {
    padding: 10px 15px;
  }
`

export const ChannelLogo = styled.img`
  width: 40px;
  @media (min-width: 576px) {
    display: none;
  }
`

export const VideoDetailsContainer = styled.div`
  margin-left: 10px;

  @media (min-width: 576px) {
    margin-left: 0;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.theme === 'light' ? '#313131' : '#f4f4f4')};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;

  @media (min-width: 992px) {
    font-size: 18px;
  }
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

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const VideoAnalyticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 576px) {
    margin-top: 5px;
  }

  @media (min-width: 768px) {
    margin-top: 10px;
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

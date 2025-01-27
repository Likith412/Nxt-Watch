import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideosListItem = styled.li`
  list-style-type: none;
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;

  @media (min-width: 576px) {
    width: 33.3%;
  }

  @media (min-width: 992px) {
    width: 25%;
  }
`

export const CustomLink = styled(Link)`
  text-decoration: none;
`

export const ThumbnailImg = styled.img`
  width: 100%;
  margin-bottom: 5px;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.theme === 'light' ? '#313131' : '#f4f4f4')};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 5px;

  @media (min-width: 992px) {
    font-size: 16px;
  }
`

export const VideoInfoText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.theme === 'light' ? '#606060' : '#7e858e')};
  font-size: 12px;
  line-height: 1.5;

  @media (min-width: 992px) {
    font-size: 14px;
  }
`

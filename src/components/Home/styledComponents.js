import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`

export const HomeContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#181818'};
  display: flex;
  flex-direction: column;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;

  @media (min-width: 768px) {
    padding: 30px;
  }
`

export const BannerBody = styled.div`
  width: 70%;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const WebsiteLogo = styled.img`
  width: 130px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 150px;
    margin-bottom: 15px;
  }
`

export const BannerText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: #212121;
  line-height: 1.5;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 35px;
  }
`

export const GetItNowBtn = styled.button`
  width: 120px;
  height: 35px;
  border: 1px solid #212121;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #212121;
`

export const BannerCloseBtn = styled.button`
  align-self: flex-start;
  padding: 0px;
  font-size: 20px;
  color: #212121;
  border-style: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  jusify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 500px;
  margin: 30px;
  border: 1px solid
    ${props => (props.theme === 'light' ? '#cccccc' : '#383838')};
`

export const SearchInput = styled.input`
  flex-grow: 1;
  height: 30px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #7e858e;
  border: none;
  background-color: ${props =>
    props.theme === 'light' ? '#FFFFFF' : '#181818'};
  border-right: 1px solid
    ${props => (props.theme === 'light' ? '#cccccc' : '#383838')};
  outline: none;
  padding: 0 10px;
`

export const SearchBtn = styled.button`
  font-size: 16px;
  color: #7e858e;
  width: 70px;
  border: none;
  border-left: 1px solid
    ${props => (props.theme === 'light' ? '#cccccc' : '#383838')};
  background-color: ${props =>
    props.theme === 'light' ? '#F4F4F4' : '#313131'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`

export const VideosListContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (min-width: 576px) {
    padding: 0 20px;
  }
`

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoResultsContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const NoResultsImg = styled.img`
  width: 85%;
  max-width: 500px;
  margin-bottom: 25px;
`

export const NoResultsHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  color: ${props => (props.theme === 'light' ? '#313131' : '#f4f4f4')};
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`

export const NoResultsText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.theme === 'light' ? '#475569' : '#616e7c')};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const RetryBtn = styled.button`
  width: 80px;
  height: 40px;
  background-color: #4f46e5;
  border-style: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

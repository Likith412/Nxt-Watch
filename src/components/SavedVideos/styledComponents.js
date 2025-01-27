import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`

export const SavedVideosContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#0F0F0F'};
  display: flex;
  flex-direction: column;
`

export const SavedVideosHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'light' ? '#F1F1F1' : '#181818'};

  @media (min-width: 768px) {
    padding: 30px;
  }
`

export const SavedVideosLogoContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  font-size: 20px;
  color: #ff0000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'light' ? '#e2e8f0' : '#0F0F0F'};
  margin-right: 15px;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
`

export const SavedVideosText = styled.h1`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  color: ${props => (props.theme === 'light' ? '#212121' : '#ffffff')};

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

export const SavedVideosListContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
`

export const NoVideosContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const NoVideosImg = styled.img`
  width: 85%;
  max-width: 500px;
  margin-bottom: 25px;
`

export const NoVideosHeading = styled.h1`
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

export const NoVideosText = styled.p`
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

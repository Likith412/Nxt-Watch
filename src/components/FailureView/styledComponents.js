import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const Image = styled.img`
  width: 85%;
  max-width: 500px;
  margin-bottom: 25px;
`

export const Heading = styled.h1`
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

export const Text = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => (props.theme === 'light' ? '#475569' : '#616e7c')};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
  max-width: 400px;
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

import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props =>
    props.theme === 'light' ? '#FFFFFF' : '#212121'};
`

export const Card = styled.div`
  padding: 40px 30px;
  box-shadow: 0 6px 20px 0
    ${props => (props.theme === 'light' ? '#cccccc' : '#212121')};
  width: 90%;
  max-width: 450px;
  border-style: none;
  border-radius: 10px;
  background-color: ${props =>
    props.theme === 'light' ? '#FFFFFF' : '#0F0F0F'};

  @media (min-width: 768px) {
    padding: 50px 40px;
  }
`

export const LogoContainer = styled.div`
  text-align: center;
`

export const Logo = styled.img`
  width: 130px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 150px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.theme === 'light' ? '#64748b' : '#f1f5f9')};
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 1px solid
    ${props => (props.theme === 'light' ? '#cbd5e1' : '#383838')};
  border-radius: 5px;
  outline: none;
  margin-top: 8px;
  margin-bottom: 20px;
  padding: 0px 10px;
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.theme === 'light' ? '#616e7c' : '#909090')};
  font-weight: 400;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`

export const Checkbox = styled.input`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 15px;
    height: 15px;
    margin-right: 8px;
  }
`

export const CheckboxLabel = styled(Label)`
  color: ${props => (props.theme === 'light' ? '#000000' : '#FFFFFF')};
  font-weight: 400;
`

export const Button = styled.button`
  background-color: #3b82f6;
  border-style: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  height: 40px;
  cursor: pointer;
  margin-bottom: 5px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
  font-weight: 400;
`

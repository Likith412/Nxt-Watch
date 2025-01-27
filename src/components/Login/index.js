import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  BgContainer,
  Card,
  LogoContainer,
  Logo,
  Form,
  Label,
  Input,
  CheckboxContainer,
  Checkbox,
  CheckboxLabel,
  Button,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  onChangeUsername = event => {
    this.setState({
      usernameInput: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onLoginSuccess = jwtToken => {
    this.setState({
      showErrorMsg: false,
      errorMsg: '',
    })
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({
      showErrorMsg: true,
      errorMsg,
    })
  }

  onLogin = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const credentials = {
      username: usernameInput,
      password: passwordInput,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {usernameInput, passwordInput, showPassword} = this.state
    const {errorMsg, showErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value
          return (
            <BgContainer theme={theme}>
              <Card theme={theme}>
                <LogoContainer>
                  <Logo
                    src={
                      theme === 'light'
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt="website logo"
                  />
                </LogoContainer>
                <Form onSubmit={this.onLogin}>
                  <Label htmlFor="username" theme={theme}>
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    id="username"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={usernameInput}
                    theme={theme}
                  />
                  <Label htmlFor="password" theme={theme}>
                    PASSWORD
                  </Label>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={passwordInput}
                    theme={theme}
                  />
                  <CheckboxContainer>
                    <Checkbox
                      type="checkbox"
                      id="showpassword"
                      onChange={this.onChangeShowPassword}
                      checked={showPassword}
                    />
                    <CheckboxLabel htmlFor="showpassword" theme={theme}>
                      Show Password
                    </CheckboxLabel>
                  </CheckboxContainer>
                  <Button type="submit">Login</Button>
                </Form>
                {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </Card>
            </BgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login

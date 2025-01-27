import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {IoMdMoon, IoMdSunny} from 'react-icons/io'
import {IoMenu, IoCloseSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {MdHome, MdPlaylistAdd} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'

import NavigationLinkItem from '../NavigationLinkItem'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navbar,
  Nav,
  WebsiteLogo,
  MobileNavItemsList,
  MobileNavItem,
  MobileNavItemBtn,
  DesktopNavItemsList,
  DesktopNavItem,
  DesktopThemeBtn,
  ProfileImg,
  DesktopLogoutBtn,
  MobilePopupContentBody,
  ClosePopupBtn,
  MobilePopupLinksList,
  LogoutPopupCard,
  LogoutPopupText,
  LogoutPopupBtnsContainer,
  LogoutConfirmBtn,
  LogoutCancelBtn,
} from './styledComponents'

import './index.css'

const tabsList = [
  {id: 'home', path: '/', icon: MdHome, text: 'Home'},
  {id: 'trending', path: '/trending', icon: FaFire, text: 'Trending'},
  {id: 'gaming', path: '/gaming', icon: SiYoutubegaming, text: 'Gaming'},
  {
    id: 'savedVideos',
    path: '/saved-videos',
    icon: MdPlaylistAdd,
    text: 'Saved Videos',
  },
]

class Header extends Component {
  state = {
    activeTabId: '',
  }

  componentDidMount() {
    const {match} = this.props
    const {path} = match
    this.changeActiveTabId(path)
  }

  changeActiveTabId = path => {
    const activeTabObj = tabsList.find(eachtab => eachtab.path === path)
    this.setState({
      activeTabId: activeTabObj === undefined ? '' : activeTabObj.id,
    })
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  renderNavPopup = theme => {
    const {activeTabId} = this.state
    return (
      <Popup
        modal
        trigger={
          <MobileNavItemBtn type="button" theme={theme}>
            <IoMenu />
          </MobileNavItemBtn>
        }
        className="nav-popup"
      >
        {close => (
          <MobilePopupContentBody theme={theme}>
            <ClosePopupBtn type="button" onClick={close} theme={theme}>
              <IoCloseSharp />
            </ClosePopupBtn>
            <MobilePopupLinksList>
              {tabsList.map(eachItem => {
                const {id, path, icon, text} = eachItem
                return (
                  <NavigationLinkItem
                    key={id}
                    path={path}
                    icon={icon}
                    text={text}
                    isActive={activeTabId === id}
                    theme={theme}
                  />
                )
              })}
            </MobilePopupLinksList>
          </MobilePopupContentBody>
        )}
      </Popup>
    )
  }

  renderLogoutPopupCard = close => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value
        return (
          <LogoutPopupCard theme={theme}>
            <LogoutPopupText theme={theme}>
              Are you sure, you want to logout?
            </LogoutPopupText>
            <LogoutPopupBtnsContainer>
              <LogoutCancelBtn type="button" onClick={close}>
                Cancel
              </LogoutCancelBtn>
              <LogoutConfirmBtn type="button" onClick={this.onClickLogout}>
                Confirm
              </LogoutConfirmBtn>
            </LogoutPopupBtnsContainer>
          </LogoutPopupCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderMobileLogoutPopup = theme => (
    <Popup
      modal
      trigger={
        <MobileNavItemBtn type="button" theme={theme}>
          <FiLogOut />
        </MobileNavItemBtn>
      }
      className="logout-popup"
    >
      {close => this.renderLogoutPopupCard(close)}
    </Popup>
  )

  renderDesktopLogoutPopup = () => (
    <Popup
      modal
      trigger={<DesktopLogoutBtn type="button">Logout</DesktopLogoutBtn>}
      className="logout-popup"
    >
      {close => this.renderLogoutPopupCard(close)}
    </Popup>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme, changeTheme} = value
          return (
            <Navbar theme={theme}>
              <Nav>
                <Link to="/">
                  <WebsiteLogo
                    src={
                      theme === 'light'
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <MobileNavItemsList>
                  <MobileNavItem>
                    <MobileNavItemBtn
                      type="button"
                      onClick={changeTheme}
                      theme={theme}
                      data-testid="theme"
                    >
                      {theme === 'light' ? <IoMdMoon /> : <IoMdSunny />}
                    </MobileNavItemBtn>
                  </MobileNavItem>
                  <MobileNavItem>{this.renderNavPopup(theme)}</MobileNavItem>
                  <MobileNavItem>
                    {this.renderMobileLogoutPopup(theme)}
                  </MobileNavItem>
                </MobileNavItemsList>
                <DesktopNavItemsList>
                  <DesktopNavItem>
                    <DesktopThemeBtn
                      type="button"
                      onClick={changeTheme}
                      theme={theme}
                    >
                      {theme === 'light' ? <IoMdMoon /> : <IoMdSunny />}
                    </DesktopThemeBtn>
                  </DesktopNavItem>
                  <DesktopNavItem>
                    <ProfileImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </DesktopNavItem>
                  <DesktopNavItem>
                    {this.renderDesktopLogoutPopup()}
                  </DesktopNavItem>
                </DesktopNavItemsList>
              </Nav>
            </Navbar>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)

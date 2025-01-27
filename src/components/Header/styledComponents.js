import styled from 'styled-components'

export const Navbar = styled.nav`
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'light' ? '#FFFFFF' : '#212121'};
`

export const Nav = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const WebsiteLogo = styled.img`
  width: 100px;

  @media (min-width: 768px) {
    width: 130px;
  }
`

export const MobileNavItemsList = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

export const MobileNavItem = styled.li`
  list-style-type: none;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const MobileNavItemBtn = styled.button`
  padding: 0px;
  font-size: 25px;
  color: ${props => (props.theme === 'light' ? '#212121' : '#FFFFFF')};
  border-style: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  jusify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`

export const DesktopNavItemsList = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
  }
`

export const DesktopNavItem = styled(MobileNavItem)`
  margin-left: 25px;
`

export const DesktopThemeBtn = styled(MobileNavItemBtn)`
  font-size: 30px;
`

export const ProfileImg = styled.img`
  width: 30px;
`

export const DesktopLogoutBtn = styled.button`
  width: 80px;
  height: 30px;
  border: 1px solid #3b82f6;
  border-radius: 5px;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: #3b82f6;
  cursor: pointer;
  outline: none;
`

export const MobilePopupContentBody = styled.div`
  background-color: ${props =>
    props.theme === 'light' ? '#FFFFFF' : '#212121'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

export const ClosePopupBtn = styled(MobileNavItemBtn)`
  align-self: flex-end;
  margin: 20px;
`

export const MobilePopupLinksList = styled.ul`
  flex-grow: 1;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const LogoutPopupCard = styled.div`
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#181818'};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
`

export const LogoutPopupText = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.theme === 'light' ? '#313131' : '#f4f4f4')};
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`

export const LogoutPopupBtnsContainer = styled.div`
  text-align: center;
`

export const LogoutCancelBtn = styled.button`
  width: 80px;
  height: 30px;
  border: 1px solid #94a3b8;
  border-radius: 2px;
  background-color: transparent;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: #7e858e;
  cursor: pointer;
  outline: none;
  margin: 10px;

  @media (min-width: 768px) {
    width: 90px;
    height: 35px;
    font-size: 16px;
  }
`

export const LogoutConfirmBtn = styled(LogoutCancelBtn)`
  border-style: none;
  background-color: #3b82f6;
  color: #f9f9f9;
`

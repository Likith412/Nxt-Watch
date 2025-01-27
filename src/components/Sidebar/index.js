import { Component } from "react";
import { withRouter } from "react-router-dom";

import { MdHome, MdPlaylistAdd } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";

import NavigationLinkItem from "../NavigationLinkItem";
import NxtWatchContext from "../../context/NxtWatchContext";

import {
  SidebarContainer,
  SidebarLinksListContainer,
  SidebarContactUs,
  ContactUsHeading,
  ContactUsSocialsContainer,
  SocialLogo,
  ContactUsText,
} from "./styledComponents";

const tabsList = [
  { id: "home", path: "/", icon: MdHome, text: "Home" },
  { id: "trending", path: "/trending", icon: FaFire, text: "Trending" },
  { id: "gaming", path: "/gaming", icon: SiYoutubegaming, text: "Gaming" },
  {
    id: "savedVideos",
    path: "/saved-videos",
    icon: MdPlaylistAdd,
    text: "Saved Videos",
  },
];

class Sidebar extends Component {
  state = {
    activeTabId: "",
  };

  componentDidMount() {
    const { match } = this.props;
    const { path } = match;
    this.changeActiveTabId(path);
  }

  changeActiveTabId = (path) => {
    const activeTabObj = tabsList.find((eachtab) => eachtab.path === path);
    this.setState({
      activeTabId: activeTabObj === undefined ? "" : activeTabObj.id,
    });
  };

  render() {
    const { activeTabId } = this.state;
    return (
      <NxtWatchContext.Consumer>
        {(value) => {
          const { theme } = value;
          return (
            <SidebarContainer theme={theme}>
              <SidebarLinksListContainer>
                {tabsList.map((eachItem) => {
                  const { id, path, icon, text } = eachItem;
                  return (
                    <NavigationLinkItem
                      key={id}
                      path={path}
                      icon={icon}
                      text={text}
                      isActive={activeTabId === id}
                      theme={theme}
                    />
                  );
                })}
              </SidebarLinksListContainer>
              <SidebarContactUs>
                <ContactUsHeading theme={theme}>CONTACT US</ContactUsHeading>
                <ContactUsSocialsContainer>
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactUsSocialsContainer>
                <ContactUsText theme={theme}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsText>
              </SidebarContactUs>
            </SidebarContainer>
          );
        }}
      </NxtWatchContext.Consumer>
    );
  }
}

export default withRouter(Sidebar);

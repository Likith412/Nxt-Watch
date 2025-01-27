import styled from "styled-components";

export const SidebarContainer = styled.div`
  flex-shrink: 0;
  @media (max-width: 767px) {
    display: none;
  }
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0px;
  background-color: ${(props) =>
    props.theme === "light" ? "#FFFFFF" : "#212121"};
`;

export const SidebarLinksListContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

export const SidebarContactUs = styled.div`
  padding: 0px 20px;
`;

export const ContactUsHeading = styled.p`
  font-family: "Roboto";
  font-weight: 600;
  color: ${(props) => (props.theme === "light" ? "#606060" : "#cccccc")};
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ContactUsSocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const SocialLogo = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export const ContactUsText = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#606060" : "#cccccc")};
  font-size: 15px;
  line-height: 1.5;
`;

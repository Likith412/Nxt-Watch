import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinksListItem = styled.li`
  list-style-type: none;
  background-color: ${(props) => {
    if (props.$isActive) {
      return props.theme === "light" ? "#F1F5F9" : "#383838";
    }
    return "transparent";
  }};
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const LinkIconAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
`;

export const LinkIconContainer = styled.div`
  font-size: 20px;
  color: ${(props) => {
    if (props.$isActive) {
      return "#ff0000";
    }
    return props.theme === "light" ? "#606060" : "#909090";
  }};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const LinkText = styled.p`
  font-family: "Roboto";
  font-weight: ${(props) => (props.$isActive ? 500 : 400)};
  color: ${(props) => {
    if (props.theme === "light") {
      return props.$isActive ? "#000000" : "#606060";
    }
    return props.$isActive ? "#FFFFFF" : "#cccccc";
  }};
  font-size: 14px;
`;

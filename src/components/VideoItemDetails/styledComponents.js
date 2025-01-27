import styled from "styled-components";
import ReactPlayer from "react-player";
import { BsDot } from "react-icons/bs";

export const BgContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: row;
`;

export const VideoItemDetailsContainer = styled.div`
  padding: 20px 0;
  flex-grow: 1;
  overflow-y: auto;
  background-color: ${(props) =>
    props.theme === "light" ? "#f9f9f9" : "#0F0F0F"};
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    padding: 30px;
  }
`;

export const ReactPlayerContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 20px;
`;

export const CustomReactPlayer = styled(ReactPlayer)`
  height: 100% !important;
  width: 100% !important;
`;

export const VideoContent = styled.div`
  padding: 10px;

  @media (min-width: 576px) {
    padding: 0;
  }
`;

export const VideoTitle = styled.p`
  font-family: "Roboto";
  font-weight: 500;
  color: ${(props) => (props.theme === "light" ? "#313131" : "#f4f4f4")};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;

  @media (min-width: 992px) {
    font-size: 18px;
  }
`;

export const VideoAnalyticsAndUserReactionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const VideoAnalyticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const VideoInfoText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  color: ${(props) => (props.theme === "light" ? "#606060" : "#7e858e")};
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const DotItem = styled(BsDot)`
  color: #606060;
`;

export const VideoUserReactionsContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InteractionsItem = styled.li`
  list-style-type: none;
  margin-left: 20px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InteractionsItemButton = styled.button`
  padding: 0;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => (props.$isActive ? "#2563eb" : "#64748b")};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InteractionsItemIconContainer = styled.div`
  font-size: 12px;
  color: ${(props) => (props.$isActive ? "#2563eb" : "#64748b")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 5px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SeperatorLine = styled.hr`
  border: none;
  border-top: 1px solid
    ${(props) => (props.theme === "light" ? "#cbd5e1" : "#7e858e")};
  margin: 20px 0;
`;

export const ChannelLogoAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ChannelLogo = styled.img`
  width: 40px;

  @media (min-width: 768px) {
    width: 50px;
  }
`;

export const ChannelDetailsContainer = styled.div`
  margin-left: 15px;
`;

export const ChannelName = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  color: ${(props) => (props.theme === "light" ? "#000000" : "#ffffff")};
  font-size: 12px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const ChannelSubCount = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  color: ${(props) => (props.theme === "light" ? "#64748b" : "#7e858e")};
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const VideoDescription = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  color: ${(props) => (props.theme === "light" ? "#313131" : "#f4f4f4")};
  font-size: 12px;
  line-height: 1.5;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-left: 65px;
  }

  @media (min-width: 992px) {
    font-size: 14px;
  }
`;

export const LoaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

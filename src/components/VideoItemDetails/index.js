import { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";

import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";

import Header from "../Header";
import Sidebar from "../Sidebar";
import FailureView from "../FailureView";

import NxtWatchContext from "../../context/NxtWatchContext";

import {
  BgContainer,
  VideoItemDetailsContainer,
  ReactPlayerContainer,
  CustomReactPlayer,
  VideoContent,
  VideoTitle,
  VideoAnalyticsContainer,
  VideoInfoText,
  VideoAnalyticsAndUserReactionsContainer,
  VideoUserReactionsContainer,
  InteractionsItem,
  InteractionsItemButton,
  InteractionsItemIconContainer,
  SeperatorLine,
  ChannelLogoAndDetailsContainer,
  ChannelLogo,
  ChannelDetailsContainer,
  ChannelName,
  ChannelSubCount,
  VideoDescription,
  LoaderContainer,
  DotItem,
} from "./styledComponents";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const fetchStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class VideoItemDetails extends Component {
  state = {
    fetchStatus: fetchStatusConstants.initial,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  };

  componentDidMount() {
    this.fetchVideoDetails();
  }

  fetchVideoDetails = async () => {
    this.setState({ fetchStatus: fetchStatusConstants.inProgress });

    const jwtToken = Cookies.get("jwt_token");
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const url = `https://apis.ccbp.in/videos/${id}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      const videoDetails = data.video_details;
      const formattedVideoDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        thumbnailUrl: videoDetails.thumbnail_url,
        videoUrl: videoDetails.video_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      };

      this.setState({
        fetchStatus: fetchStatusConstants.success,
        videoDetails: formattedVideoDetails,
      });
    } else {
      this.setState({
        fetchStatus: fetchStatusConstants.failure,
      });
    }
  };

  onClickLike = () => {
    this.setState((prevState) => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }));
  };

  onClickDislike = () => {
    this.setState((prevState) => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }));
  };

  onClickSave = (onSaveVideo, onUnsaveVideo, isSaved) => {
    const { videoDetails } = this.state;
    if (isSaved) {
      onUnsaveVideo(videoDetails.id);
    } else {
      onSaveVideo(videoDetails);
    }
  };

  renderVideoUserInteractions = () => {
    const { isLiked, isDisliked, videoDetails } = this.state;
    return (
      <NxtWatchContext.Consumer>
        {(value) => {
          const { savedVideosList, onSaveVideo, onUnsaveVideo } = value;
          const videoObj = savedVideosList.find(
            (eachItem) => eachItem.id === videoDetails.id
          );
          const isSaved = videoObj !== undefined;
          return (
            <VideoUserReactionsContainer>
              <InteractionsItem>
                <InteractionsItemIconContainer $isActive={isLiked}>
                  <AiOutlineLike />
                </InteractionsItemIconContainer>
                <InteractionsItemButton
                  type="button"
                  onClick={this.onClickLike}
                  $isActive={isLiked}
                >
                  Like
                </InteractionsItemButton>
              </InteractionsItem>

              <InteractionsItem>
                <InteractionsItemIconContainer $isActive={isDisliked}>
                  <AiOutlineDislike />
                </InteractionsItemIconContainer>
                <InteractionsItemButton
                  type="button"
                  onClick={this.onClickDislike}
                  $isActive={isDisliked}
                >
                  Dislike
                </InteractionsItemButton>
              </InteractionsItem>
              <InteractionsItem>
                <InteractionsItemIconContainer $isActive={isSaved}>
                  <MdPlaylistAdd />
                </InteractionsItemIconContainer>
                <InteractionsItemButton
                  type="button"
                  onClick={() => {
                    this.onClickSave(onSaveVideo, onUnsaveVideo, isSaved);
                  }}
                  $isActive={isSaved}
                >
                  {isSaved ? "Saved" : "Save"}
                </InteractionsItemButton>
              </InteractionsItem>
            </VideoUserReactionsContainer>
          );
        }}
      </NxtWatchContext.Consumer>
    );
  };

  renderSuccessView = () => {
    const { videoDetails } = this.state;
    const { title, videoUrl, channel, viewCount, publishedAt, description } =
      videoDetails;
    return (
      <NxtWatchContext.Consumer>
        {(value) => {
          const { theme } = value;
          return (
            <>
              <ReactPlayerContainer>
                <CustomReactPlayer url={videoUrl} controls />
              </ReactPlayerContainer>
              <VideoContent>
                <VideoTitle theme={theme}>{title}</VideoTitle>
                <VideoAnalyticsAndUserReactionsContainer>
                  <VideoAnalyticsContainer>
                    <VideoInfoText theme={theme}>{viewCount}</VideoInfoText>
                    <DotItem theme={theme} />
                    <VideoInfoText theme={theme}>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </VideoInfoText>
                  </VideoAnalyticsContainer>
                  {this.renderVideoUserInteractions()}
                </VideoAnalyticsAndUserReactionsContainer>
                <SeperatorLine theme={theme} />
                <ChannelLogoAndDetailsContainer>
                  <ChannelLogo
                    src={channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <ChannelDetailsContainer>
                    <ChannelName theme={theme}>{channel.name}</ChannelName>
                    <ChannelSubCount theme={theme}>
                      {channel.subscriberCount}
                    </ChannelSubCount>
                  </ChannelDetailsContainer>
                </ChannelLogoAndDetailsContainer>
                <VideoDescription theme={theme}>{description}</VideoDescription>
              </VideoContent>
            </>
          );
        }}
      </NxtWatchContext.Consumer>
    );
  };

  renderFailureView = () => <FailureView onRetry={this.fetchVideoDetails} />;

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  );

  renderVideoDetails = () => {
    const { fetchStatus } = this.state;
    switch (fetchStatus) {
      case fetchStatusConstants.success:
        return this.renderSuccessView();
      case fetchStatusConstants.failure:
        return this.renderFailureView();
      case fetchStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <Header />
        <BgContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {(value) => {
              const { theme } = value;
              return (
                <VideoItemDetailsContainer
                  theme={theme}
                  data-testid="videoItemDetails"
                >
                  {this.renderVideoDetails()}
                </VideoItemDetailsContainer>
              );
            }}
          </NxtWatchContext.Consumer>
        </BgContainer>
      </>
    );
  }
}

export default VideoItemDetails;

import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NxtWatchContext from "./context/NxtWatchContext";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Gaming from "./components/Gaming";
import SavedVideos from "./components/SavedVideos";
import Login from "./components/Login";
import VideoItemDetails from "./components/VideoItemDetails";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  state = { theme: "light", savedVideosList: [] };

  changeTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };

  onSaveVideo = (videoObj) => {
    this.setState((prevState) => ({
      savedVideosList: [...prevState.savedVideosList, videoObj],
    }));
  };

  onUnsaveVideo = (id) => {
    this.setState((prevState) => ({
      savedVideosList: prevState.savedVideosList.filter(
        (eachVideo) => eachVideo.id !== id
      ),
    }));
  };

  render() {
    const { theme, savedVideosList } = this.state;
    return (
      <NxtWatchContext.Provider
        value={{
          theme,
          changeTheme: this.changeTheme,
          savedVideosList,
          onSaveVideo: this.onSaveVideo,
          onUnsaveVideo: this.onUnsaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    );
  }
}

export default App;

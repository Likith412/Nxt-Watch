import React from "react";

const NxtWatchContext = React.createContext({
  theme: "light",
  changeTheme: () => {},
  savedVideosList: [],
  onSaveVideo: () => {},
  onUnsaveVideo: () => {},
});

export default NxtWatchContext;

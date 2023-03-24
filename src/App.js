import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="p-3">
        <Header />
        <MainContainer />
      </div>
    </Provider>
  );
};

export default App;

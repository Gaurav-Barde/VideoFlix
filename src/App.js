import React from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <MainContainer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch/:videoId",
        element: <WatchPage />,
      },
      {
        path: "results/:searchQuery",
        element: <SearchResults />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <div className="p-3">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
};

export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedListPage from "../pages/FeedListPage/FeedListPage";
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <LoginPage />} />
          <Route path="signup" element={ <SignUpPage />} />
          <Route path="feed" element={ <FeedListPage />} />
          <Route path="postDetails" element={ <PostDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
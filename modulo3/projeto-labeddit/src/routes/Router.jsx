import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import FeedListPage from "../pages/FeedListPage/FeedListPage";
import PostDetailsPage from "../pages/PostDetailsPage/PostDetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={ <LoginPage />} />
          <Route path="signup" element={ <SignUpPage />} />
          <Route path="posts" element={ <FeedListPage />} />
          <Route path="posts/:id" element={ <PostDetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default Router;
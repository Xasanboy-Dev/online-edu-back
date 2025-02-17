import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ChatUser from "./components/navbar/ChatUser";
import TeachersCard from "./components/TeachersCard";
import BuyAdmin from "./pages/BuyAdmin";
import WorkInfo from "./pages/WorkerInfo"
import Chat from "./pages/Chat";
import RegistartionStudent from "./pages/RegistartionStudent";
import RegistartionWorker from "./pages/RegisterPupil";
import { currentUser } from "./useContext/default";
import Login from "./pages/Login";
import Salary from "./pages/Salary";
import Home from "./pages/Home";
import { getUserByToken } from "./TypeScript/Auth";
import Profile from "./pages/Profile";
import Videos from "./pages/Videos";
import ProfileWorker from "./pages/ProfileWorker";
import MainPage from "./pages/MainPage";
import AddStudent from "./pages/DataGrid";
import Post from "./Post/Post";
import Comment from "./Post/Comment";
import UploadPage from "./Post/UploadPage"
import SearchingSystem from "./components/navbar/Search";
import SettingsPage from "./components/settings";
import ClickedPage from "./Post/ClickedPost";
import Qarz from "./pages/Qarzdorlar"

const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("allowed?");
  const [user, setUser] = useState<any>();
  // useEffect(() => {
  //   if (token) {
  //     const result = getUserByToken(token);
  //     result
  //       .then((res) => {
  //         if (res) {
  //           setUser(res);
  //         } else {
  //           navigate("/login");
  //         }
  //       })
  //       .catch((err) => {
  //         navigate("/login");
  //       });
  //   }
  // }, [token]);
  return (
    <div className="">
      <currentUser.Provider value={user}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistartionStudent />} />
          <Route path="/oylik" element={<Salary />} />
          <Route path="/buyAdmin" element={<BuyAdmin />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/videos" >
            <Route index element={<Videos />} />
            <Route path="/videos/" element={<Videos />} />
            <Route path="/videos/video" element={<ClickedPage />} />
          </Route>
          <Route path="/comment" element={<Comment />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiler" element={<ProfileWorker />} />
          <Route path="/search" element={<SearchingSystem />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/admin" element={<MainPage />} />
          <Route path="/qarz" element={<Qarz />} />
          <Route path="/work" element={<WorkInfo />} />
        </Routes>
      </currentUser.Provider>
    </div>
  );
};

export default App;

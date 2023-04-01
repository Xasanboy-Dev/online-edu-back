import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ChatUser from "./components/navbar/ChatUser";
import TeachersCard from "./components/TeachersCard";
import BuyAdmin from "./pages/BuyAdmin";
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

const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("allowed?");
  const [user, setUser] = useState<any>();
  useEffect(() => {
    if (token) {
      const result = getUserByToken(token);
      result
        .then((res) => {
          if (res) {
            setUser(res);
          } else {
            navigate("/login");
          }
        })
        .catch((err) => {
          navigate("/login");
        });
    }
  }, [token]);
  return (
    <div className="">
      <currentUser.Provider value={user}>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistartionStudent />} />
          <Route path="/oylik" element={<Salary />} />
          <Route path="/buyAdmin" element={<BuyAdmin />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/buyAdmin" element={<BuyAdmin />} />
        </Routes>
      </currentUser.Provider>
     <Videos/>
    </div>
  );
};

export default App;

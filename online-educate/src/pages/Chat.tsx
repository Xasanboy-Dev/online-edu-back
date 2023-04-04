import React, { useState } from "react";
import ChatUser from "../components/navbar/ChatUser";
import { BiMenu, BiArrowBack } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Input from "../Chat/Input";
import Chatting from "../Chat/Chatting";
const Chat = () => {

  let user: {
    name: string,
    lastname: string,
    phoneNumber: string
  } = {
    name: "Xasanboy",
    lastname: "Abdurasulov",
    phoneNumber: "+998991788473"
  }

  let users: { name: string, lastname: string, phoneNumber: string }
  const token = localStorage.getItem("allowed?");
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }
  const [openModal, setOpenModal] = useState(false);
  const handlerChange = (e: any) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };
  return (
    <div className="w-full h-screen bg-gradient">
      <div className="h-full overflow-none w-full bg-black/20 scrollbar-hide ">
        {openModal ? (
          <div className="w-[70%] bg-black/80 h-screen fixed text-white z-50">
            <i onClick={() => setOpenModal(false)} className="text-2xl bi bi-x-circle"></i>
            <div className="flex w-full justify-between">
              <img
                src="public\pngwing.com.png"
                className=" w-[110px] bg-cover mt-2"
                alt=""
              />
            </div>
            <div className="w-full p-4 border-b-2 border-white/50">
              <h1 className="text-xl font-semibold flex items-center gap-4">
                {user.name}
              </h1>
              <p className="text-sm">{user.phoneNumber}</p>
            </div>
            <div className="w-full p-2 h-full flex flex-wrap">

            </div>
          </div>
        ) : (
          <>
          </>
        )}
        <form className="flex  p-5 justify-between font-semibold items-center pl-2 px-2 py-4 border-b-2 border-white/60">
          <div className="flex text-white text-xl">
            <h1 className="pr-4 text-md">
              <BiArrowBack onClick={() => navigate(-1)} />
            </h1>
            <button
              onClick={(e) => handlerChange(e)}
              className={`flex text-white text-2xl`}
            >
              <BiMenu />
            </button>
          </div>
          <p className="text-2xl font-semibold text-white">Chat</p>
          <button className="text-white text-xl">
            <IoIosSearch />
          </button>
        </form>
        <ChatUser chattingUserId={1} />
        <div className="w-full relative flex">
          <div className="overflow-auto max-h-[1000px] sm:w-2/5 max-sm:w-full py-2 px-2 sm:border-r-2 sm:border-white/60">
            <ChatUser chattingUserId={1} />
          </div>
          <div className="max-sm:hidden w-3/5 h-full fixed bg-gradient right-0">
            <div className=" ">
              <div>
                <Chatting />
              </div>
              <div
                className="flex bg-white  w-full ml-[10px]   mr-[100%]"
                style={{ marginTop: innerHeight - 220 + "px" }}
              >
                <Input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

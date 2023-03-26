import React, { useState } from "react";
import { BiMenu, BiArrowBack } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Input from "../Chat/Input";
import Chatting from "./../Chat/Chatting";
import ChatUser from "../components/navbar/ChatUser";

const Chat = () => {
  const token = localStorage.getItem("allowed?");
  const navigate = useNavigate();
  if (!token) {
    window.location.href = "/login";
    return <div></div>;
  }
  const [openModal, setOpenModal] = useState(false);
  const handlerChange = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };
  return (
    <div className="w-full h-screen bg-gradient">
      <div className="h-full overflow-none w-full bg-black/20 scrollbar-hide ">
        {openModal ? (
          <div className="w-[50%] bg-black/80 h-screen fixed text-white z-50">
            <div className=" flex border border-white rounded ">
              <i
                className="text-3xl bi bi-x"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <div className="flex w-full justify-between">
              <img
                src="public\pngwing.com.png"
                className=" w-[110px] bg-cover mt-2"
                alt=""
              />
            </div>
            <div className="w-full p-4 border-b-2 border-white/50">
              <h1 className="text-xl font-semibold flex items-center gap-4">
                Anvar
              </h1>
              <p className="text-sm">+998991234567</p>
            </div>
            <div className="w-full p-2 h-full flex flex-wrap">Saved</div>
          </div>
        ) : (
          <></>
        )}
        <form className="flex  p-5 justify-between font-semibold items-center pl-2 px-2 py-4 border-b-2 border-white/60">
          <div className="flex text-white text-xl">
            <button onClick={() => navigate(-1)} className="pr-4 text-md">
              <BiArrowBack />
            </button>
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
        <div className="w-full relative flex">
          <div className="overflow-auto max-h-[1000px] sm:w-2/5 max-sm:w-full py-2 px-2 sm:border-r-2 sm:border-white/60">
            <div className="flex">
              <ChatUser />
            </div>
            <div className={"flex text-5xl px-[15px] w-full mt-[120%]"}>
              <i className="text-white w-full mx-auto flex  bi bi-plus-circle " />
            </div>
          </div>
          <div className=" max-sm:hidden w-3/5 h-full fixed bg-gradient right-0">
            <div className="max-h-[85%] h-[120%] border border-white">
              <Chatting />
            </div>
            <div className=" flex bg-white  w-full mt-1  mr-[100%]">
              <Input />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

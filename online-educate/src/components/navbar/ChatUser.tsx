import React, { useContext } from "react";
import userInfo from "../../mock/UserData";
import { currentUser } from "../../useContext/default";

const ChatUser = (chattingUserId: number) => {
  const user = useContext(currentUser);
  let chatsID = user?.connectedChats;
  if(chatsID)
  return (
    <div className="w-full flex justify-between items-center text-white border-white/50 border-b-2 pb-2">
      {userInfo.map((item) => {
        return (
          <>
            <div className="w-full flex items-center text-white/80">
              <img
                src="public\photo-1501196354995-cbb51c65aaea.avif"
                alt=""
                className="rounded-full h-12 m-2"
              />
              <div className="text-sm">
                <h1 className="text-white/80">{item.Name}</h1>
                <p className="text-xs text-white/40">{item.Desc}</p>
              </div>
            </div>
            <p className="text-white/80 text-xs self-start pt-4">
              {item.online}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default ChatUser;

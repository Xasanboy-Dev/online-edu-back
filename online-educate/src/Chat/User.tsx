import React from "react";
import { useContext } from "react";
import { chattingUser, currentUser } from "../useContext/default";

export default function MessaginUsers() {
  const user = useContext(currentUser);
  const chstting = useContext(chattingUser);
  return <div>Hello World</div>;
}

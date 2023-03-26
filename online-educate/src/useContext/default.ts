import { createContext } from "react";
export const HostContext = createContext("localhost");
export let currentUser = createContext<{
  id: number;
  name: string;
  lastname: string;
  phoneNumber: number;
  role: string;
  lastMessage: string | null;
  lastMessageID: string | number;
  messages: number[];
  connectedCourses: number[];
  connectedChats: number[];
}>({
  id: 0,
  name: "",
  lastname: "",
  phoneNumber: 0,
  role: "",
  lastMessage: null,
  lastMessageID: "",
  messages: [],
  connectedCourses: [],
  connectedChats: [],
});

export let chattingUser = createContext<{
  id: number;
  name: string;
  lastname: string;
  phoneNumber: number;
  role: string;
  lastMessage: string | null;
  lastMessageID: string | number;
  messages: number[];
  connectedCourses: number[];
  connectedChats: number[];
}>({
  id: 0,
  name: "",
  lastname: "",
  phoneNumber: 0,
  role: "",
  lastMessage: null,
  lastMessageID: "",
  messages: [],
  connectedCourses: [],
  connectedChats: [1,2,3],
});

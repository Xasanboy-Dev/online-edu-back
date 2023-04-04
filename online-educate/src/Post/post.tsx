import React, { useContext, useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Textarea } from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import Comment from "./Comment"
import { sendComment } from "../TypeScript/posts";
import { currentUser } from "../useContext/default";
export default function Post({ photo, video, USER, type }: {
    photo: {
        id: number;
        ownerId: number;
        url: string;
        comments: number[];
        likes: number[];
        dislikes: number[];
        title: string;
        type: string
    },
    video: {

        id: number,
        ownerId: number,
        url: string,
        likes: number[],
        comments: number[],
        dislikes: number[],
        title: string,
        type: string
    },
    USER:
    {
        id: number, name: string, lastname: string, imageURL: string
    },
    type: string
}) {
    const token = localStorage.getItem("allowed?")
    let [text, setText] = useState("")
    const user = useContext(currentUser)
    const navigate = useNavigate()
    const [click, setClick] = useState<Boolean>(false)
    const [service, setService] = useState<Boolean>(false)
    const [clickPhoto, setPhoto] = useState<Boolean>(false)
    if (photo && type == "photo") {
        return (
            <div className="mb-5 text-white  pb-5" style={{ height: innerHeight - 50 }}>
                <div className="mt-[15px] pb-[25px] border  border-white rounded w-[95%] mx-auto">
                    <div className="border mx-5 px-5 my-2 rounded  justify-between flex items-center  border-white">
                        <div className="mx-5">
                            <img className="h-[75px] my-2 w-[75px] rounded-full " src={`${USER.imageURL}`} />
                            <h1 onClick={() => navigate(`/${USER.id}`)} className="text-xl" >{USER.name}</h1>
                        </div>
                        <h1 className="text-3xl">{photo.title}</h1>
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" onClick={() => setService(!service)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <i className="bi bi-three-dots-vertical"></i>
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div><Toaster /></div>
                            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className={`py-1 ${service ? "" : "hidden"}`} role="none">
                                    {video.ownerId == USER.id && <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0"><i className="bi bi-gear"></i> Settings</a>}
                                    {video.ownerId == USER.id && <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><i className="bi bi-trash-fill"></i> Delete Post</a>}
                                    <CopyToClipboard text={video.url}>
                                        <button type="submit"
                                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                            role="menuitem" tabIndex={-1} id="menu-item-3"
                                            onClick={() => {
                                                toast.success("Copied succesfully!")
                                            }}> <i className="bi bi-clipboard-check"></i> Copy URL</button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex" style={{ height: innerHeight - 250 }}>
                        <div style={{ display: click ? "none" : "flex" }} className="flex w-full mx-auto">
                            {photo.url && <img src={photo.url} className="rounded  w-[98%]  border border-white flex mx-auto my-5" />}
                        </div>
                        <div style={{ display: click ? "flex" : "none" }} className=" w-full">
                            <Comment />
                        </div>
                    </div>
                    <div className={`${click ? "hidden" : "flex"} items-center`}>
                        <div className="flex border mt-2  border-t-white border-b-[0px] rounded items-center justify-between w-full">
                            <div className="mx-5 w-full my-5 flex ">
                                <button>
                                    <i
                                        className="mx-5 bi bi-hand-thumbs-up border
                                     border-white text-white  p-2 rounded"> {video.likes.length}</i>
                                </button>
                                <button>
                                    <i className="bi bi-hand-thumbs-down border border-white
                                     text-white p-2 rounded"> {video.dislikes.length}</i>
                                </button>
                                <button>
                                    <i className="mx-5 bi bi-chat-dots border border-white
                                      text-white p-2 rounded "> {video.comments.length} </i>
                                </button>
                            </div>
                            <div className=" w-full mx-auto">
                                <Button color="brown" onClick={() => setClick(click ? false : true)}>Read the comments</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: click == false ? "none" : "block" }} className=" my-2 w-[80%] mx-auto">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Textarea className="w-[80%]" onChange={(e) => setText(e.target.value)}
                                value={text}
                                color="brown" size="lg" label="You can write anything in here!" />
                            <Button onClick={async () => {
                                let res = await sendComment(text, token!, user.id)
                                setText("")
                                if (res) {
                                    return toast.success("Your comment added succesfully!")
                                } else {
                                    return toast.error("You have some probelems!")
                                }
                            }
                            } type="submit" color="brown">Send comment</Button>
                        </form>
                        <Button onClick={() => setClick(click == false ? true : false)} className="ml-[90%] justify-end flex" color="brown">Back to Post</Button>
                    </div>
                </div>
            </div >
        )
    } else if (video && type == "video") {
        return (
            <div className="my-5 text-white" style={{ height: innerHeight - 50 }}>
                <div className="mt-[15px] pb-[25px] border  border-white rounded w-[95%] mx-auto">
                    <div className="border mx-5 px-5 my-2 rounded  justify-between flex items-center  border-white">
                        <div className=" mx-5">
                            <img className="h-[75px] w-[75px] rounded-full " src={`${USER.imageURL}`} />
                            <h1 onClick={() => navigate(`/${USER.id}`)} className="text-xl" >{USER.name}</h1>
                        </div>
                        <h1 className="text-3xl">{video.title}</h1>
                        <div className="relative inline-block text-left">
                            <div>
                                <button type="button" onClick={() => setService(!service)} className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    <i className="bi bi-three-dots-vertical"></i>
                                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div><Toaster /></div>
                            <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className={`py-1 ${service ? "" : "hidden"}`} role="none">
                                    {video.ownerId == USER.id && <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0"><i className="bi bi-gear"></i> Settings</a>}
                                    {video.ownerId == USER.id && <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1"><i className="bi bi-trash-fill"></i> Delete Post</a>}
                                    <CopyToClipboard text={video.url}>
                                        <button type="submit"
                                            className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                            role="menuitem" tabIndex={-1} id="menu-item-3"
                                            onClick={() => {
                                                toast.success("Copied succesfully!")
                                            }}> <i className="bi bi-clipboard-check"></i> Copy URL</button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex" style={{ height: innerHeight - 350 }}>
                        <div style={{ display: click ? "none" : "flex" }} className="flex w-full mx-auto">
                            {video.url !== "" && <video autoPlay controls className="  flex mx-auto  rounded" src={`${video.url}`} />}
                        </div>
                        <div style={{ display: click ? "flex" : "none" }} className=" w-full">
                            <Comment />
                        </div>
                    </div>
                    <div style={{ display: click ? "none" : "flex" }} className="items-center">
                        <div className="flex border mt-2  border-t-white border-b-[0px] rounded items-center justify-between w-full">
                            <div className="mx-5 w-full my-5 flex ">
                                <button>
                                    <i className="mx-5 bi bi-hand-thumbs-up border border-white 
                                     p-2 rounded"> {video.likes?.length}</i>
                                </button>
                                <button>
                                    <i className="bi bi-hand-thumbs-down border border-white 
                                     p-2 rounded"> {video.dislikes?.length}</i>
                                </button>
                                <button>
                                    <i className="mx-5 bi bi-chat-dots border border-white  p-2 rounded "> {video.comments.length} </i>
                                </button>
                            </div>
                            <div className=" w-full mx-auto">
                                <Button color="brown" onClick={() => setClick(click ? false : true)}>Read the comments</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: click == false ? "none" : "block" }} className=" my-2 w-[80%] mx-auto">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <Textarea className="w-[80%]" onChange={(e) => setText(e.target.value)}
                                value={text}
                                color="brown" size="lg" label="You can write anything in here!" />
                            <Button onClick={async () => {
                                let res = await sendComment(text, token!, user.id)
                                setText("")
                                if (res) {
                                    return toast.success("Your comment added succesfully!")
                                } else {
                                    return toast.error("You have some probelems!")
                                }
                            }
                            } type="submit" color="brown">Send comment</Button>
                        </form>
                        <Button onClick={() => setClick(click == false ? true : false)} className="ml-[90%] justify-end flex" color="brown">Back to Post</Button>
                    </div>
                </div>
            </div >
        )
    } else {
        return <div></div>
    }
}
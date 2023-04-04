import React, { useState } from "react";
import Comment from "./Comment";
export default function ClickedPage() {
    let [click, setClick] = useState(false)
    let video = {
        title: "Hello World",
        ovnerID: 1,
        ovnerName: "Xasanboy",
        comments: [1, 2, 3, 4, 5],
        likes: [1, 2, 3, 4, 5],
        dislikes: [1, 2, 3, 4, 5],
        createdDate: "2020-03-04",
        videoURL: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    }
    return (
        <div style={{ height: innerHeight }} className="bg-black overflow-y-scroll">
            <div style={{ display: click ? "none" : "flex" }} className="w-full flex justify-center py-[45px]">
                <video src={`${video.videoURL}`} autoPlay controls />
            </div>
            <div style={{ display: click ? "none" : "flex" }} className="text-white flex w-full justify-center text-2xl gap-5">
                <button title="Likes">
                    <i className="bi bi-hand-thumbs-up-fill">{video.likes.length}</i>
                </button>
                <button title="Dislikes">
                    <i className="bi bi-hand-thumbs-down-fill">{video.dislikes.length}</i>
                </button>
                <button onClick={() => setClick(!click)} title="Comments" >
                    <i className="bi bi-chat-dots-fill">{video.comments.length}</i>
                </button>
            </div>
            <div className="" style={{ display: click ? "flex" : "none" }}>
                <Comment />
            </div>
        </div>
    )
}
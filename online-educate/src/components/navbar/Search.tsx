import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
export default function SearchingSystem() {
    const [text, setText] = useState("")
    let users: USER[] = [
        {
            course: "Backend",
            imageURL: "data:image/png;base64,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",
            lastname: "Hello",
            name: "World",
            phoneNumber: "651651",
            posts: [1, 2, 3, 4]
        },
        {
            course: "Backend",
            imageURL: "data:image/png;base64,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",
            lastname: "Hello",
            name: "World",
            phoneNumber: "651651",
            posts: [1, 2, 3, 4]
        }
    ]
    interface USER {
        name: string,
        lastname: string,
        phoneNumber: string,
        posts: number[],
        imageURL: string,
        course: "Fronted" | "Backend" | "SMM"
    }
    return (
        <div style={{ height: innerHeight }} className=" overflow-y-scroll bg-black text-white">
            <div className="p-5 w-[95%] flex mx-auto">
                <input id="text" type="text" style={{ height: 25 }}
                    value={text}
                    placeholder="Search someoneelse..."
                    className="text-2xl px-10 py-6 rounded h-[545px] w-full text-black "
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div style={{ display: text ? "block" : "none" }} className="mx-5 my-5">
                <label className="text-2xl">
                    <span className=" bg-yellow-900 text-black underline-offset-2 underline text-2xl mx-1">{text}</span>
                    so'rovga bilan {users.length} ta foydalanuvchi  toplidi!</label>
                {users.length !== 0 && <ul className="">
                    {users.map(user => {
                        return (
                            <li className="border my-5 rounded cursor-pointer shadow-2xl flex items-center border-white w-full">
                                <img src={`${user.imageURL}`}
                                    alt="Your Image" width={"150px"} className="p-5 rounded-full" />
                                <div className="flex gap-12">
                                    <div>
                                        <h1 className="text-3xl">{user.name} {user.lastname}</h1>
                                        <label className="">Course: {user.course}</label>
                                    </div>
                                    <div className=" text-2xl ">
                                        <label >Number of Posts: {user.posts.length}</label>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                }
            </div>
            {users.length == 0 && text &&
                <div className="w-full  text-yellow-900 text-4xl text-center">
                    Sizning foydalanuvchingiz toplimadi!
                </div>
            }
            <Navbar />
        </div>
    )
}
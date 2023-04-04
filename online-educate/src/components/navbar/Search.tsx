import React, { useState } from "react"
import Navbar from "./Navbar"
export default function SearchingSystem() {
    const [text, setText] = useState("")
    return (
        <div style={{ height: innerHeight }} className="bg-black text-white">
            <div className="p-5 w-[95%] flex mx-auto h-2">
                <label htmlFor="text">
                    You can search anyone in here!
                </label>
                <input id="text" type="text" style={{ height: 25 }}
                    value={text}
                    className="w-full text-black   border border-[#FFC107]"
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <Navbar />
        </div>
    )
}
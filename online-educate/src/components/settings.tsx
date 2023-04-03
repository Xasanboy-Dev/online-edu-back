import React, { useEffect, useState } from "react"
import "./../../public/pngwing.com(2).png"
export default function SettingsPage() {
    let [name, setName] = useState("")
    let [lastname, setLastname] = useState("")
    let [number, setNumber] = useState("")
    let [password, setPassword] = useState("")
    let user = {
        name: "Xasanboy",
        lastname: "Abdurasulov",
        phoneNumber: "+998991788473",
        password: "+991788473",
        teacher: "Jalol Imomadinov",
        course: "Backend",
        courseName: "Backend 147",
    }
    useEffect(() => {
        setName(user.name)
        setLastname(user.lastname)
        setPassword(user.password)
        setNumber(user.phoneNumber)
    }, [])
    return (
        <div className="bg-black" style={{ height: innerHeight }}>
            <div className="w-[35%] mx-auto">
                <img src="./../../public/pngwing.com(2).png"
                    className="border border-white"
                    alt="Logo" />
            </div>
            <div>
                <label htmlFor="name">Your Name: </label>
                <input id="name" type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="lastname">Your Lastname: </label>
                <input id="lastname" type="text" value={lastname}
                    onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Your Password: </label>
                <input id="password" type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="name">Your Phone Number: </label>
                <input id="name" type="number" value={number}
                    onChange={(e) => setNumber(e.target.value)} />
            </div>
        </div>
    )
}
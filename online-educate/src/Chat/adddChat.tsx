import React from "react"
import { useState } from "react"
export default function AddChat() {
    const [type, setType] = useState('')
    const [name, setName] = useState("")
    const [error, setError] = useState<Boolean>(false)
    return (
        <div className="w-full text-center">
            <ul>
                <li className="mt-5 text-2xl">Type of your chat:
                    <select onChange={(e) => setType(e.target.value)} className="border border-dark text-center">
                        <option disabled selected>Select your type of chat!</option>
                        <option>Double</option>
                        <option>Group</option>
                    </select>
                </li>

                {type == "Group" && <li className="mt-5 items-center" style={{ display: type ? "block" : "none" }}>
                    <label className="text-2xl" htmlFor="input">What is your {type}  {name}</label>
                    <input onChange={(e) => setName(e.target.value)}
                        value={name} type={"text"} id="input"
                        className="text-2xl px-2 py-1 border border-dark" />
                    <span style={{ display: error ? "block" : "none" }} className="block text-xl text-red-500">This name is already using</span>
                </li>}
                {type == "Double" &&
                    <li>
                        <div className="container">
                            <h3>KindaCode.com</h3>
                            <select multiple size={5} onChange={(e) => setName(e.target.value)} className="select">
                                <option value="Blue">Blue</option>
                                <option value="Red">Red</option>
                                <option value="Yellow">Yellow</option>
                                <option value="Green">Green</option>
                                <option value="Indiogo">Indigo</option>
                                <option value="Purple">Purple</option>
                                <option value="Lime">Lime</option>
                                <option value="Amber">Amber</option>
                            </select>
                            <br />
                            <div>
                                {/* Display the selected values
                                {colors &&
                                    colors.map((color) => <span className="color">{color}</span>)} */}
                            </div>
                        </div>
                    </li>}
            </ul>

        </div>
    )
}
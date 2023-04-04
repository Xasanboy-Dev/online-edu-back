import React from "react"
import "./../styles/another.css"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

const pupils = [
    {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    },
    {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    },
    {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    },
    {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    },
    {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    },
    {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    },
    {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    }, {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    }, {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    }, {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    }, {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    }, {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    }, {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    }, {
        kurs: "Frontent-f8",
        name: "Bahrom",
        namepupil: 'Bahrom',
        debt: 210,
        phoneNumber: "+998943334455"
    },

]

function UserList() {
    const navigate = useNavigate()
    let qarzdorlar = 0
    return (
        <div style={{ height: innerHeight }} className=" bg-[#5368A5] UserList">
            <div className="flex w-full text-4xl text-white">
                <i onClick={() => navigate(-1)} className="bi bi-arrow-left"></i>
            </div>
            <div className="overflow-y-scroll w-[120%] pl-[550px] ">
                {
                    pupils.map((item, index: number) => {
                        { qarzdorlar += item.debt }
                        return <div onClick={() => alert(index)} className="my-5 cursor-pointer cardline">
                            <div className="itemList">
                                <h2 className="nameTitle">
                                    Kursi
                                </h2>
                                <p className="nameSub">
                                    {item.kurs}
                                </p>
                            </div>
                            <div className="itemList">
                                <h2 className="nameTitle">
                                    O'qituvchi
                                </h2>
                                <p className="nameSub">
                                    {item.name}
                                </p>
                            </div>
                            <div className="itemList">
                                <h2 className="nameTitle">
                                    Ismi
                                </h2>
                                <p className="nameSub">
                                    {item.namepupil}
                                </p>
                            </div>
                            <div className="itemList">
                                <h2 className="nameTitle">
                                    Qarzi
                                </h2>
                                <p className="nameSub">
                                    {item.debt}
                                </p>
                            </div>
                            <div className="itemList">
                                <h2 className="nameTitle">
                                    Telefon:
                                </h2>
                                <p className="nameSub">
                                    {item.phoneNumber}
                                </p>
                            </div>

                        </div>
                    })
                }
            </div>
            <input type="text" className=" flex justify-center text-center" disabled value={qarzdorlar + " .000 so'm"} />
            <div className="w-full mr-[95px]"><Navbar /></div>
        </div>
    )
}

export default UserList
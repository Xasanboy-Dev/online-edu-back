import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./../../public/pngwing.com(2).png"
import { BiArrowBack } from "react-icons/bi"
import Navbar from "./navbar/Navbar"
export default function SettingsPage() {
    let [name, setName] = useState("")
    let [lastname, setLastname] = useState("")
    let [number, setNumber] = useState<number>(0)
    let [password, setPassword] = useState("")
    let [click, setClick] = useState(false)
    let user = {
        name: "Xasanboy",
        lastname: "Abdurasulov",
        phoneNumber: 991788473,
        password: "+991788473",
        teacher: "Jalol Imomadinov",
        course: "Backend",
        courseName: "Backend 147",
        imgURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAACKiorm5uZ/f3/s7OzZ2dlhYWGEhISHh4fh4eHy8vKCgoLHx8f19fV5eXlcXFygoKBISEi+vr6wsLATExMmJiaTk5MbGxtDQ0M0NDRTU1Nzc3PS0tKtra2bm5stLS0iIiJOTk66urpra2u9lQk+AAAFVklEQVR4nO2di1riQAxGGRBQKoiKykXw+v7PuLbdroUWWmj+/Gk35wWc81HnkkkyvR6J7c16OWD9cTyTl/fww4Q9DhDR4jMkfLJHgmH6HTIe2WMBMOmHHOzRiBMtNnm/sGYPSJjt61PYZ84ekiTR/XMo8MwelRy5yWWPjiyHf5e+MsbssUkwnR/Ti3llD68ps93HKb8fllP2GJswuanQS1jt2vrfePrz3OPzbcse7fnsjs4uR5i36qcc9KuNSni6+hqyh16LydVFfimbhXnJ4V0Dv4S56RPHrLFfwv2MLXKMLxG/mC+2SinD+utDNRuDU+tW0C/G3G5nJywYwhtbaZ83ccEQ+mypPC8AwRBu2Vq/LCCCP8sGWyxjChI0E2+MljDDJxubuCNRGBFMBDpw32iMhe/03KPgeRgIOcptRstZsAV7K7DhA1twBBYMYUQ2vCxicQ7szdsn3HDDFYzggiFEVEPsYpjCPSnKHwuL7KiGmGPTPi9UwybB0brcuaEbuqEbuqEbumG4ckM3bMStG7qhG7ohnOvOG/pvKAH3KtgN3dAN/w/Dazd0Qzc8Sa2KAzd0w84b3rihG7qhG3bcEJlbmvFNNVQQDE9MwXsNQ2JCzXCsIhjCmJTurZHTlsHJbdP5RFM4lRcaK0UGZ/etkdOWwclt6/5XKl1xeApOxf5M0ZBUGbxWE2S1I3pVM2Q1QUEUjpbDShPWm2pYyewDNUNa7brWVLOmNVmQ7DFwCl7fM619G6/0SaNiJoZXNTNRMiQW6B02CgTBE4QXkKasiIb4+soYZsAUXeacwix21plqqJXAKoZMQZVdDbcQGNW3JQ+354BGJINb6axw+cS9eur1HuGG7O4mM1z7nZQlvQGfTCPB4/A78aJPUPzOdOjZlDyTxpT0Ihfkg63XQ5dccIstUrDbGm5TjBTs+YLdYSgBasiWS0C2GaL3wUpARk25nVsykP+IRl4TeoAJ2vhIkfeIVjrt4j5TIx8p7rqbffj9ZQgyNNTUG/Mj2vkJUffdhn5CTAaYmU7QKfKhYXJHyALyk42NNtA5pMOK7CBiCbJJ3xafnZPtt2vi5HuAbGK7gRBbgUg0bcGioexsam4m7Unva8ycKnLIhvf5wfwisnFTC3HSQ2RP+lZO93lks4fYndjLkD0j8q8Ni8gGhi2+2S17y2bhVu0QUUEjFxb7dN5QOlRjKkiTIF1eYu99WelUU3uPPEq/A2Fv2yZ9AWXl2ukf8olDxk4XXY8Iox59MhOOGqIKS4w8DoisljVywuh+pkL3s02QlaTvbLkYbF6bhc8UW7Nu4TPt/Cud6OIu/meK7uHC37uhy0iZBaQJ+L4K7HAGviSfO5tOsRNpyjvvpLjdKPjFbDhhqZFWV4yYuf5RcaDR9TLPt+6MM9R4yeqQK73zcKTTaKBIXylDQ689VBGNq2GNF4BPgY4Uf2Fr8erwjIz3P+r0Mqlihcpb3Nrwi1khtgAjrQ1MPTbSW4CJXgfBurxKno2H6JL0y7iT2gLMWAt8NX2JdgQz5gJfzVtjx3t0V4imLJsFchb8Bb6a58sb2Ew/2IOvycdlUYAprjRUnofzHbeaJ3gJ5udtcwZabwJIMq4fBRjYXOCruavnGGm8pYbiukYUQLNbPoKqALJmr3wUp7YAC+sbmHosj20BHvW6yKNZl0UBpnZO8BKsCluAti3w1RzUaLZxha9inBfUfIxDj/w+zvYp91LyAXK7cYom9N2w9bhh+3HD9uOG7ccN248bth83bD9u2H7csP24YfvJG+JfGmGQD+2jmshy2UuZ0nleTJeDPNTRuBs3axnLcZa8+AfDFYLTKKR4FgAAAABJRU5ErkJggg=="
    }
    const navigate = useNavigate()
    useEffect(() => {
        setName(user.name)
        setLastname(user.lastname)
        setPassword(user.password)
        setNumber(user.phoneNumber)
    }, [])
    useEffect(() => {
        if (name !== user.name || lastname !== user.lastname || password !== user.password) {
            setClick(true)
        } else {
            setClick(false)
        }
    }, [name, lastname, number, password])
    return (
        <div className="bg-black text-white" style={{ height: innerHeight }}>
            <div className="w-[35%] mx-auto">
                <img src={`${user.imgURL}`}
                    className="rounded-full py-[20px] mx-auto border border-white"
                    alt="Logo" />
            </div>
            <table className="table-auto  mx-[25%]">
                <thead>
                    <tr className="">
                        <th><label htmlFor="name">Your Name</label></th>
                        <th> <input className="bg-black border px-2 rounded" id="name" type="text" value={name}
                            onChange={(e) => setName(e.target.value)} /> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><label htmlFor="lastname">Your Lastname</label></th>
                        <th> <input className="bg-black border px-2 rounded"
                            id="lastname" type="text" value={lastname}
                            onChange={(e) => setLastname(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th><label htmlFor="number">Your PhoneNumber</label></th>
                        <th><input className="bg-black border px-2 rounded"
                            id="number" type="number"
                            onChange={(e) => setNumber(+e.target.value)}
                            value={number}
                        />
                        </th>
                    </tr>
                    <tr>
                        <th><label htmlFor="password">Your Password</label></th>
                        <th> <input className="bg-black border px-2 rounded"
                            id="password" type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        </th>
                    </tr>
                </tbody>
            </table>
            <div className="my-[45vh] text-xl w-full  flex gap-8 justify-center">
                <button className={`border px-3 py-1 bg-green-${click ? 500 : ""} rounded `}>Save</button>
                <button className={`border px-3 py-1 bg-red-${click ? 500 : ""} rounded `}>Cancel</button>
            </div>
            <Navbar />
        </div>
    )
}
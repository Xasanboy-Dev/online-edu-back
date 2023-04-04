import React, { useEffect, useState } from "react"
import Navbar from "./../components/navbar/Navbar"
import { useNavigate } from "react-router-dom"
import "./../index.css"
export default function UploadPage() {
    const navigate = useNavigate()
    let [file, setFile] = useState<any>()
    let [url, setUrl] = useState("")
    let [video, setVideo] = useState(false)
    let [publick, setPublic] = useState(false)
    let [photo, setPhoto] = useState(false)
    let [title, setTitle] = useState("")
    let [desc, setDesc] = useState("")
    useEffect(() => {
        if (file) {
            let split = file.type.split("/")
            if (split[0] == "video") {
                setVideo(true)
                setPhoto(false)
            } else {
                setVideo(false)
                setPhoto(true)
            }
            let url = URL.createObjectURL(file)
            setUrl(url)
        }
    }, [file])
    function SaveVideo() {

    }
    return (
        <div className=" overflow-y-auto h-screen font-sans  bg-[#191919] border-box">
            <div style={{ display: url ? "none" : "flex" }} className="flex justify-center w-full mx-auto sm:max-w-lg">
                <div className="flex flex-col items-center justify-center h-auto my-20 bg-white sm:w-[180%] sm:rounded-lg sm:shadow-xl">
                    <div style={{ display: file ? "none" : "block" }}>
                        <div className="mt-[65px] mb-10 text-center">
                            <h2 className="text-4xl font-semibold mb-2">Upload your files</h2>
                            <p className="text-xs text-gray-500">File should be of format .mp4, .png</p>
                        </div>
                        <form className="relative w-4/5 h-32 max-w-xs mb-10  bg-gray-100 rounded-lg shadow-inner">
                            <input onChange={(e) => setFile(e.target.files ? e.target.files[0] : "")} type="file" id="file-upload"
                                accept="image/*, video/*" className="hidden" />
                            <label htmlFor="file-upload" className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                                <p className="z-10 text-xs font-light text-center text-gray-500">Select your image or video!</p>
                                <svg className="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                </svg>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{ display: url ? video ? "flex" : "none" : "none" }} className="text-white py-5">
                <div className="w-full flex justify-center">
                    <video width={"650px"} height={"550px"} src={`${url}`} autoPlay controls />
                    <i onClick={() => {
                        setFile("")
                        setUrl("")
                    }} className="text-5xl bi bi-x-circle mx-5"></i>
                </div>
            </div>
            <div style={{ display: url ? photo ? "flex" : "none" : "none" }} className="text-white py-5">
                <div className="w-full flex justify-center">
                    <img className="w-[550px]  h-[450px] my-5 mx-[35px]" src={`${url}`} />
                    <i onClick={() => {
                        setFile("")
                        setUrl("")
                    }} className="text-5xl bi bi-x-circle mx-5"></i>
                </div>
            </div>
            <div className="text-white" style={{ display: url ? "flex" : "none" }}>
                <table className=" w-[50%] mx-[30pc] text-2xl table-auto">
                    <thead className="">
                        <tr>
                            <th>
                                <label htmlFor="title">{video ? "Video's" : "Photo's"} title please:</label>
                            </th>
                            <th>
                                <input
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="p-2 rounded text-black" id="title" placeholder={`${video ? "Video" : "Photo"} title`}
                                    value={title}
                                />
                            </th>
                        </tr>
                        <tr> <br /></tr>
                        <tr>
                            <th>
                                <label htmlFor="title">{video ? "Video's" : "Photo's"} description please:</label>
                            </th>
                            <th>
                                <textarea onChange={(e) => setDesc(e.target.value)} className="text-black min-h-[45px] max-h-[75px] p-2 rounded" id="title"
                                    placeholder={`${video ? "Video" : "Photo"} description`}
                                    value={desc} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> <br /></tr>
                        <tr>
                            <th className="cursor-pointer">
                                Type of {video ? "video" : "photo"}
                            </th>
                            <th>
                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                                        <div className="ml-3  font-medium">
                                            <th>Ommaviy</th>
                                        </div>
                                        <div className="relative mx-2">
                                            <input type="checkbox" onChange={(e) => setPublic(e.target.checked)} id="toggleB" className="text-white sr-only" />
                                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                                            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                                        </div>
                                        <div className="ml-3 font-medium">
                                            <th>X`ususiy</th>
                                        </div>
                                    </label>
                                </div>
                            </th>
                        </tr>
                        <tr> <br /></tr>
                    </tbody>
                </table>
            </div>
            <div style={{ display: url ? "flex" : "none" }} className="w-full  flex justify-center">
                <button onClick={() => SaveVideo()} className="rounded my-2 text-white bg-green-800 border border-white px-4 py-1 text-2xl">Save</button>
            </div>
            <Navbar />
        </div >
    )
}
import React from "react"
import { useNavigate } from "react-router-dom";
export default function Comment() {
    let comments: { text: string, createdDate: string, ownerName: string, ownerID: number }[] = [
        {
            text: "hello World",
            createdDate: '2022-01-15T11:02:17Z',
            ownerName: "John",
            ownerID: 1
        },
        {
            text: "hello World",
            createdDate: '2022-01-15T11:02:17Z',
            ownerName: "John",
            ownerID: 1
        },
        {
            text: "hello World",
            createdDate: '2022-01-15T11:02:17Z',
            ownerName: "John",
            ownerID: 1
        },
        {
            text: "hello World,hello World,hello World,hello World",
            createdDate: '2022-01-15T11:02:17Z',
            ownerName: "John",
            ownerID: 1
        },
        {
            text: "hello World",
            createdDate: '2022-01-15T11:02:17Z',
            ownerName: "John",
            ownerID: 1
        },
        {
            text: "hello World",
            createdDate: '2022-01-15T11:02:17Z',
            ownerName: "John",
            ownerID: 1
        },
    ]
    const navigate = useNavigate()
    function convert(date: string) {
        const newDate = new Date(date);
        return newDate.toLocaleDateString()
    }
    return (
        <div className="w-[95%] mx-auto overflow-y-auto">
            {comments.map((comment: { text: string, createdDate: string, ownerName: string }, ind: number) => {
                return (
                    <div className="my-5 rounded p-2 flex items-center  border border-black  mx-auto ">
                        <div className="">
                            <img className="h-[80px] w-[80px]  rounded-full" src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div className="text  px-[5%] mx-5  rounded ">
                            <div className="items-center  flex">
                                <h1 className="text-2xl cursor-pointer mx-5" onClick={() => navigate(`user/${1}`)}>{comment.ownerName}</h1>
                                <h1 className="text-[10px] "> {convert(comment.createdDate)}</h1>
                            </div>
                            <h1 className="text-[15px] my-2 min-w-[20%] max-w-[120%]">
                                {comment.text}
                            </h1>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
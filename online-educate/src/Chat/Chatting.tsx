import React from "react";
export default function Chat({ owner, createdDte, text, id, currentUser }:
  {
    owner: string, createdDte: string, text: string, id: number, currentUser:
    { name: string, lastname: string, id: number }
  }) {
  function convert(date: string) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString()
  }
  return (
    <div className="flex  justify-end mx-5 my-5 text-white">
      <div className="border rounded-t-lg">
        <span className="w-full flex justify-end text-[15px]">{id == currentUser.id ? "You" : owner}</span>
        <p className="text-purple-500">{text}</p>
        <p className="">{convert(createdDte)}</p>
      </div>
    </div>
  );
}

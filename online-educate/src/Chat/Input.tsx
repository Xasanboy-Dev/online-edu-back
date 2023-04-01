import React, { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
export default function Input() {
  const [select, setSelect] = useState<Boolean>(false);
  const [letter, setLetter] = useState("");
  const [file, setFile] = useState<any>(null);
  useEffect(() => {
    if (file) {
      alert("Sizning fileingiz saylandi davom ettiravering....");
    }
  }, [file]);
  return (
    <div className="w-full items-center flex h-[90px]">
      <div>
        <span
          onClick={() => setSelect(true)}
          style={{ display: select ? "none" : "flex" }}
          className="text-3xl p-5"
        >
          <i className="bi bi-emoji-smile" />
        </span>
        <span
          className="bg-white  mb-[100%] px-2"
          style={{ display: select ? "block" : "none" }}
        >
          <i
            onClick={() => setSelect(false)}
            className="bi bi-x flex justify-content-end text-3xl "
          />
          <EmojiPicker onEmojiClick={(e) => setLetter(letter + e.emoji)} />
        </span>
      </div>
      <textarea
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
        className="px-2 py-2 text-[25px] h-[80%] max-h-[100%] min-h-[80%] w-[80%] border border-dark  h-[25%]"
        placeholder="Type something...."
      />
      <div className="send flex items-center">
        <label htmlFor="image">
          <i className="bi bi-card-image  text-3xl p-5"></i>
        </label>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          id="image"
          onChange={(e) => setFile(e.target.files ? e.target.files[0] : "")}
        />
        <button className=" border border-dark mx-2 text-xl px-5 py-2 rounded-[2xl]">
          Yuborish
        </button>
      </div>
    </div>
  );
}

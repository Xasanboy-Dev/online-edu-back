import EmojiPicker, { EmojiStyle } from "emoji-picker-react";
import React from "react";
export default function emoji() {
    return (
        <EmojiPicker onEmojiClick={(e) => console.log(e.getImageUrl(EmojiStyle.NATIVE))} />
    )
}
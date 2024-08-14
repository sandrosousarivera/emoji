import EmojiPicker from "./emojiPicker";
import { useRef } from "react";
import styles from "/Users/sandro/LOCAL/pyoyectos react/emoji-selector/src/components/emoji-picker/emojiPicker.module.scss";

export default function EmojiPickerInput() {
  const refInput = useRef(null);

  return (
    <div>
      <input ref={refInput} />
      <EmojiPicker ref={refInput} />
    </div>
  );
}

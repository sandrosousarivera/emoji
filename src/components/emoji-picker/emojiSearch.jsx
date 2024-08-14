import { useState } from "react";
import styles from "/Users/sandro/LOCAL/pyoyectos react/emoji-selector/src/components/emoji-picker/emojiPicker.module.scss";

export default function EmojiSearch({ onSearch }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    onSearch(e);
  }
  return (
    <input
      className={styles.search}
      type="text"
      onChange={handleChange}
      value={value}
    />
  );
}

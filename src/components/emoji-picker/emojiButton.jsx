import styles from "/Users/sandro/LOCAL/pyoyectos react/emoji-selector/src/components/emoji-picker/emojiPicker.module.scss";

export default function EmojiButton({ emoji, onClick }) {
  function handleClick() {
    onClick(emoji);
  }
  return (
    <button className={styles.emojiButton} onClick={handleClick}>
      {emoji.symbol}
    </button>
  );
}

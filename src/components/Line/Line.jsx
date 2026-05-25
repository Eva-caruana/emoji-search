import "./Line.css";
import { useState } from "react";

const Line = ({ symbol, title }) => {
  const [emojiCopied, setEmojiCopied] = useState(false);

  //function to copy emoji if clicked
  const handleCopy = () => {
    navigator.clipboard.writeText(symbol);
    setEmojiCopied(true);
    // back to click to copy
    setTimeout(() => setEmojiCopied(false), 1500);
  };

  return (
    <article className="emoji-line" onClick={handleCopy}>
      <div className="left-side">
        <div>{symbol}</div>
        <div>{title}</div>
      </div>

      <div className="right-side">
        <p>{emojiCopied ? "Copied !" : "Click to copy !"}</p>
      </div>
    </article>
  );
};

export default Line;

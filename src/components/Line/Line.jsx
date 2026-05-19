import "./Line.css";
import emojis from "../../data/emoji-search.json";
import { FaRegCopy } from "react-icons/fa6";

const Line = ({ symbol, title, emojiName, setEmojiName }) => {
  return (
    <article className="emoji-line">
      <div className="left-side">
        <div>{symbol}</div>
        <div>{title}</div>
      </div>
      <div className="right-side">
        <FaRegCopy />
      </div>
    </article>
  );
};

export default Line;

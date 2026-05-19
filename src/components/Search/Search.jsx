import "./Search.css";
import { useState } from "react";
import emojis from "../../data/emoji-search.json";
import Line from "../Line/Line";

const Search = () => {
  const [emojiName, setEmojiName] = useState("");

  const result = emojis.filter(function (item) {
    if (item.keywords.includes(emojiName)) {
      return item.symbol && item.title;
    } else {
      return false;
    }
  });
  return (
    <section>
      <input
        type="text"
        id="emoji"
        placeholder="what emoji are you looking for ?"
        value={emojiName}
        onChange={(event) => {
          setEmojiName(event.target.value);
        }}
      />

      {result.slice(0, 30).map((element, key) => {
        return (
          <Line
            key={element.title}
            symbol={element.symbol}
            title={element.title}
            emojiName={emojiName}
            setEmojiName={setEmojiName}
          />
        );
      })}
    </section>
  );
};

export default Search;

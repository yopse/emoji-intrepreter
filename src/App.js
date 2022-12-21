import React, { useState } from "react";

var emojiDictionary = {
  "🍨": "Ice-cream",
  "🍦": "Soft-Icecream",
  "📓": "note-book",
  "🥡": "takeout box",
  "✔️": "checked",
  "🚲": "Bicycle",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "sorry we couldn't find it";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Mini Emoji Pedia</h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "10", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

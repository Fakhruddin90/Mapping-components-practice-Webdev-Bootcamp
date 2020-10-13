import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiterm) {
  return (
    <Entry
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      description={emojiterm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

// [x] Take dictionary term (<dt>) and change it to react component name <Entry />
// [x] Create props for the attributes
// [x] Mapping the component to the javascript array emojipedia.js

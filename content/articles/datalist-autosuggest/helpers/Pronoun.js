/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

import { button } from "./Search.js";

const Pronoun = () => {
  const [pronoun, setPronoun] = React.useState("");

  return (
    <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPronoun(e.currentTarget.pronoun.value);
        }}
      >
        <label htmlFor="pronoun" sx={{ marginRight: 1 }}>
          Personal pronoun
        </label>
        <input list="presets" id="pronoun" name="pronoun" />

        <datalist id="presets">
          <option value="they/them" />
          <option value="she/her" />
          <option value="he/him" />
        </datalist>

        <button sx={button}>Submit</button>
      </form>

      <p>Submitted pronoun: {pronoun}</p>
    </main>
  );
};

export default Pronoun;

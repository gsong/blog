import React from "react";

import { space } from "styles";
import { toDateStringWithLocale } from "utils";

const locales = {
  Arabic: "ar",
  Chinese: "zh",
  English: "en",
  French: "fr",
  German: "de",
  Indonesian: "id",
  Japanese: "ja",
  Portugese: "pt",
  Russian: "ru",
  Spanish: "es",
};
const defaultValue = "en";

export const LocaleDate = () => {
  const [display, setDisplay] = React.useState(
    toDateStringWithLocale(new Date(), defaultValue),
  );

  return (
    <>
      <label>
        <select
          onChange={(e) =>
            setDisplay(
              toDateStringWithLocale(new Date(), e.currentTarget.value),
            )
          }
          {...{ defaultValue }}
        >
          {Object.entries(locales).map(([label, value]) => (
            <option {...{ value }} key={value}>
              {label}
            </option>
          ))}
        </select>
        <span css={{ marginLeft: space[2] }}>locale</span>
      </label>{" "}
      displays {display}
    </>
  );
};

export const ISODate = () => (
  <code className="language-text">{new Date().toISOString()}</code>
);

export default LocaleDate;

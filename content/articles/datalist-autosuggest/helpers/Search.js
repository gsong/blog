/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const Search = () => {
  const {
    state,
    context,
    actions: { updateDraft, submit },
  } = useMachine();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <label htmlFor="term" sx={{ marginRight: 1 }}>
          Search term
        </label>
        <input
          id="term"
          name="term"
          list={"recent-terms"}
          value={context.draft}
          onChange={(e) => updateDraft(e.currentTarget.value)}
          sx={{ marginRight: 2 }}
        />
        <datalist id="recent-terms" key={context.draft}>
          {context.sortedRecentTerms.map((term) => (
            <option key={term} value={term} />
          ))}
        </datalist>

        <button disabled={!context.canSubmit} sx={button}>
          Search
        </button>
      </form>

      <p>
        {state === "submitting" ? "Submitting" : "Submitted"} term:{" "}
        {context.term}
      </p>
    </>
  );
};

const useMachine = () => {
  const [{ state, context }, dispatch] = React.useReducer(reducer, initState);

  React.useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=100&swear=0")
      .then((response) => response.json())
      .then((payload) => dispatch({ type: "initialize", payload }));
  }, []);

  React.useEffect(() => {
    if (state === "submitting") {
      setTimeout(() => dispatch({ type: "resolved" }), 2000);
    }
  }, [state]);

  const actions = {
    updateDraft: (payload) => dispatch({ type: "updateDraft", payload }),
    submit: () => dispatch({ type: "submit" }),
  };

  return { state, context, actions };
};

const initState = {
  state: "initial",
  context: {
    draft: "",
    term: "",
    recentTerms: [],
    sortedRecentTerms: [],
    canSubmit: false,
    hasSubmitted: false,
  },
};

const reducer = (data, { type, payload }) => {
  const { state, context } = data;

  switch (state) {
    case "initial": {
      switch (type) {
        case "initialize":
          return {
            state: "editing",
            context: {
              ...context,
              recentTerms: payload,
              sortedRecentTerms: isSafari ? payload : [],
            },
          };
        default:
          return data;
      }
    }
    case "editing":
      switch (type) {
        case "updateDraft":
          return {
            state,
            context: {
              ...context,
              draft: payload,
              sortedRecentTerms: sortRecentTerms(context.recentTerms, payload),
              canSubmit:
                payload.trim() !== "" &&
                trimLower(payload) !== trimLower(context.term),
            },
          };
        case "submit":
          if (context.draft.trim() === "") return data;

          return {
            state: "submitting",
            context: {
              ...context,
              term: context.draft.trim(),
              recentTerms: addRecentTerm(context.recentTerms, context.draft),
              canSubmit: false,
              hasSubmitted: true,
            },
          };
        default:
          return data;
      }
    case "submitting":
      switch (type) {
        case "resolved":
          return {
            state: "editing",
            context,
          };
        default:
          return data;
      }
    default:
      return data;
  }
};

const addRecentTerm = (recentTerms, term) =>
  [term, ...recentTerms]
    .reduce(
      (unique, item) =>
        unique.some((e) => trimLower(e) === trimLower(item))
          ? unique
          : [...unique, item.trim()],
      [],
    )
    .slice(0, 100);

const sortRecentTerms = (recentTerms, term) => {
  const partial = trimLower(term);
  if (partial === "") return isSafari ? recentTerms : [];

  let terms = [...recentTerms];
  let sorted = [];

  sortFilters(partial).forEach((filter) => {
    sorted = [...sorted, ...terms.filter(filter).sort()];
    terms = terms.filter((t) => !sorted.includes(t));
  });

  return sorted;
};

const sortFilters = (partial) => [
  (t) => trimLower(t).startsWith(partial),
  (t) => RegExp(`\\b${partial}`, "i").test(t),
  (t) => RegExp(partial, "i").test(t),
];

const trimLower = (term) => term.trim().toLowerCase();
const isSafari =
  typeof navigator !== "undefined" &&
  navigator.vendor === "Apple Computer, Inc.";

export const button = {
  paddingX: 3,
  paddingY: 1,
  ":disabled": { backgroundColor: "gray.0", cursor: "unset" },
};

export default Search;

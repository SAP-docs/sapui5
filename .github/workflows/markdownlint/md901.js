// @ts-check

"use strict";

const { addErrorDetailIf, filterTokens } = require("markdownlint-rule-helpers");

module.exports = {
  "names": [ "MD901", "heading-increment-no-blockquote" ],
  "description": "Custom version of MD001. Heading levels should only increment by one level at a time, except if in a blockquote",
  "tags": [ "headings", "headers" ],
  "function": function MD901(params, onError) {
    let prevLevel = 0;
    filterTokens(params, "heading_open", function forToken(token) {
      const level = Number.parseInt(token.tag.slice(1), 10);
      if (token.line.match(/^\s*> ?/)) return;
      if (prevLevel && (level > prevLevel)) {
        addErrorDetailIf(onError, token.lineNumber,
          "h" + (prevLevel + 1), "h" + level);
      }
      prevLevel = level;
    });
  }
};

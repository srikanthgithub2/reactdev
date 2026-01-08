import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child22", key: "child1" },
      [
        React.createElement("h2", { key: "h2-1" }, "iam nested h2 tag"),
        React.createElement("h3", { key: "h3-1" }, "iam nested h3 tag"),
      ]
    ),
    React.createElement(
      "div",
      { id: "child2", key: "child2" },
      [
        React.createElement("h2", { key: "h2-2" }, "iam nested h2 tag"),
        React.createElement("h3", { key: "h3-2" }, "iam nested h3 tag"),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

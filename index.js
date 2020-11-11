// import { App } from "./components/App.js";

/* I'm choosing not to use JSX in this project because I don't want to set up the extra compilation step in the build
environment. That being said, if I was working with other developers I believe it would be necessary to do so (JSX
makes the code much more readable). In that case I would either set up a watcher with babel (dynamically compiling
scrips) or just choose and use one of the many toolchains for React available today - the choice between the two options
would depend on the size of the project and its requirements. */

const e = React.createElement;

const computedData = {},
  rawData = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

for (const record of rawData) {
  if (computedData[record.category]) {
    computedData[record.category].push({
      price: record.price,
      stocked: record.stocked,
      name: record.name,
    });
  } else {
    computedData[record.category] = [
      {
        price: record.price,
        stocked: record.stocked,
        name: record.name,
      },
    ];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(e(App, null), document.getElementById("root"));
});

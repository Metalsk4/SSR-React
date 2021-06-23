import path from "path";
import fs from "fs"; //for reading the files
import express from "express";
import React from "react";
import ReactDomServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../src/App";

const PORT = 3001;
const app = express();

const router = express.Router();

// using the build folder generated after running npm run build
app.use("/build", express.static("build"));

// type of files that are allowed
app.use((req, res, next) => {
  if (/\.js|\.css|\.png|\.jpg|\.jpeg|\.svg/.test(req.path)) {
    res.redirect("/build" + req.path);
  } else {
    next();
  }
});

app.get("*", (req, res) => {
  const context = {};
  /*
  ReactDOMServer.renderToString(element)
  Render a React element to its initial HTML. React will return an HTML string. 
  ou can use this method to generate HTML on the server and send the markup down on the initial
  request for faster page loads and to allow search engines to crawl your pages for SEO purposes.
  If you call ReactDOM.hydrate() on a node that already has this server-rendered markup,
  React will preserve it and only attach event handlers, allowing you to have a
  very performant first-load experience.

  reference - https://reactjs.org/docs/react-dom-server.html
  */
  const app = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve("./build/index.html");
  // utf8 to make it readable
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.log("error !");
      return res.status(500).send("Oops", "error!");
    }
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "10d" })
);

app.use(router);

app.listen(PORT, () => {
  console.log("SSR is running at PORT :" + PORT);
});

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

const articlesInfo = {
  "learn-react": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "learn-react-Js": {
    comments: [],
  },
};
//Initialize middleware
//we use to have to install body parser but now it is built in middleware
//function of express. It parses incoming JSOn payload
app.use(express.json({ extended: false }));

//Just a test route for now;
/* app.get("/", (req, res) => res.send("Hello World...!"));
app.post("/", (req, res) => res.send(`Hello ${req.body.name}`));
app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`)); */

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  req.status(200).send(articlesInfo[articleName]);
});

app.get("/", (req, res) => {
  res.send("HELLO");
});
app.listen(PORT, () => console.log(`Server started at Port 8000 ${PORT}`));

const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
let posts = require('./posts');
const methodOverride = require('method-override')
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.use(express.static('public', {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
})
app.get("/", (req, res) => {
  res.render(`index.ejs`, { posts });
})

app.get("/:heading/show", (req, res) => {
  let heading = req.params.heading;
  let post = posts.find((p) => p.heading === heading)
  res.render(`show.ejs`, { post })
});

app.get("/:heading/edit", (req, res) => {
  let heading = req.params.heading;
  let post = posts.find((p) => p.heading === heading)
  res.render(`edit.ejs`, { post })
})
app.patch("/:id", (req, res) => {
  let id = req.params.id;
  let post = posts.find((p) => p.id === id)
  let newHeading = req.body.postheading;
  let newPara = req.body.postpara;
  let newThumbnail = req.body.postthumbnail;
  post.heading = newHeading;
  post.para = newPara;
  post.img = newThumbnail;
  res.redirect("/");
})
app.delete('/:id', (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/");
});
app.get('/new', (req, res) => {
  res.render('new.ejs', { post: {} }); // Pass an empty object as the data
})

app.post("/", (req, res) => {
  let id = uuidv4();
  let { postheading, postthumbnail, postpara } = req.body;
  posts.push({ id, heading: postheading, img: postthumbnail, para: postpara, video: '' });
  res.redirect('/');
})
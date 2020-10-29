const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

router.get("/", (req, res) => {
    Blog.find()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
});

router.get("/:blogId", (req, res) => {
    Blog.findById(req.params.blogId)
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        res.status(500).json(err);
      });
});

router.post("/postBlog", (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        name: req.body.name,
        date: new Date(),
        content: req.body.content,
    });

    blog
      .save()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
});

router.delete("/:blogId", (req, res) => {
    Blog.remove({ _id: req.params.blogId })
      .then((data) => {
          res.status(200).json(data)
      })
      .catch((err) => {
          res.status(500).json(err);
      })
});

module.exports = router;
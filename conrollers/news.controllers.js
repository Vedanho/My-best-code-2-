const New = require("../models/New.model");

module.exports.contollerNew = {
  postNew: (req, res) => {
    New.create({
      head: req.body.head,
      text: req.body.text,
      categorieId: req.body.categorieId,
    }).then((data) => {
      res.json(data);
    });
  },
  deleteNew: (req, res) => {
    New.findByIdAndRemove(req.params.id).then(() => {
      res.json("Новость удалена");
    });
  },
  patchNew: (req, res) => {
    New.findByIdAndUpdate(req.params.id, {
      head: req.body.head,
      text: req.body.text,
    }).then((data) => {
      res.json(data);
    });
  },
  getNewById: (req, res) => {
    New.findById(req.params.id).then((data) => {
      res.json(data);
    });
  },
  getNews: (req, res) => {
    New.find().then((data) => {
      res.json(data);
    });
  },
  getNewsByCategorie: (req, res) => {
    New.find({ categorieId: req.params.id }).then((data) => {
      res.json(data);
    });
  },
};

/**
 * ChaptersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async (req, res) =>{
    Chapters.find().populate('videos')
    .then(result =>{
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    })
  },
  create: async (req, res) =>{
    const data = {
      name: req.body.name,
      course_id: req.body.course_id
    }
    Chapters.create(data)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err =>{
      res.status(500).json(err);
    })
  }

};


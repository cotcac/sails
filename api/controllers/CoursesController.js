/**
 * CoursesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list: async (req, res) =>{
    await Courses.find({})
    .populate('instructor')
    .populate('chapters',{"select":['name']})
    .populate(videos)
    .then(function(data){
      res.status(200).json(data);
    })
    .catch(function(err){
      res.status(500).json(err);
    })
  },
  // single course.
  single: async (req, res) => {
    const id = req.params.id;
    await Courses.findOne(id)
    .populate('instructor')
    .populate('chapters')
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) =>{
      res.status(500).json(err);
    })

  },
  create: async (req, res) => {
    const data = {
      name: req.body.name,
      instructor: req.body.instructor
    }
    await Courses.create(data)
    .then(function(result){
      res.status(201).json(result);
    })
    .catch(function(err){
      res.status(422).json(err);
    })
  }


};


/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list : async (req, res) => {
    await Users.find()
    .then(function(result){
      res.json(result);
    })
    .catch(function(err){
      res.status(500).json(err)
    })
  },
  create: async (req, res) => {

    const data = {
      name: req.body.name,
      role: req.body.role
    }
    await Users.create(data)
    .then(function(result){
      res.status(201).json(result);
    })
    .catch(function(err){
      res.status(422).json({error: err.details});
    })
  }


};


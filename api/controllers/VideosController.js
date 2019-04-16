/**
 * VideosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
   list: async (req, res) =>{
     Videos.find()
     .then((result)=>{
       res.status(200).json(result);
     })
     .catch((err) => {
       res.status(500).json(err);
     })
   },
   create: async (req, res) =>{
     const data = {
       name: req.body.name,
       chapter_id: req.body.chapter_id
     }
     Videos.create(data)
     .then(result=>{
       res.status(201).json(data);
     })
     .catch(err =>{
       res.status(500).json(err);
     })
   }

};


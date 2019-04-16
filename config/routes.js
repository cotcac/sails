/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  // users
  'get /api/users': 'UsersController.list',
  'post /api/users': 'UsersController.create',

  // courses
  'get /api/courses' : 'CoursesController.list',
  'get /api/courses/:id' : 'CoursesController.single',

  'post /api/courses' : 'CoursesController.create',
  // chapter

  'get /api/chapters' : 'ChaptersController.list',

  'post /api/chapters' : 'ChaptersController.create',

  // videos

  'get /api/videos' : 'VideosController.list',

  'post /api/videos' : 'VideosController.create',


};

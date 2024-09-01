const Course = require('../models/Course');

class SiteController {
  // [GET]
  async index(req, res) {
      const courses = await Course.find();
      res.json(courses);
}


  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController;

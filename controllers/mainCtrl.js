var jared = require('../models/jared');

module.exports = {
  getName: function(req, res, next) {
    res.status(200).json(jared.name);
  },
  getLocation: function(req, res, next) {
    res.status(200).json(jared.location);
  },
  getJobs: function (req, res, next) {
    if (!req.query.sort) {
      return res.status(200).json(jared.jobs);
    } else if (req.query.sort === "desc") {
      return res.status(200).json(jared.jobs.sort());
    } else if (req.query.sort === "asc") {
      return res.status(200).json(jared.jobs.sort().reverse());
    } else {
      res.status(200).json(jared.jobs);
    }
  },
  getLastJob: function (req, res, next) {
    var latest = jared.jobs[jared.jobs.length - 1];
    res.status(200).json(latest);
  },
  getHobbies: function (req, res, next) {
    res.status(200).json(jared.hobbies);
  },
  getHobbyType: function (req, res, next) {
    var currentType = [];
    for (var i = 0; i < jared.hobbies.length; i++) {
      if (jared.hobbies[i].type === req.params.type) {
        currentType.push(jared.hobbies[i]);
      }
    }
    res.status(200).json(currentType);
  }
};

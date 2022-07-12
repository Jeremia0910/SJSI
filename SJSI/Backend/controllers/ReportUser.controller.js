"use strict";
const ReportUser = require("../models/ReportUser.model.js");
exports.findAll = function (req, res) {
  ReportUser.findAll(function (err, ReportUser) {
    console.log("controller");
    if (err) res.send(err);

    console.log("res", ReportUser);
    res.send(ReportUser);
  });
};

exports.create = function (req, res) {
  const new_ReportUser = new ReportUser(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    ReportUser.create(new_ReportUser, function (err, ReportUser) {
      if (err) res.send(err);
      res.json({ error: false, message: "ReportUser added successfully!", data: ReportUser });
    });
  }
};

exports.findById = function (req, res) {
  ReportUser.findById(req.params.id, function (err, ReportUser) {
    if (err) res.send(err);
    res.json(ReportUser);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: "Please provide all required field" });
  } else {
    ReportUser.update(req.params.id, new ReportUser(req.body), function (err, ReportUser) {
      if (err) res.send(err);
      res.json({ error: false, message: "ReportUser successfully updated" });
    });
  }
};

exports.delete = function (req, res) {
  ReportUser.delete(req.params.id, function (err, ReportUser) {
    if (err) res.send(err);
    res.json({ error: false, message: "ReportUser successfully deleted" });
  });
};

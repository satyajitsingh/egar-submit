'use strict'

// Npm dependencies
const express = require('express')

// Initialisation
const router = new express.Router()

router.get('/error/404', function (req, res) {
  res.status(404);
  res.render('app/error/404')
})

router.get('/error/401', function (req, res) {
  res.status(401);
  res.render('app/error/401')
})

router.get('/error/500', function (req, res) {
  res.status(500);
  res.render('app/error/500')
})

router.get('/error/503', function (req, res) {
  res.status(503);
  res.render('app/error/503')
})

// Export
module.exports = {
  router
}

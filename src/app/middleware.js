const express = require("express");

const middleware = [express.json(), express.urlencoded({ extended: true })];

module.exports = -middleware;

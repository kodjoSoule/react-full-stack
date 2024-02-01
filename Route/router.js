const express = require("express");
const routes = express.Router();
const postController = require("./../Controller/controller");

//Accueil
routes.get("/", postController.home);
routes.get("/posts", postController.getPost);
routes.post("/insert", postController.postPost);
module.exports = routes;

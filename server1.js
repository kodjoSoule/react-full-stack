require("dotenv").config();
const express = require("express");
const app = express();
const Router = require("./Route/router");
const Post = require("./Model/post");
const connectDB = require("./connectDB");

//connect to mongo db
connectDB();

const newPost = new Post({
  title: "Mon premier post",
  content: "Contenu de mon premier post.",
});

// Sauvegarde du post dans la base de données
/*
newPost
  .save()
  .then(() => {
    console.log("Post enregistré avec succès.");
  })
  .catch((error) => {
    console.error(`Erreur lors de l'enregistrement du post :`, error);
  });

*/
//middleware
const LoggerMiddleware = (req, res, next) => {
  console.log(`Logged  ${req.url} ${req.method} -- ${new Date()}`);
  //pour passer au middleware suivant
  next();
};
// utilisation de la fonction middleware
app.use(LoggerMiddleware);

//routes
app.use("/", Router);
app.listen(process.env.port, () => {
  console.log(`Server running on http://localhost:${process.env.port}`);
});

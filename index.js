// Load required modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For parsing form data

// servce files from "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to index.html
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html")); 
});

// Route to serve ex1 form 
app.get("/views/ex1.html", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "ex1.html"));
});

// Route to serve ex2 
app.get("/views/ex2.html", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "ex2.html"));
});

// Route to serve ex3 
app.get("/views/ex3.html", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "ex3.html"));
});

// Route to ex1
app.post("/submit-form", (request, response) => {
  const { name, email } = request.body;
  response.send(`${name}, thank you for your order. We will keep you posted on delivery status at ${email}.`);
});

// Route to ex2
app.post("/api/countries", (request, response) => {
  const travelInfo = request.body;  // Get travel data from the request

  // get name and number of countries visited
  const { name, countries } = travelInfo;
  const numberOfCountries = countries.length;

  // confirmation message
  response.json({
    message: `Your name is ${name} and you visited ${numberOfCountries} countries. Keep traveling!`
  });
});

// Route to ex3
app.post("/articles", (request, response) => {
  const { title, content } = request.body;

  //  maximum ID and add 1 for the new article ID
  const maxId = articles.length > 0 ? Math.max(...articles.map(article => article.id)) : 0;
  const newArticle = {
    id: maxId + 1,
    title,
    content
  };

  // new article to the list
  articles.push(newArticle);

  // confirmation message
  response.json({
    message: `New article added successfully with the title "${newArticle.title}" and ID ${newArticle.id}`
  });
});
// start server
const listener = app.listen(process.env.PORT || 3009, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

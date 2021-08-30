const express = require("express");

// I am creating server named app
const app = express();

//Making everything inside the public folder available
app.use(express.static("public")); //app.use middleware

//http://localhost:3000/home
app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

//http://localhost3000/about
app.get("/about", (request, response) => {

  response.sendFile(
    __dirname + "/views/about-page.html"
  );
});

//http://localhost3000/works
app.get("/works", (request, response) => {
    response.sendFile(
        __dirname + "/views/works-page.html"
    );
  });

app.listen(3000, () => console.log("listening on port 3k"));

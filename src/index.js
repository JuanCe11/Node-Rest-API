const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", process.env.port || 3000);
app.set("json spaces", 2);

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //Allows input data from forms
app.use(express.json()); //Allows JSON format

//routes
app.use(require("./routes/index.js"));
app.use("/api/movies", require("./routes/movies.js"));

//starting
app.listen(app.get("port"), () => {
  console.log("Server on port 3000");
});

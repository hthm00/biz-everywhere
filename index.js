const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/businesses", (req, res) => {
	res.send("This is a listing page.");
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});

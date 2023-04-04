const express = require("express");
const app = express();
const path = require("path");
const port = 3000

app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");

const businesses = [
	{
		title: "My Boba Shop",
		price: 190000,
		image:
			"https://vivitea.nl/wp-content/uploads/2021/08/vivi-bubble-tea-zoetermeer-drinks-19-2.jpg",
		address: "123 This St, Long Beach, CA 92000",
	},
	{
		title: "My Gift Shop",
		price: 400000,
		image:
			"https://www.retailgazette.co.uk/wp-content/uploads/2022/08/Charlotte-Tilbury-Liverpool-Render-PR-696x463.jpg",
		address: "987 That St, Long Beach, CA 92000",
	},
	{
		title: "My Boba Shop",
		price: 190000,
		image:
			"https://vivitea.nl/wp-content/uploads/2021/08/vivi-bubble-tea-zoetermeer-drinks-19-2.jpg",
		address: "123 This St, Long Beach, CA 92000",
	},
	{
		title: "My Gift Shop",
		price: 400000,
		image:
			"https://www.retailgazette.co.uk/wp-content/uploads/2022/08/Charlotte-Tilbury-Liverpool-Render-PR-696x463.jpg",
		address: "987 That St, Long Beach, CA 92000",
	},
];

app.get("/businesses", (req, res) => {
	res.render("businesses", { businesses });
});

app.get("/businesses/new", (req, res) => {
	res.render("businesses/new");
});

app.get("/businesses/:id", (req, res) => {
	res.render("businesses/show", { business: businesses[0] });
});

app.get("/businesses/:id/edit", (req, res) => {
	res.render("businesses/edit", { business: businesses[0] });
});

// index page
app.get("/", function (req, res) {
	res.render("pages/index");
	// res.send('Hello, World!');
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});

const request = require("postman-request");
const path = require("path");

const port = process.env.PORT || 3000;

let lasithiWeather = "";
let coffee = "";
let coffeeImage = "";

//openweather API
const endpoint =
  "http://api.openweathermap.org/data/2.5/weather?q=tzermiado&APPID=9aa40b28d228c2f381b9b1e05d3e49b4&units=metric";

request({ url: endpoint, json: true }, function (error, response, body) {
  coffee = body.main.temp < 23 ? "Cappuccino ☕" : "Frappe 🥤";

  if (coffee == "Cappuccino ☕") {
    coffeeImage = "images/cappuccino.png";
  }
  if (coffee == "Frappe 🥤") {
    coffeeImage = "images/frappe.png";
  }

  //weather
  lasithiWeather =
    "Hello from Lasithi Plateau where the temperature is " +
    body.main.temp +
    "°C and the weather is " +
    body.weather[0].main +
    " with " +
    body.weather[0].description +
    ".";
});

//Express
const express = require("express");
const app = express();
const publicDirectoryPath = path.join(__filename, "../public"); //generated path to public folder

app.use(express.static(publicDirectoryPath));

//Setup view engine
app.set("view engine", "hbs");

//Setup a route
app.get("", (req, res) => {
  res.render("index", {
    hello: lasithiWeather,
    coffee: coffee,
    coffeeImage: coffeeImage,
  }); //has to be in the views dir, no index.html in public
});

app.listen(port, () => {
  console.log("Server is running... 🍌");
});

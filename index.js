const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");
const myRoute = require('./Route/scheduleRoute')

const port = process.env.PORT || 2021
const app = express();

app.use(cors("*"));
app.use(express.json());

app.use('/api', myRoute)



app.listen(port, () => {
	console.log("server is now running...!");
});

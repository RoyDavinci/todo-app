const express = require("express");
require("dotenv").config();
const todoRouter = require("./routes/routes");
const cors = require("cors");

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", todoRouter);
app.use(express.urlencoded({ extended: "true" }));

app.listen(PORT, () => {
	console.log(`Listening on port localhost:${PORT}`);
});

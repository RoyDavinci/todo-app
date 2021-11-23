const express = require("express");
require("dotenv").config();
const todoRouter = require("./routes/routes");
const cors = require("cors");
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/category");
const todoCategoryRouter = require("./routes/categoryTodo");

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", todoRouter);
app.use("/api/v2/auth", authRouter);
app.use("/api/v2", categoryRouter);
app.use("/api/v3", todoCategoryRouter);
app.use(express.urlencoded({ extended: "true" }));

app.listen(PORT, () => {
	console.log(`Listening on port localhost:${PORT}`);
});

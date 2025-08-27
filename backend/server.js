require("dotenv").config();
console.log("Environment check:");
console.log("OPENAI_API_KEY exists:", !!process.env.OPENAI_API_KEY);
console.log("OPENAI_API_KEY length:", process.env.OPENAI_API_KEY?.length);

const express = require("express");
const chatRoutes = require("./src/routes/chat");

const app = express();
app.use(express.json());

app.use("/api", chatRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

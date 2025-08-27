require("dotenv").config();
console.log("Environment check:");
console.log("OPENAI_API_KEY exists:", !!process.env.OPENAI_API_KEY);
console.log("OPENAI_API_KEY length:", process.env.OPENAI_API_KEY?.length);
console.log("First 10 chars:", process.env.OPENAI_API_KEY?.substring(0, 10));

const express = require("express");
const chatRoutes = require("./src/routes/chat");

const app = express();
app.use(express.json());

// This connects your routes to the server
app.use("/api", chatRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

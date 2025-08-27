const express = require("express");
const { getChatGPTResponse } = require("../services/aiService");
const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const aiResponse = await getChatGPTResponse(message);

    res.json({ reply: aiResponse });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;

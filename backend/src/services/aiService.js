require("dotenv").config();

let openai = null;

function getOpenAIClient() {
  if (!openai) {
    const OpenAI = require("openai");
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

async function getChatGPTResponse(userMessage) {
  try {
    const client = getOpenAIClient();
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a meeting scheduler AI assistant.",
        },
        { role: "user", content: userMessage },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    return `AI Error: ${error.message}`;
  }
}

module.exports = { getChatGPTResponse };

const express = require("express")
const router = express.Router();
// const OpenAI = require('openai')

// router.post('/input', async (req, res) => {
// const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY})

//   const {message} = req.body;

//     try {
//             const completion = await openai.chat.completions.create({
//               messages: [{ role: "system", content: message }],
//               model: "gpt-3.5-turbo",
//             });

//           res.send({data:completion.choices[0].message.content, message:message})

//     } catch (error) {
//         console.log(error);
//     }
// })

// module.exports = router;

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

router.post('/input', async (req, res) => {

  const {message} = req.body;

const apiKey = process.env.OPEN_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  
  const result = await chatSession.sendMessage(message);
  // const response = JSON.stringify(result.response.text());

  res.json({data:result.response.text(), message:message})
  console.log(result.response.text());
}

run();
})

module.exports = router;
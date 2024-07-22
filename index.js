const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyAHHBfUktofGk-v94OVQL8gEmFFmZ5S2gM");

const model = genAI.getGenerativeModel({ model: "gemini-pro"});
const imageLink = ""; // image of the food item, can be a MySQL image directory.
const neededDishes = ""; // place where the places are available.
async function run() {
    // prompt verifying the image by giving a boolean value as the output.
    // prompt for getting the places where neededDishes are avialable. 
    const prompt = `get the 10 famous dishes of Chennai and describe the dishes and mention the places where they are avaliable mention the address, keep it brief and to the prompt. eliminate any Apostrophe while answering`
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }

  run();



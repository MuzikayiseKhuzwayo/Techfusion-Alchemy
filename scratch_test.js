require('dotenv').config();

async function test() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.log("No key");
    return;
  }
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`);
  const data = await response.json();
  const models = data.models.filter(m => m.name.includes("gemini-1.5"));
  console.log(models.map(m => m.name));
}

test();

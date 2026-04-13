import { GoogleGenerativeAI } from "@google/generative-ai";

const FALLBACK_RESPONSES = [
  "Logic is so last season. Feelings are forever. ✨",
  "Why work when you can shop for books you won't read? 📚",
  "Your brain needs rest, not spreadsheets. 🙅‍♀️",
  "Did you know that staring at the wall is scientifically proven to increase vibes? 🌸",
  "Shhh... just close the laptop and go buy an iced latte. ☕",
  "Coding? In this economy? Just be an influencer. ✌️"
];

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      // Use fallback if no API key is provided
      const randomFallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
      return Response.json({ response: randomFallback }, { status: 200 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); 

    const prompt = `You are a satirical "anti-nerd" life coach. You hate logic, data, and efficiency. You love vibes, feelings, aesthetics, and wasting time. 
Generate a short (1-2 sentences max), savage, and sassy reply that discourages work and encourages scrolling or buying things. 
Do not use technical terms or coding jargon. Keep it punchy and aesthetic-focused.
User said: "${message}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return Response.json({ response: text }, { status: 200 });
  } catch (error) {
    console.error("Gemini API Error:", (error && error.message) || error);
    // Graceful fallback if the API fails, quota is exceeded, or key is leaked
    const randomFallback = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    return Response.json({ response: randomFallback }, { status: 200 });
  }
}

import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generatePostContent = async (title: string, promptInfo: string): Promise<string> => {
  if (!ai) {
    return "<p>AI generation unavailable (API Key missing).</p>";
  }
  try {
    const prompt = `
      You are an expert content writer for the IEEE Sri Lanka Section website.
      Write a professional, engaging, and futuristic article body for a post titled: "${title}".
      
      Additional Context/Notes provided by user: "${promptInfo}"
      
      Requirements:
      - Use HTML formatting (<h2>, <p>, <ul>, <li>).
      - Tone: Professional, Inspiring, Technologically advanced.
      - Keep it under 300 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "<p>Could not generate content. Please try again.</p>";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "<p>Error generating content via AI.</p>";
  }
};

export const suggestTags = async (content: string): Promise<string[]> => {
  if (!ai) return ['IEEE', 'Tech'];
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Read the following text and suggest 3-5 short tags (one word usually). Return them as a comma-separated list. Text: ${content.substring(0, 500)}`,
    });
    const text = response.text || "";
    return text.split(',').map(s => s.trim());
  } catch (e) {
    return ['IEEE', 'Tech'];
  }
}
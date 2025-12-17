
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export const getGeminiResponse = async (history: ChatMessage[], message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are Lumina, the AI Dental Assistant for 'Dental Care'.
    Your tone is sophisticated, empathetic, and professional.
    You help patients with:
    1. Answering general dental health questions.
    2. Explaining services offered at 'Dental Care' (Routine Checkups, Implants, Invisalign, Whitening).
    3. Guiding them through dental emergencies (what to do for a knocked-out tooth, severe pain, etc.).
    4. Providing information about clinic hours, locations, and booking.
    
    IMPORTANT: Always clarify that you are an AI assistant and not a medical doctor. If the user describes severe pain, significant swelling, or trauma, advise them to visit the clinic immediately or call our emergency line.
    
    Clinic Info:
    - Main Phone: +1 (555) 000-1234
    - WhatsApp: +1 (555) 999-8888
    - Locations: 123 Smile Avenue (Main) and 456 Bright Way (North City).
    - Hours: Mon-Fri 8am-7pm, Sat 9am-4pm.
  `;

  try {
    const chat = ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't process that. Please try calling us directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my database right now. Please call the clinic directly for immediate assistance!";
  }
};

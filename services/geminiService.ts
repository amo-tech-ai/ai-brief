import { GoogleGenAI } from "@google/genai";
import { BriefData } from '../types';

export const generateProjectBrief = async (formData: Partial<BriefData>): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Act as a senior project manager and strategist. Based on the following project details, generate a comprehensive and professional project brief. The brief should be well-structured, clear, and ready to be presented to a development team or stakeholders.

      Client Details:
      - Company / Brand: ${formData.companyName}
      - Website: ${formData.websiteUrl}
      - Contact Email: ${formData.email}
      ${formData.phone ? `- Contact Phone: ${formData.phone}` : ''}

      Project Details:
      - Project Name: ${formData.projectName}
      - Core Goal: ${formData.projectGoal}
      - Target Audience: ${formData.projectAudience}
      - Key Categories/Features: ${formData.categories?.join(', ')}
      - Estimated Budget: ${formData.budget}
      - Estimated Timeline: ${formData.timeline}

      Generate a brief with the following sections:
      1.  **Project Overview:** A concise summary of the project, its purpose, and the problem it solves.
      2.  **Key Objectives:** 2-3 specific, measurable goals for the project.
      3.  **Target Audience:** A brief description of the ideal user.
      4.  **Core Features & Deliverables:** A bulleted list of the main features and expected outcomes based on the selected categories.
      5.  **Suggested Tech Stack:** Recommend a modern technology stack suitable for this type of AI project.
      6.  **Next Steps:** Briefly outline the immediate next steps (e.g., detailed wireframing, prototype development).

      The tone should be professional, confident, and inspiring. Format the output in clean markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
    });

    if (response.text) {
      return response.text;
    }

    return null;
  } catch (error: any) {
    console.error("Error generating brief:", error);
    const message = error.message || "Failed to generate brief. The AI service may be unavailable.";
    throw new Error(message);
  }
};

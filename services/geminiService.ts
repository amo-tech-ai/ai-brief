import { GoogleGenAI } from "@google/genai";
import { ProfileFormData } from '../types';

export const generateProfileSlide = async (formData: ProfileFormData): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Create a high-resolution, professional, and modern corporate profile slide.
      The design must be minimalist, clean, and visually appealing, suitable for a business presentation.
      Use a corporate color palette, primarily blues, grays, and white.
      The slide must feature the following information clearly and prominently:
      - Name: ${formData.name}
      - Title: ${formData.title}
      - Company: ${formData.company}

      It must also include the following contact details, each preceded by a simple, modern icon (a simple outline of an envelope for email, a phone for phone, a globe for website):
      - Email: ${formData.email}
      - Phone: ${formData.phone}
      - Website: ${formData.website}

      The layout should be balanced and well-organized. Use a clean, sans-serif font like Inter or Helvetica.
      Ensure there is ample white space. The final output should look like a polished graphic design, not a photo.
      High resolution, 8k, sharp focus.
    `;

    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/png',
        aspectRatio: '16:9',
      },
    });

    if (response.generatedImages && response.generatedImages.length > 0) {
      const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    }

    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw new Error("Failed to generate profile slide. The AI service may be unavailable.");
  }
};
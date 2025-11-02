
import { GoogleGenAI } from "@google/genai";
import { ProfileData } from "../types";

export const generateProfileSlideImage = async (profileData: ProfileData): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  const prompt = `
    Design a professional, minimal Profile Slide with a 16:9 aspect ratio, featuring a photorealistic person who looks like they could be ${profileData.name}.
    The slide must have a clean, professional, and modern visual style, suitable for a corporate presentation.
    Use a light, neutral background (white or a very light gray, like #F8F9FA).
    The primary text color should be a dark charcoal (#0F172A).
    Use a sky teal color (#00A3B8) for subtle accents, like icons or a thin divider line.
    The typography must be a clean, modern sans-serif font (similar to Inter or Satoshi).

    The layout should be impeccably balanced with consistent alignment and generous padding.
    On one side of the slide, place a professional, high-quality, photorealistic headshot of a person who could be "${profileData.name}".
    On the other side, display the contact information clearly.

    The slide must contain the following information, formatted beautifully:
    - Full Name (large, bold, prominent typography): ${profileData.name}
    - Company: ${profileData.company}
    - Website: ${profileData.website}
    - Email: ${profileData.email}
    - Phone: ${profileData.phone}

    Organize the contact information (Company, Website, Email, Phone) clearly under the name. Use minimalist, outlined icons next to the email, phone, and website fields for better visual communication.
    The overall aesthetic must be minimalist, avoiding clutter, excessive colors, or gradients.
    The final image should be high-resolution, crisp, and professional.
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

  const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
  return `data:image/png;base64,${base64ImageBytes}`;
};

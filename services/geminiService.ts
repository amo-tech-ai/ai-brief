
import { GoogleGenAI } from "@google/genai";
import { LOADING_MESSAGES } from "../constants";
import { AspectRatio, BriefData } from "../types";

export const generateInfographicPlan = async (brief: BriefData): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  const dynamicPrompt = `
    Analyze and create a plan for an animated infographic based on the following AI project brief:
    - Project Type: ${brief.projectType}
    - Core Goals: ${brief.goals}
    - Budget Range: ${brief.budget}
    - Key Categories: ${brief.categories.join(', ')}

    Follow these steps to generate the plan:
    
    Step 1 — **Assess**: Review your creative and animation capabilities. Based on the brief, identify what types of motion graphics, infographic layouts, and storytelling flows would be most effective.
    
    Step 2 — **Plan**: Create a structured animation plan for a short explainer video (15 – 20 seconds) that visualizes the project's essence. The plan should be tailored to the provided brief. Define a design style that is clean, uses a white background with orange (#F97316) accents, and has a modern UI look. The tone should be friendly, intelligent, and professional.

    Step 3 — **Output**: Present a storyboard or a scene-by-scene outline for the animated infographic video. Include titles, short captions, transition ideas, and visual descriptions for each scene. Ensure the output is concise, logical, and visually engaging.
  `;
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-pro',
    contents: dynamicPrompt,
  });

  return response.text;
};

export const generateVideoPromptFromPlan = async (plan: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  const prompt = `
    Based on the following animation plan, create a single, concise, and descriptive prompt for a text-to-video AI model (like Veo) to generate a 15-20 second video.

    The prompt should be a single paragraph focusing on visual elements, style, and motion. It should capture the essence of the plan in a way that the video model can interpret effectively.

    Here is the plan:
    ---
    ${plan}
    ---

    Generate only the prompt text.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });

  return response.text.trim();
};


export const generateVideo = async (
  prompt: string,
  aspectRatio: AspectRatio,
  onProgress: (message: string) => void
): Promise<string> => {
  // Create a new instance right before the call to use the latest key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  onProgress(LOADING_MESSAGES[0]);

  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt,
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio: aspectRatio,
    },
  });

  let messageIndex = 1;
  while (!operation.done) {
    onProgress(LOADING_MESSAGES[messageIndex % LOADING_MESSAGES.length]);
    messageIndex++;
    await new Promise(resolve => setTimeout(resolve, 10000));
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!downloadLink) {
    throw new Error("Video generation completed, but no download link was found.");
  }

  onProgress("Downloading generated video...");
  const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  if (!response.ok) {
    throw new Error(`Failed to download video: ${response.statusText}`);
  }

  const videoBlob = await response.blob();
  return URL.createObjectURL(videoBlob);
};

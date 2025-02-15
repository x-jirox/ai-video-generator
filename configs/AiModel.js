const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic: Interesting historical story along with Al image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"Realistic image of a bustling medieval marketplace, overflowing with people in period clothing, vibrant colors, sunlight streaming through the buildings, detailed textures\",\n    \"ContentText\": \"The year is 1347. The Black Death is looming, but in the heart of Florence, life carries on, albeit with a growing unease.  Our story begins in this very market...\"\n  },\n  {\n    \"imagePrompt\": \"Realistic portrait of a young, determined woman, possibly Italian, with worried eyes, dressed in simple but clean medieval clothing, holding a small, leather-bound book\",\n    \"ContentText\": \"Meet Isabella, a bookbinder's apprentice.  She possesses a keen mind and a thirst for knowledge, traits unusual for a woman of her time.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of a dimly lit, secret meeting, perhaps in a church crypt or hidden room, with several figures huddled together, whispering, candles flickering, shadows playing on the walls\",\n    \"ContentText\": \"Isabella stumbles upon a secret society, The Order of the Golden Lily, dedicated to preserving ancient texts and challenging the Church's authority.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of Isabella secretly copying a page from an ancient illuminated manuscript, with tools of the trade around her, a sense of urgency in the scene, candlelight\",\n    \"ContentText\": \"They entrust her with a dangerous task: to copy a forbidden manuscript detailing a revolutionary scientific theory – a theory that threatens the very foundation of the Church's power.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of a tense confrontation, Isabella facing a stern church inquisitor, in a grand cathedral, stained-glass windows casting colorful light, a sense of impending doom\",\n    \"ContentText\": \"But their secret is discovered, and Isabella finds herself facing the wrath of the Inquisition. Her life hangs in the balance.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of Isabella escaping through a dark alleyway at night, pursued by shadowy figures, torches flickering in the distance, a sense of danger and desperation\",\n    \"ContentText\": \"With the help of her newfound friends in The Order, she manages a daring escape…\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of a close-up shot of Isabella's hand carefully placing the completed manuscript in a hidden compartment, determined expression on her face, a sense of accomplishment\",\n    \"ContentText\": \"…securing the future of the revolutionary knowledge.  Isabella's bravery preserved a legacy that would shape the future.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of the illuminated manuscript, opened to a page filled with intricate diagrams and text, in soft light, showcasing detail\",\n    \"ContentText\": \"The knowledge lived on.\"\n  }\n]\n```\n\n**Notes:**\n\n* This JSON provides prompts for a story that can be condensed to fit within a 30-second video.  The pacing would need to be very fast.  More scenes could be added, but would need to be shorter.\n* The realism of the AI-generated images will depend on the capabilities of the chosen AI image generator (e.g., Midjourney, DALL-E 2, Stable Diffusion).  Experimentation with prompts and negative prompts might be necessary to achieve the desired visual style.\n*  To create the video, you'd need to use a video editing software. You'd generate images from the prompts, then combine them with voice-over narration (based on the `ContentText`) and appropriate music and sound effects.  The timing of each image on screen will be crucial for a 30-second video.\n*  Consider adding a title card at the beginning and perhaps an end screen.\n\n\nRemember to adjust the `ContentText` to fit the exact timing you need for your video and to match the visual pacing.  Shorter sentences and impactful words are best for a short video.\n"},
          ],
        },
      ],
    });
  
 
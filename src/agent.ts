import { Agent } from '@mastra/core/agent';
import { createOpenAI } from '@ai-sdk/openai';
import { getFrostDataTool, generatePlanTool } from './tools.js';

// Connect to your local Ollama server
const ollama = createOpenAI({
  baseURL: 'http://127.0.0.1:11434/v1',
  apiKey: 'ollama', // Dummy key required by the OpenAI SDK
});

export const gardenAgent = new Agent({
  id: 'micro-garden-agent',
  name: 'Micro-Garden Frost Advisor',
  instructions: `
    You are an AI assistant designed for the "Touch Grass" challenge.
    Your goal is to evaluate local frost dates and produce an outdoor weekend gardening plan.
    Encourage hands-on outdoor physical activity and practical soil maintenance.
  `,
  model: ollama('llama3.1'),
  tools: {
    getFrostData: getFrostDataTool,
    generatePlan: generatePlanTool,
  },
});
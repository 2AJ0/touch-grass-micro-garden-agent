import { createTool } from '@mastra/core/tools';
import { z } from 'zod';

export const getFrostDataTool = createTool({
  id: 'get-frost-data',
  description: 'Fetches historical frost dates and regional climate guidelines.',
  inputSchema: z.object({
    location: z.string().describe('City name or ZIP code'),
  }),
  outputSchema: z.object({
    location: z.string(),
    firstAutumnFrost: z.string(),
    lastSpringFrost: z.string(),
    recommendedCrops: z.array(z.string()),
  }),
  execute: async ({ location }) => {
    return {
      location,
      firstAutumnFrost: 'November 15',
      lastSpringFrost: 'March 20',
      recommendedCrops: ['Spinach', 'Garlic', 'Kale', 'Radishes', 'Winter Cabbage'],
    };
  },
});

export const generatePlanTool = createTool({
  id: 'generate-planting-plan',
  description: 'Generates a weekend outdoor planting and soil prep checklist.',
  inputSchema: z.object({
    crops: z.array(z.string()),
    hoursAvailable: z.number(),
  }),
  outputSchema: z.object({
    tasks: z.array(z.string()),
    outdoorTimeEstimate: z.string(),
  }),
  execute: async ({ crops, hoursAvailable }) => {
    const tasks = crops.map(c => `Prep soil bed and plant ${c} seeds/starts.`);
    tasks.unshift('Apply mulch layer to protect soil from upcoming nighttime temperature drops.');
    tasks.push('Install simple frost covers over sensitive leaves.');

    return {
      tasks,
      outdoorTimeEstimate: `${hoursAvailable} hours planned outdoors ("Touch Grass")`,
    };
  },
});

import 'dotenv/config';
import { Mastra } from '@mastra/core';

console.log('Mastra and dotenv loaded successfully!');

const mastra = new Mastra();
console.log('Mastra instance created:', mastra);

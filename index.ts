import { gardenAgent } from './src/agent.js';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  console.log('🌱 --- Micro-Garden & Frost Date Advisor Agent --- 🌱\n');

  rl.question('Enter your City or ZIP code: ', (location) => {
    rl.question('How many hours do you want to spend outside gardening this weekend? ', async (hours) => {
      console.log('\nConsulting outdoor garden advisor...\n');

      const prompt = `I am located in ${location} and have ${hours} hours available to spend outside this weekend. Recommend suitable crops, check frost dates, and generate an outdoor task list for me.`;

      const result = await gardenAgent.generate(prompt);

      console.log('--- YOUR WEEKEND OUTDOOR PLAN ---');
      console.log(result.text);

      rl.close();
    });
  });
}

main();

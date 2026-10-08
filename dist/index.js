"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@mastra/core");
console.log('Mastra and dotenv loaded successfully!');
const mastra = new core_1.Mastra();
console.log('Mastra instance created:', mastra);

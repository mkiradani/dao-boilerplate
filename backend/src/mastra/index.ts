import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";
import { weatherWorkflow } from "./workflows";
import { weatherAgent } from "./agents/weatherAgent";
import { chefAgent } from "./agents/chefAgent";
import { stockAgent } from "./agents/stockAgent";

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { weatherAgent, chefAgent, stockAgent },
  logger: createLogger({
    name: "Daotomata",
    level: "info",
  }),
});

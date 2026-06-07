import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import dotenv from 'dotenv'; 
import { get } from 'http';
dotenv.config();  

export function getAgentMode(){
    const provider = createOpenRouter({apiKey:process.env.OPENROUTER_API_KEY});
    const modelID = createOpenRouter({apiKey:process.env.OPENROUTER_DEFAULT_MODE});

    return provider(modelID);
}
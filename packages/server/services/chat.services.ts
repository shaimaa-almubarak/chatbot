import fs from 'fs';
import path from 'path';
import { InferenceClient } from '@huggingface/inference';
import template from '../prompts/chatbot.txt';

//implimintation detail

const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

const parkInfo = fs.readFileSync(
   path.join(__dirname, '..', 'prompts', 'AutoMatrix.md'),
   'utf-8'
);

const instructions = template.replace('{{BusinessInfo}}', parkInfo);

type chatResponse = {
   id: string;
   message: string;
};

//puplic interface
export const chatServices = {
   async sendMessage(prompt: string): Promise<chatResponse> {
      const response = await client.chatCompletion({
         model: 'openai/gpt-oss-120b',

         max_tokens: 200,
         temperature: 0.2,
         messages: [
            {
               role: 'user',
               content: prompt,
            },
            {
               role: 'system',
               content: instructions,
            },
         ],
      });
      return {
         id: response.id,
         message: response.choices[0]?.message?.content || '',
      };
   },
};

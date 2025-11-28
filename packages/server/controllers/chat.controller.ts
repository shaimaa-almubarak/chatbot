import type { Request, Response } from 'express';
import z from 'zod';
import { chatServices } from '../services/chat.services';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '../generated/prisma/client';

//impimintation details
const chatSchema = z.object({
   prompt: z
      .string()
      .trim()
      .min(1, 'prompt is required')
      .max(1000, 'prompt is too long max 1000 characters'),
});

//puplic interface
export const chatController = {
   async senMessage(req: Request, res: Response) {
      const parsResult = chatSchema.safeParse(req.body);
      if (!parsResult.success) {
         res.status(400).json(parsResult.error);
         return;
      }
      const { prompt } = req.body;

      try {
         const response = await chatServices.sendMessage(prompt);
         res.json({ message: response.message });
      } catch (error: any) {
         res.status(500).json({ error: 'faild to genrate response.' });
      }
   },

   sendHello(req: Request, res: Response) {
      res.send({ massage: 'Hello from API' });
   },
   Hello(req: Request, res: Response) {
      res.send('Hello World!');
   },
};


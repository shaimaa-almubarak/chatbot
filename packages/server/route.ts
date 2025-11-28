import express, { type Request, type Response } from 'express';
import { chatController } from './controllers/chat.controller';
import dotenv from 'dotenv';
import { reviewsController } from './controllers/review.controller';

dotenv.config();
const router = express.Router();

router.get('/', chatController.Hello);

router.get('/api/hello', chatController.sendHello);

router.post('/api/chat', chatController.senMessage);
router.get('/api/products/:id/reviews', reviewsController.getReviews);

export default router;

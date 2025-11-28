import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient, type Review } from '../generated/prisma/client';

export const reviewRepository = {
   async getReviews(productId: number): Promise<Review[]> {
      const connectionString = `${process.env.DATABASE_URL}`;
      const adapter = new PrismaNeon({ connectionString });
      const prisma = new PrismaClient({ adapter });
      return prisma.review.findMany({
         where: { productId },
         orderBy: { createdAt: 'desc' },
      });
   },
};

// src/routes/itemRoutes.ts - FIXED VERSION
import express, { Request, Response } from 'express';
import { authenticateToken } from '../middlewares/auth';

interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: 'user' | 'admin';
  };
}

const router = express.Router();

// Public: List all items
router.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Public items list',
    data: [] 
  });
});

// Protected: Auth middleware
router.use(authenticateToken as express.RequestHandler);

// Create item (user only)
router.post('/', (req: AuthRequest, res: Response) => {
  res.json({
    success: true,
    message: 'Item created successfully!',
    user: req.user, 
    data: { itemId: '123' }
  });
});

export default router;

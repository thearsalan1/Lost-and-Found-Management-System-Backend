// src/routes/adminRoutes.ts - FIXED VERSION
import express, { Request, Response } from 'express';
import { authenticateToken, authroizeRole } from '../middlewares/auth'; 

// Extend Request interface to include user
interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: 'user' | 'admin';
  };
}

const router = express.Router();

// All admin routes require auth first
router.use(authenticateToken as express.RequestHandler);

// Then admin role ONLY
router.use(authroizeRole(['admin']) as express.RequestHandler);

router.get('/dashboard', (req: AuthRequest, res: Response) => {
  res.json({
    success: true,
    message: 'Admin dashboard ✅',
    user: req.user, 
    timestamp: new Date().toISOString()
  });
});

// Admin: Get all users (example)
router.get('/users', (req: AuthRequest, res: Response) => {
  res.json({
    success: true,
    message: 'All users list',
    user: req.user,
    data: [] 
  });
});

export default router;

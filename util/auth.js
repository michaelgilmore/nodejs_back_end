import { expressjwt } from 'express-jwt';

export const verifyToken = (req, res, next) => {
const token = req.header('Authorization');
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = expressjwt.verify(token, 'your-secret-key');
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
};

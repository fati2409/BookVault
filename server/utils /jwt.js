import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key-change-in-production';

// Generate JWT token
export const generateToken = (username) => {
    return jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
};

// Verify JWT token
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};

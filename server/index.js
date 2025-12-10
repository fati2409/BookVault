import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import publicRoutes from './routes/public.js';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', publicRoutes);
app.use('/auth', authRoutes);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'Book Shop API Server',
        version: '1.0.0',
        endpoints: {
            public: [
                'GET /books - Get all books',
                'GET /isbn/:isbn - Get book by ISBN',
                'GET /author/:author - Get books by author',
                'GET /title/:title - Get books by title',
                'GET /review/:isbn - Get book reviews',
                'POST /register - Register new user',
                'POST /login - Login user'
            ],
            authenticated: [
                'PUT /auth/review/:isbn - Add/Modify review (requires token)',
                'DELETE /auth/review/:isbn - Delete review (requires token)'
            ]
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Book Shop API Server running on http://localhost:${PORT}`);
    console.log(`📚 Ready to serve book data and handle requests`);
});

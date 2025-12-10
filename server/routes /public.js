import express from 'express';
import { books, users } from '../data/books.js';
import { generateToken } from '../utils/jwt.js';

const router = express.Router();

// Task 1: Get all books
router.get('/books', (req, res) => {
    res.json({
        success: true,
        books: Object.values(books)
    });
});
s
// Task 2: Get book by ISBN
router.get('/isbn/:isbn', (req, res) => {
    const { isbn } = req.params;
    const book = books[isbn];

    if (book) {
        res.json({
            success: true,
            book
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
});

// Task 3: Get books by Author
router.get('/author/:author', (req, res) => {
    const { author } = req.params;
    const authorBooks = Object.values(books).filter(
        book => book.author.toLowerCase().includes(author.toLowerCase())
    );

    res.json({
        success: true,
        books: authorBooks,
        count: authorBooks.length
    });
});

// Task 4: Get books by Title
router.get('/title/:title', (req, res) => {
    const { title } = req.params;
    const titleBooks = Object.values(books).filter(
        book => book.title.toLowerCase().includes(title.toLowerCase())
    );

    res.json({
        success: true,
        books: titleBooks,
        count: titleBooks.length
    });
});

// Task 5: Get book reviews
router.get('/review/:isbn', (req, res) => {
    const { isbn } = req.params;
    const book = books[isbn];

    if (book) {
        res.json({
            success: true,
            isbn: book.isbn,
            title: book.title,
            reviews: book.reviews
        });
    } else {
        res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
});

// Task 6: Register new user
router.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: 'Username and password are required'
        });
    }

    if (users[username]) {
        return res.status(409).json({
            success: false,
            message: 'User already exists'
        });
    }

    users[username] = { username, password };

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        username
    });
});

// Task 7: Login as registered user
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: 'Username and password are required'
        }); s
    }

    const user = users[username];

    if (!user || user.password !== password) {
        return res.status(401).json({
            success: false,
            message: 'Invalid credentials'
        });
    }

    const token = generateToken(username);

    res.json({
        success: true,
        message: 'Login successful',
        token,
        username
    });
});

export default router;

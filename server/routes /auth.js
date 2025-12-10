import express from 'express';
import { books } from '../data/books.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Apply authentication middleware to all routes in this router
router.use(authenticateToken);

// Task 8: Add/Modify a book review
router.put('/review/:isbn', (req, res) => {
    const { isbn } = req.params;
    const { review } = req.body;
    const username = req.user.username;

    if (!review) {
        return res.status(400).json({
            success: false,
            message: 'Review text is required'
        });
    }
    const book = books[isbn];
    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    // Check if user already has a review
    const existingReviewIndex = book.reviews.findIndex(
        r => r.username === username
    );

    if (existingReviewIndex !== -1) {
        // Modify existing review
        book.reviews[existingReviewIndex].review = review;
        book.reviews[existingReviewIndex].updatedAt = new Date().toISOString();

        res.json({
            success: true,
            message: 'Review updated successfully',
            review: book.reviews[existingReviewIndex]
        });
    } else {
        // Add new review
        const newReview = {
            username,
            review,
            createdAt: new Date().toISOString()
        };
        book.reviews.push(newReview);

        res.status(201).json({
            success: true,
            message: 'Review added successfully',
            review: newReview
        });
    }
});

// Task 9: Delete book review
router.delete('/review/:isbn', (req, res) => {
    const { isbn } = req.params;
    const username = req.user.username;

    const book = books[isbn];

    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }

    const reviewIndex = book.reviews.findIndex(
        r => r.username === username
    );

    if (reviewIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Review not found or you do not have permission to delete it'
        });
    }

    book.reviews.splice(reviewIndex, 1);

    res.json({
        success: true,
        message: 'Review deleted successfully'
    });
});

export default router;

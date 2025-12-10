import { getAllBooks } from './methods/getAllBooks.js';
import { searchByISBN } from './methods/searchByISBN.js';
import { searchByAuthor } from './methods/searchByAuthor.js';
import { searchByTitle } from './methods/searchByTitle.js';

console.log('🚀 Book Shop API Client - Demonstrating Async Patterns\n');
console.log('='.repeat(60));

// Main function to run all client methods
async function main() {
    try {
        // Task 10: Get all books using async callback
        console.log('\n📚 Task 10: Get All Books (Using Async Callback)');
        console.log('-'.repeat(60));
        await new Promise((resolve, reject) => {
            getAllBooks((error, data) => {
                if (error) {
                    console.error('❌ Error:', error.message);
                    reject(error);
                } else {
                    console.log(`✅ Success! Retrieved ${data.books.length} books`);
                    console.log('First book:', data.books[0].title);
                    resolve();
                }
            });
        });

        // Task 11: Search by ISBN using Promises
        console.log('\n📖 Task 11: Search by ISBN (Using Promises)');
        console.log('-'.repeat(60));
        const isbn = '978-0-13-468599-1';
        await searchByISBN(isbn)
            .then(data => {
                console.log(`✅ Success! Found book:`);
                console.log(`   Title: ${data.book.title}`);
                console.log(`   Author: ${data.book.author}`);
                console.log(`   ISBN: ${data.book.isbn}`);
            })
            .catch(error => {
                console.error('❌ Error:', error.message);
            });

        // Task 12: Search by Author using async/await
        console.log('\n👤 Task 12: Search by Author (Using Async/Await)');
        console.log('-'.repeat(60));
        try {
            const authorData = await searchByAuthor('Martin');
            console.log(`✅ Success! Found ${authorData.count} books by authors matching "Martin"`);
            authorData.books.forEach((book, index) => {
                console.log(`   ${index + 1}. ${book.title} by ${book.author}`);
            });
        } catch (error) {
            console.error('❌ Error:', error.message);
        }

        // Task 13: Search by Title using async/await
        console.log('\n📕 Task 13: Search by Title (Using Async/Await)');
        console.log('-'.repeat(60));
        try {
            const titleData = await searchByTitle('Clean');
            console.log(`✅ Success! Found ${titleData.count} books with "Clean" in title`);
            titleData.books.forEach((book, index) => {
                console.log(`   ${index + 1}. ${book.title} by ${book.author}`);
            });
        } catch (error) {
            console.error('❌ Error:', error.message);
        }

        console.log('\n' + '='.repeat(60));
        console.log('✅ All client methods executed successfully!');
        console.log('='.repeat(60));

    } catch (error) {
        console.error('\n❌ Fatal error:', error.message);
        process.exit(1);
    }
}

// Run the main function
main();

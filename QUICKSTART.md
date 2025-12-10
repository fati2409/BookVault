# 🚀 Quick Start Guide

## Installation & Setup

### 1. Install Dependencies

Open PowerShell as Administrator:

```powershell
cd "c:/Users/meixu/OneDrive/Desktop/coursera task"
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install
```

### 2. Start the Server

```bash
npm run start:server
```

You should see:
```
✅ Book Shop API Server running on http://localhost:5000
📚 Ready to serve book data and handle requests
```

### 3. Test the Client (New Terminal)

Keep the server running and open a new terminal:

```bash
cd "c:/Users/meixu/OneDrive/Desktop/coursera task"
npm run start:client
```

## Quick API Tests

### Test with Browser
Open in browser: `http://localhost:5000/books`

### Test with curl

**Get all books:**
```bash
curl http://localhost:5000/books
```

**Register & Login:**
```bash
# Register
curl -X POST http://localhost:5000/register -H "Content-Type: application/json" -d "{\"username\":\"john\",\"password\":\"pass123\"}"

# Login (save the token!)
curl -X POST http://localhost:5000/login -H "Content-Type: application/json" -d "{\"username\":\"john\",\"password\":\"pass123\"}"
```

**Add Review (replace YOUR_TOKEN):**
```bash
curl -X PUT http://localhost:5000/auth/review/978-0-13-468599-1 -H "Authorization: Bearer YOUR_TOKEN" -H "Content-Type: application/json" -d "{\"review\":\"Great book!\"}"
```

## Available Books

1. Clean Code - Robert C. Martin (ISBN: 978-0-13-468599-1)
2. Clean Architecture - Robert C. Martin (ISBN: 978-0-13-235088-4)
3. Refactoring - Martin Fowler (ISBN: 978-0-13-597783-2)
4. Domain-Driven Design - Eric Evans (ISBN: 978-0-13-475759-9)
5. Patterns of Enterprise Application Architecture - Martin Fowler (ISBN: 978-0-13-468599-2)
6. The Pragmatic Programmer - Andrew Hunt (ISBN: 978-0-13-468599-3)
7. The Mythical Man-Month - Frederick P. Brooks Jr. (ISBN: 978-0-13-468599-4)
8. Code Complete - Steve McConnell (ISBN: 978-0-13-468599-5)

## Troubleshooting

**PowerShell execution policy error:**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

**Port already in use:**
- Close any other application using port 5000
- Or change PORT in server/index.js

**Client can't connect:**
- Make sure server is running first
- Check that server is on http://localhost:5000

## Next Steps

See [README.md](README.md) for complete API documentation and testing guide.

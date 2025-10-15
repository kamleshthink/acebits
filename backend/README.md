# ACE BITS Backend

Backend server for ACE BITS community registration system built with Node.js, Express, and MongoDB.

## Features

- User registration with validation
- MongoDB database integration
- RESTful API endpoints
- CORS enabled for frontend integration
- Error handling and validation

## Prerequisites

- Node.js (v20.11.0 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm (v10.2.4 or higher)

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env`:
```
PORT=5000
MONGODB_URI=mongodb+srv://acebitsindridhanbad_db_user:Kamlesh@#2005@cluster0.atc0s8x.mongodb.net/ACEBITS?retryWrites=true&w=majority&appName=Cluster0
```

## Running the Server

### Development Mode (with auto-restart):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health`
  - Check if server is running
  - Response: `{ success: true, message: "Server is running", timestamp: "..." }`

### User Registration
- **POST** `/api/users/register`
  - Register a new user
  - Required fields:
    - `name` (string)
    - `email` (string, unique)
    - `phone` (string, 10 digits)
    - `registrationNumber` (string, unique)
    - `branch` (string)
    - `college` (string)
    - `year` (string)
    - `address` (string, optional)

  - Example request body:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "registrationNumber": "2023/CE/001",
    "branch": "Civil Engineering",
    "college": "BIT Sindri",
    "year": "2nd Year",
    "address": "BIT Hostel, Sindri"
  }
  ```

### Get All Users
- **GET** `/api/users`
  - Get all registered users
  - Response: Array of user objects

### Get User by ID
- **GET** `/api/users/:id`
  - Get specific user by MongoDB ID
  - Response: User object

### Get User by Registration Number
- **GET** `/api/users/regno/:regNo`
  - Get user by registration number
  - Response: User object

## Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  phone: String (required, 10 digits),
  registrationNumber: String (required, unique, uppercase),
  branch: String (required, enum),
  college: String (required, default: 'BIT Sindri'),
  year: String (required, enum),
  address: String,
  registeredAt: Date (default: now),
  isActive: Boolean (default: true),
  timestamps: true
}
```

### Allowed Branches:
- Civil Engineering
- Mechanical Engineering
- Electrical Engineering
- Electronics and Communication Engineering
- Computer Science and Engineering
- Chemical Engineering
- Mining Engineering
- Production Engineering

### Allowed Years:
- 1st Year
- 2nd Year
- 3rd Year
- 4th Year

## Project Structure

```
backend/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── userController.js  # User API logic
├── models/
│   └── User.js           # User schema
├── routes/
│   └── userRoutes.js     # API routes
├── .env                  # Environment variables
├── package.json          # Dependencies
├── server.js            # Main server file
└── README.md            # This file
```

## Testing

You can test the API using:
- **Postman**: Import endpoints and test
- **cURL**: Command line testing
- **Frontend**: React app at `http://localhost:3000`

### Example cURL request:
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9876543210",
    "registrationNumber": "2023/CE/001",
    "branch": "Civil Engineering",
    "college": "BIT Sindri",
    "year": "2nd Year"
  }'
```

## MongoDB Database

- **Database Name**: ACEBITS
- **Collection**: users
- **Cloud Provider**: MongoDB Atlas

## Error Handling

The API returns appropriate HTTP status codes:
- `200`: Success
- `201`: Created
- `400`: Bad Request (validation errors)
- `404`: Not Found
- `500`: Server Error

## CORS Configuration

CORS is enabled for:
- `http://localhost:3000`
- `http://localhost:3001`

## Support

For issues or questions:
- Email: acebitsindri@gmail.com
- Phone: +91 6203112525 (President)

---
Made with ❤️ by ACE BITS Team

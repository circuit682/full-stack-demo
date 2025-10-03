# Full-Stack Authentication Demo

A modern full-stack web application demonstrating Google OAuth authentication with React frontend and Node.js/Express backend.

## 🚀 Features

- **Google OAuth Integration**: Secure authentication using Google's OAuth 2.0
- **Session Management**: Persistent user sessions with Express sessions
- **Modern React UI**: Clean, responsive login interface
- **RESTful API**: Backend API with protected routes
- **CORS Support**: Configured for seamless frontend-backend communication
- **Environment Variables**: Secure configuration management
- **MongoDB Ready**: Database configuration for user data persistence

## 🛠️ Tech Stack

### Frontend

- **React** 18+ - Modern React with functional components
- **React Router DOM** - Client-side routing
- **Google OAuth Provider** - React OAuth integration
- **CSS3** - Custom styling with responsive design

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Passport.js** - Authentication middleware
- **Express Session** - Session management
- **CORS** - Cross-origin resource sharing
- **MongoDB** - Database (configured but optional)

## 📁 Project Structure

```
interview_prep/
├── back-end/                 # Backend API server
│   ├── config/
│   │   └── db.js            # Database configuration
│   ├── controllers/
│   │   └── authController.js # Authentication logic
│   ├── models/
│   │   └── user.js          # User data model
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── user.js          # User API routes
│   ├── auth.js              # Passport configuration
│   ├── index.js             # Main server file
│   ├── package.json         # Backend dependencies
│   └── .env                 # Environment variables
│
├── my-app/                   # React frontend
│   ├── public/
│   │   ├── images/          # Social login icons
│   │   └── index.html       # Main HTML template
│   ├── src/
│   │   ├── App.js           # Main App component
│   │   ├── index.js         # React entry point
│   │   └── styles.css       # Application styles
│   └── package.json         # Frontend dependencies
│
├── index.html               # Static demo page
├── styles.css               # Static page styles
└── README.md                # This file
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Cloud Console account (for OAuth credentials)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd interview_prep
```

### 2. Backend Setup

```bash
cd back-end
npm install
```

### 3. Frontend Setup

```bash
cd ../my-app
npm install
```

### 4. Environment Variables

Create a `.env` file in the `back-end` directory:

```env
# Google OAuth credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/google/callback

# Server configuration
PORT=5000
SESSION_SECRET=your_super_secret_session_key

# Database (optional)
MONGO_URI=your_mongodb_connection_string

# JWT (for future use)
JWT_SECRET=your_jwt_secret_key
```

### 5. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:5000/google/callback`
6. Copy Client ID and Client Secret to your `.env` file

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Backend Server:**

```bash
cd back-end
npm start
```

Backend runs on: `http://localhost:5000`

**Terminal 2 - Frontend Server:**

```bash
cd my-app
npm start
```

Frontend runs on: `http://localhost:3000`

### Production Build

```bash
cd my-app
npm run build
```

## 📚 API Endpoints

### Authentication Routes

- `GET /` - Welcome page with Google login link
- `GET /auth/google` - Initiate Google OAuth flow
- `GET /google/callback` - Google OAuth callback
- `GET /auth/failure` - Authentication failure page
- `GET /logout` - User logout

### Protected Routes

- `GET /protected` - Example protected route (requires authentication)
- `GET /api/current-user` - Get current authenticated user

## 🔒 Authentication Flow

1. User clicks "Login with Google" on React frontend
2. Redirects to backend `/auth/google` endpoint
3. Passport.js handles Google OAuth flow
4. On success, redirects back to React dashboard
5. Frontend can access user data via `/api/current-user`

## 🎨 UI Components

### Login Page Features

- Clean, modern design inspired by Codecademy
- Multiple social login options (Google functional, others as placeholders)
- Responsive layout
- Form validation ready
- Forgot password placeholder

## 🔧 Configuration

### Frontend Proxy

The React app is configured with a proxy to the backend:

```json
"proxy": "http://localhost:5000"
```

### CORS Configuration

Backend allows requests from React development server:

```javascript
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST",
    credentials: true,
  })
);
```

## 🚧 Development Notes

- Frontend uses React 18+ with modern syntax
- Backend uses ES6 modules (`"type": "module"` in package.json)
- Sessions are stored in memory (use MongoDB/Redis for production)
- Google Client ID is exposed in frontend (normal for OAuth)

## 🔮 Future Enhancements

- [ ] Database integration for user persistence
- [ ] JWT token implementation
- [ ] Additional OAuth providers (Facebook, GitHub, LinkedIn, Twitter)
- [ ] User dashboard with profile management
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Role-based access control
- [ ] API rate limiting
- [ ] Unit and integration tests

## 🐛 Troubleshooting

### Common Issues

**Cannot find module errors:**

- Ensure you're running commands from correct directories
- Backend commands from `back-end/` folder
- Frontend commands from `my-app/` folder

**OAuth not working:**

- Verify Google Cloud Console configuration
- Check authorized redirect URIs
- Ensure environment variables are set correctly

**CORS errors:**

- Verify proxy configuration in `my-app/package.json`
- Check CORS configuration in backend

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created as part of interview preparation and full-stack development practice.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For questions or support, please open an issue on GitHub.

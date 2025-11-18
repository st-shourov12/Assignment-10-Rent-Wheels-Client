# 🚗 RentWheels


## 🔗 Live Links

- **Client Live:** [https://rentwheelsassignment.netlify.app/](https://rentwheelsassignment.netlify.app/)
- **Server Live:** [https://rent-wheels-server-sigma.vercel.app/](https://rent-wheels-server-sigma.vercel.app/)
- **Client Repo:** [GitHub - Client](https://github.com/st-shourov12/Assignment-10-Rent-Wheels-Client)
- **Server Repo:** [GitHub - Server](https://github.com/st-shourov12/Assignment-10-Rent-Wheels-Server)

---


## 🧾 About RentWheels

**RentWheels** is a full-stack MERN application that connects users with local car owners or rental providers.  
Users can browse available cars, view details, and book rentals for specific dates.  
Car providers can list vehicles, manage bookings, and update car availability in real-time.

---

## ✨ Key Features

- 🚘 **Browse Cars Easily** — Users can explore all available cars with filtering and search options.
- 💳 **Book Cars Instantly** — Choose your favorite car, select rental dates, and confirm bookings securely.
- 🧑‍💼 **Provider Dashboard** — Car owners can list, edit, or remove cars and track their bookings.
- 🔒 **Authentication System** — Firebase authentication for secure sign-up, login, and logout.
- ⭐ **Top Rated Cars & Why Rent With Us** — Highlights best cars and reasons to choose RentWheels.
- 🧾 **Dynamic Booking Management** — Users can update or cancel their bookings anytime.

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- DaisyUI
- React Router
- React Icons
- Axios
- React Toastify
- Swiper
- React Tooltip
- Lottie React

### Backend
- Node.js
- Express.js
- MongoDB
- Dotenv
- Cors

### Authentication
- Firebase

### Deployment
- **Client:** Netlify
- **Server:** Vercel

---



## 📥 Installation Guide

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use MongoDB Atlas
- **Git** - [Download here](https://git-scm.com/)
- **Firebase Account** - [Create one here](https://firebase.google.com/)

---

## 🖥️ Client-Side Setup

### Step 1: Clone the Client Repository

```bash
git clone https://github.com/st-shourov12/Assignment-10-Rent-Wheels-Client.git
```

### Step 2: Navigate to Client Directory

```bash
cd Assignment-10-Rent-Wheels-Client
```

### Step 3: Install Client Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### Step 4: Create Environment Variables

Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
```

### Step 5: Run the Client Development Server

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

The client will start running at:
```
http://localhost:5173
```

---

## 🔧 Server-Side Setup

### Step 1: Clone the Server Repository

```bash
git clone https://github.com/st-shourov12/Assignment-10-Rent-Wheels-Server.git
```

### Step 2: Navigate to Server Directory

```bash
cd Assignment-10-Rent-Wheels-Server
```

### Step 3: Install Server Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### Step 4: Create Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

**For MongoDB Connection String:**
- Local: `mongodb://localhost:27017/rentwheels`
- Atlas: `mongodb+srv://username:password@cluster.mongodb.net/rentwheels`

### Step 5: Run the Server

Using npm:
```bash
npm start
```

Or for development with nodemon:
```bash
npm run dev
```

Or using yarn:
```bash
yarn start
```

The server will start running at:
```
http://localhost:5000
```

---

## 📁 Project Structure

### Client Structure
```
Assignment-10-Rent-Wheels-Client/
├── src/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .env.local
└── package.json
```

### Server Structure
```
Assignment-10-Rent-Wheels-Server/
├── routes/
├── models/
├── controllers/
├── middleware/
├── .env
├── index.js
└── package.json
```

---

## 🚀 Build for Production

### Client Build

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

The build files will be in the `dist/` folder.

### Server Deployment

Make sure your `.env` variables are properly configured on your hosting platform (Vercel, Heroku, etc.).

---

## 🔐 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable **Authentication** → **Email/Password** sign-in method
4. Get your Firebase config from Project Settings
5. Add the credentials to your `.env.local` file

---

## 🗄️ MongoDB Setup

### Option 1: Local MongoDB
1. Install MongoDB on your machine
2. Start MongoDB service
3. Use connection string: `mongodb://localhost:27017/rentwheels`

### Option 2: MongoDB Atlas (Cloud)
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to `.env` file

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 👨‍💻 Author

**MD. Mirazul Islam Shourov**

- GitHub: [@st-shourov12](https://github.com/st-shourov12)
- Email: shourovsc38@gmail.com
- Facebook: [mirazulislam.shourov](https://www.facebook.com/mirazulislam.shourov)

---

## 📝 License

This project is free to use for educational purposes.

---

⭐️ If you like this project, please give it a star on GitHub!

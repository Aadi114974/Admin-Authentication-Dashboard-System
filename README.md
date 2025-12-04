🚀 Admin Authentication & Dashboard System

A full-stack admin panel built using Next.js (App Router), NextAuth, Zustand, Material UI (MUI), and DummyJSON API to demonstrate secure authentication, data fetching, pagination, filtering, and responsive admin dashboards.

📌 Project Overview

This project is a fully functional Admin Authentication and Dashboard Application designed to manage users and products.
It includes:

🔐 Secure Login System

👤 Users Management

🛍 Products Management

🔎 Searching & Filtering

📱 Responsive Admin UI

The project integrates DummyJSON APIs for authentication, users, and products and uses NextAuth for session handling with JWT-based authentication.

🧩 Features
🔐 1. Authentication Module

API: POST https://dummyjson.com/auth/login

Admin login using credentials

NextAuth Credentials Provider

JWT-based authentication

Token stored in Zustand + optional localStorage

Redirect after login

Protected dashboard routes

Session management with secure callbacks

👤 2. Users Module
APIs Used

GET https://dummyjson.com/users?limit=10&skip=0

GET https://dummyjson.com/users/search?q=...

GET https://dummyjson.com/users/{id}

Features

Paginated user list

Search users by name/email/keyword

Responsive table UI with MUI

Single user profile page

Back navigation

View details like:

🛒 3. Products Module
APIs Used

GET https://dummyjson.com/products?limit=10&skip=0

GET https://dummyjson.com/products/search?q=...

GET https://dummyjson.com/products/category/{category}

GET https://dummyjson.com/products/{id}

Features

Paginated products list

Search products

Category filter dropdown

MUI grid layout with cards

Product details page with:

Image carousel

Description

Specifications

Price, rating, category

🛠 Tech Stack
Frontend

Next.js 14+ (App Router)

React 19

Material UI (MUI)

Tailwind CSS (optional)

State Management

Zustand

Authentication

NextAuth.js

JWT token callbacks

Credential provider

API

DummyJSON REST API

📁 Project Folder Structure
admin-auth/
│── app/
│   ├── login/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── users/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│   └── api/
│       └── auth/[...nextauth]/route.ts
│
│── lib/
│   ├── api/
│   │   ├── auth.ts
│   │   ├── users.ts
│   │   └── products.ts
│
│── store/
│   └── authStore.ts
│
│── public/
│── package.json
│── README.md

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/admin-auth.git
cd admin-auth

2. Install dependencies
npm install

3. Add Environment Variables

Create .env.local:

NEXTAUTH_SECRET=yourSecretKeyHere
NEXTAUTH_URL=http://localhost:3000

4. Start Development Server
npm run dev


Visit:
👉 http://localhost:3000

🔐 Test Admin Login (Dummy JSON)

Dummy credentials:

username: kminchelle
password: 0lelplR

🎯 Learning Outcomes

This project demonstrates your ability to:

Build full-stack authentication systems

Securely manage sessions via NextAuth

Implement global state using Zustand

Integrate real APIs for CRUD operations

Create responsive dashboards with MUI

Work with Next.js App Router

Build modular and scalable frontend architecture

🚀 Future Improvements

Role-based access control

Edit/add/delete users & products

Dark/light theme toggle

Data visualization using charts

Server actions with Next.js

⭐ Author

AADITYA RAAZ
Full Stack Developer | Next.js | React | Node.js

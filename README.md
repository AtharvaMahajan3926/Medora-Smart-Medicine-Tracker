<div align="center">

<br/>

<img src="https://img.shields.io/badge/-%F0%9F%92%8A%20MEDORA-00b894?style=for-the-badge&labelColor=000000&color=00b894" height="40"/>

# Medicine Availability Tracker

> *Find the medicine you need, at the pharmacy nearest to you — instantly.*

<br/>

[![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Python](https://img.shields.io/badge/Python_3.10+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/JWT_Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://medora-smart-medicine-tracker.vercel.app)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black)](https://medora-smart-medicine-tracker.onrender.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

<br/>

### 🌐 Live Demo

| Service | URL |
|---|---|
| 🖥️ **Frontend** | [medora-smart-medicine-tracker.vercel.app](https://medora-smart-medicine-tracker.vercel.app) |
| ⚙️ **Backend API** | [medora-smart-medicine-tracker.onrender.com](https://medora-smart-medicine-tracker.onrender.com) |
| 📖 **API Docs** | [medora-smart-medicine-tracker.onrender.com/docs](https://medora-smart-medicine-tracker.onrender.com/docs) |

<br/>

> 📸 **App Preview**

![Medora App Preview](https://raw.githubusercontent.com/AtharvaMahajan3926/Medicine_availability_tracker/main/assets/app-preview.png)

<br/>

> 🏗️ **Architecture**

![Medora Architecture](https://raw.githubusercontent.com/AtharvaMahajan3926/Medicine_availability_tracker/main/assets/architecture.png)

<br/>

</div>

---

## 🩺 What is Medora?

**Medora** is a real-time medicine availability platform built for patients who are tired of calling pharmacy after pharmacy just to find out a medicine is out of stock.

With Medora, you simply search for a medicine — and instantly see **which pharmacies near you have it**, **how much stock is left**, and **how to get there**. You can even **reserve it online** before you leave home.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 👤 For Patients
- 🔍 Search any medicine by name
- 🗺️ See nearby pharmacies on a live map
- 🟢 Real-time stock status (In Stock / Low / Out)
- 📍 GPS-based proximity sorting
- 🛒 Reserve medicines with a QR booking token
- 🚗 Turn-by-turn driving directions (OSRM)
- 📞 One-tap call to pharmacy

</td>
<td width="50%">

### 🏥 For Pharmacies & Admins
- 📦 Real-time inventory management
- 💰 Update medicine prices instantly
- 📋 View and manage incoming bookings
- 🔐 Role-based secure login
- 👑 Admin panel for full system control
- 📊 Dashboard analytics overview

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 + Vite | UI framework and lightning-fast bundler |
| Tailwind CSS | Utility-first responsive styling |
| React-Leaflet + OpenStreetMap | Interactive map rendering |
| OSRM API | Open-source routing & directions |
| Lucide React | Icon library |

### Backend
| Technology | Purpose |
|---|---|
| FastAPI (Python) | High-performance async REST API |
| Motor | Async MongoDB driver |
| Pydantic v2 | Data validation and schema models |
| Uvicorn | ASGI server |

### Database & Auth
| Technology | Purpose |
|---|---|
| MongoDB Atlas | Cloud NoSQL document database |
| JWT (JSON Web Tokens) | Stateless role-based authentication |
| Bcrypt | Secure password hashing |

### Deployment
| Service | Purpose |
|---|---|
| Vercel | Frontend hosting with auto-deploy |
| Render | Backend (FastAPI) hosting |
| MongoDB Atlas | Cloud database (M0 free tier) |

---

## 📂 Project Structure

```
Medicine_availability_tracker/
│
├── 📁 backend/
│   ├── main.py              # FastAPI app entry point
│   ├── models.py            # Pydantic schemas
│   ├── auth.py              # JWT + Bcrypt logic
│   ├── database.py          # MongoDB Motor connection
│   ├── email_utils.py       # Email notification helpers
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── admin_routes.py      # Admin control routes
│   │   ├── auth_routes.py       # Auth (signup/signin)
│   │   ├── booking_routes.py    # Booking + QR token generation
│   │   ├── inventory_routes.py  # Inventory management routes
│   │   └── search_routes.py     # Medicine search + Haversine logic
│   ├── scripts/
│   │   ├── seed.py          # Database seeder
│   │   └── test_db.py       # DB connection test
│   └── requirements.txt
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/common/
│   │   │   ├── MotionContainer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Skeleton.css
│   │   │   └── Skeleton.jsx
│   │   ├── 📁 data/
│   │   │   └── data.js
│   │   ├── 📁 pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── LandingPage.jsx
│   │   │   ├── PharmacistDashboard.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   └── UserDashboard.jsx
│   │   ├── 📁 services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── 📁 public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── 📁 assets/               # Screenshots for README
│   ├── app-preview.png
│   └── architecture.png
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- **Node.js** ≥ 18.0
- **Python** ≥ 3.10
- **MongoDB** running locally or on [Atlas](https://www.mongodb.com/atlas)

---

### 1️⃣ Clone the repo

```bash
git clone https://github.com/AtharvaMahajan3926/Medicine_availability_tracker.git
cd Medicine_availability_tracker
```

---

### 2️⃣ Backend Setup

```bash
cd backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
```

Edit `.env`:
```env
MONGO_URI=mongodb://localhost:27017/medora
JWT_SECRET=your_secret_key_here
JWT_EXPIRE_MINUTES=60
```

Start the server:
```bash
uvicorn main:app --reload --port 8000
```

> 📖 Swagger docs at `http://localhost:8000/docs`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install

# Configure environment
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_BASE_URL=http://localhost:8000
```

Start the dev server:
```bash
npm run dev
```

> 🌐 App runs at `http://localhost:5173`

---

## ☁️ Deployment

Medora is fully deployed on free-tier cloud services.

```
User Browser
      ↓  HTTPS
Vercel — React + Vite frontend
      ↓  REST API calls
Render — FastAPI + Uvicorn backend
      ↓  Motor (async driver)
MongoDB Atlas — M0 free cluster
```

### Frontend — Vercel
- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable:
  ```
  VITE_API_BASE_URL = https://medora-smart-medicine-tracker.onrender.com
  ```

### Backend — Render
- Root directory: `backend`
- Build command: `pip install -r requirements.txt`
- Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- Environment variables:
  ```
  MONGO_URI          = mongodb+srv://<user>:<pass>@cluster.mongodb.net/medora
  JWT_SECRET         = your_secret_key
  JWT_EXPIRE_MINUTES = 60
  ```

### Database — MongoDB Atlas
- Free M0 cluster (512MB)
- Region: AWS Mumbai (ap-south-1)
- Network access: `0.0.0.0/0`

> ⚠️ **Render cold starts:** Free tier sleeps after 15 min of inactivity. Use [cron-job.org](https://cron-job.org) to ping `https://medora-smart-medicine-tracker.onrender.com/docs` every 10 minutes to keep it warm.

---

## 🔑 Demo Accounts

| Role | Email | Password |
|---|---|---|
| 👑 **Admin** | admin@medora.com | admin123 |
| 🏥 **Pharmacist** | medplus@pharmacy.com | pharma123 |
| 👤 **Patient** | *(create via Sign Up)* | — |

---

## 🔄 How It Works

```
User searches "Paracetamol"
        ↓
Backend queries MongoDB Atlas for matching medicines
        ↓
Haversine formula ranks pharmacies by distance to user GPS
        ↓
Map renders color-coded pins:
    🟢 In Stock  (≥10 units)
    🟡 Low Stock (1–9 units)
    🔴 Out of Stock
        ↓
User clicks "Book" → selects quantity → confirms
        ↓
Backend creates a 30-min hold + generates unique QR token
        ↓
User shows QR at pharmacy counter → pharmacist scans → done ✅
```

---

## 📡 API Reference

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/auth/signup` | Register new user | ❌ |
| `POST` | `/auth/signin` | Login, receive JWT | ❌ |
| `GET` | `/medicines/search` | Search + proximity sort | ✅ |
| `POST` | `/bookings` | Create medicine booking | ✅ User |
| `GET` | `/bookings/{id}` | Get booking + QR token | ✅ User |
| `GET` | `/pharmacist/inventory` | View pharmacy stock | ✅ Pharmacist |
| `PUT` | `/pharmacist/stock/{id}` | Update stock / price | ✅ Pharmacist |
| `GET` | `/admin/users` | List all users | ✅ Admin |
| `GET` | `/admin/pharmacies` | List all pharmacies | ✅ Admin |
| `DELETE` | `/admin/users/{id}` | Remove a user | ✅ Admin |

> 📖 Full interactive docs: [medora-smart-medicine-tracker.onrender.com/docs](https://medora-smart-medicine-tracker.onrender.com/docs)

---

## 🗺️ Map Legend

| Marker | Meaning |
|---|---|
| 🔵 Blue | Your current location |
| 🟢 Green | In stock (≥ 10 units) |
| 🟡 Yellow | Low stock (1–9 units) |
| 🔴 Red | Out of stock |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
```bash
git checkout -b feature/amazing-feature
```
3. Commit your changes
```bash
git commit -m "feat: add amazing feature"
```
4. Push and open a Pull Request
```bash
git push origin feature/amazing-feature
```

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

**Built with ❤️ by [AtharvaMahajan3926](https://github.com/AtharvaMahajan3926)**

*If this project helped you, please consider giving it a ⭐*

</div>

<div align="center">

<br/>

<img src="https://img.shields.io/badge/-%F0%9F%92%8A%20MEDORA-00b894?style=for-the-badge&labelColor=000000&color=00b894" height="40"/>

# Medicine Availability Tracker

> *Find the medicine you need, at the pharmacy nearest to you — instantly.*

<br/>

[![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Python](https://img.shields.io/badge/Python_3.10+-3776AB?style=flat-square&logo=python&logoColor=white)](https://python.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JWT](https://img.shields.io/badge/JWT_Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

<br/>

<img src="https://github.com/user-attachments/assets/d8b7b565-59d7-4040-a4b6-80f2c99d2668" alt="Medora App Preview" width="90%" />

<br/><br/>

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
| MongoDB | NoSQL document database |
| JWT (JSON Web Tokens) | Stateless role-based authentication |
| Bcrypt | Secure password hashing |

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
│   ├── routes/
│   │   ├── medicines.py     # Medicine search + Haversine logic
│   │   ├── bookings.py      # Booking + QR token generation
│   │   ├── pharmacist.py    # Inventory management routes
│   │   └── admin.py         # Admin control routes
│   └── requirements.txt
│
├── 📁 src/
│   ├── 📁 components/       # Reusable UI components
│   ├── 📁 pages/
│   │   ├── UserDashboard.jsx
│   │   ├── PharmacistDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── SignIn.jsx
│   │   └── SignUp.jsx
│   ├── data/data.js         # Categories and static config
│   ├── api.js               # API call helpers
│   └── main.jsx             # App root
│
├── 📁 public/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

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

> 📖 Swagger API docs available at `http://localhost:8000/docs`

---

### 3️⃣ Frontend Setup

```bash
# From project root
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
Backend queries MongoDB for matching medicines
        ↓
Haversine formula ranks pharmacies by distance to user GPS
        ↓
Map renders color-coded pins:
    🟢 In Stock (≥10 units)
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

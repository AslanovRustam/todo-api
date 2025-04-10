# 📝 NestJS To-Do API

A full-featured RESTful API for managing tasks built with **NestJS**, **MongoDB**, and **Mongoose**. Includes full CRUD operations, filtering, pagination, search, and auto-generated Swagger documentation.

---

## 📦 Features

- ✅ Create, Read, Update, Delete (CRUD) tasks
- 🔍 Filter tasks by completion status
- 🧭 Search tasks by name
- 📄 Pagination support
- 📚 Swagger API documentation
- 🌱 Built with NestJS and Mongoose
- 🔒 Validation using `class-validator`
- 📁 Clean and scalable project structure

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
clone the repository
cd nestjs-todo-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a .env file in the root:

```bash
DATABASE_USER="your mongo database path"
```

### 4. Run the Development Server

```bash
npm run start:dev
```

### 5. Test the API

You can use Swagger to test and explore the API:

📚 Open: http://localhost:3000/api

### 6. Test the API

```bash
src/
│
├── task/
│   ├── dto/                 # Create/Update/Query DTOs
│   ├── task.controller.ts   # Routes
│   ├── task.service.ts      # Business logic
│   ├── task.module.ts
│
├── schemas/
│   └── task.schema.ts       # Mongoose model
│
├── app.module.ts
├── main.ts                  # Swagger setup
```

### 6. API Endpoints Overview

```bash
Method     Endpoint         Description
GET	       /tasks	        Get all tasks
GET	       /tasks/:id	    Get task by ID
POST	     /tasks	        Create new task
PUT	       /tasks/:id	    Update task
DELETE	   /tasks/:id	    Delete task
```

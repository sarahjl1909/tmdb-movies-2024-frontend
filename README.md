## 🛠️ Requirements

- **Node.js**
- **Docker**

## 🚀 How to Start the Application

## Start backend

Enter the backend folder and compile the following commands:
remeber you need install docker.

#### Comand to build the aplication

```
docker build -t my-movie-api .
```

#### Comand to start the aplication

```
docker run -d -p 5000:5000 --name movie-api-container my-movie-api
```

#### If you want see logs on terminal use this:

```
docker run -p 5000:5000 --name movie-api-container my-movie-api
```

## Start Frontend

You need to start at the root of the project and
do the following commands:

```
npm i
```

```
npm run dev
```

Acess you localhost on port 5173 in your browser:
http://localhost:5173/

## 🚀 Technologies

This project was developed using React for the frontend, because it is easy to use and because I already had experience with it during my studies at university.

The backend API was developed using Python Flask. I chose Flask because of my professional experience working with Python and because Flask makes it easy to generate a fast API.

I used Docker so that there would be no problems running it on other computers.

## 🗂️ Folder Structure

├── public/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Public static files accessible by the browser (favicon, images, etc.) <br>
├── src/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Main source code of the application <br>
│ ├── assets/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Static assets such as images, icons, fonts used in the UI <br>
│ ├── components/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Reusable UI components (View layer) <br>
│ ├── pages/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Application pages corresponding to different routes (View + Controller) <br>
│ ├── routes/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Route definitions and navigation logic (Controller) <br>
│ ├── services/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Data-fetching and API communication logic (Model) <br>
│ ├── App.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Root component of the application <br>
│ ├── main.tsx &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Application entry point with Vite <br>

## 🧩 Design Patterns

In this project, I chose to use the MVC pattern because it is one of the best known and most used architectures for small and medium-sized projects.

**Model:**

- src/services/: Handles data access, API requests, and business logic.

**View:**

- src/components/: Contains reusable visual components.

- src/pages/: Represents UI screens and manages layout.

**Controller:**

- src/routes/: Manages navigation, URL mapping, and page rendering logic

# Requirements

- Node
- Docker

# How to start aplication

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

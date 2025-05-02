## Requirements

Docker must be installed

## File Structure

├── app.py # Main Flask API <br>
├── process.py # Data processing script <br>
├── data.csv # Dataset used by the API <br>
├── Dockerfile # Docker build configuration <br>

## How to Use

### Comand to build the aplication

```
docker build -t my-movie-api .
```

### Comand to start the aplication

```
docker run -d -p 5000:5000 --name movie-api-container my-movie-api
```

### If you want see logs on terminal use this:

```
docker run -p 5000:5000 --name movie-api-container my-movie-api
```

# api endpoints

### Get movies

http://localhost:5000/movies

### Get all information about a movie by id

http://localhost:5000/detail/278

### Select the page of all movies

http://127.0.0.1:5000/movies?page=2

### Select the page and the quantity of items per page

http://localhost:5000/movies?page=1&per_page=25

### To search for movies in the entire dataset

http://localhost:5000/search/{word}

def chooseMovies(flight_length, movie_lengths):

    movies = set()

    for movie in movie_lengths:
        if flight_length - movie in movies:
            return True
        else:
            movies.add(movie)

    return False


flight_length = 400
movie_lengths = [500, 200, 300]

print(chooseMovies(flight_length, movie_lengths))

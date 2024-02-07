class Movie
{
    constructor(title,studio,rating='PG')
    {
        this.title = title,
        this.studio = studio,
        this.rating = rating
    }
    getPG(movie)
    {
         return [`Title:${movie.title},Studio:${movie.studio},Rating:${movie.rating}`];
    }
}

let film = new Movie('Casino Royale','Eon Productions');
console.log(film.getPG(film));
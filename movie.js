//1) Movie - Class

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.defaultRating = "PG-13";
        this.rating = (rating !== undefined) ? rating : this.defaultRating;// "PG" as default when no rating is provided.
    }
    getPG() {
        return ` Movie  : ${this.title}\n Studio : ${this.studio}\n Rating : ${this.rating}`
    }
}
let movie1 = new Movie("Dear Zindagi", "Hope Productions","PG-13");
console.log(movie1.getPG());


// output ----------------------------------

// Movie  : Dear Zindagi
// Studio : Hope Productions
// Rating : PG-13



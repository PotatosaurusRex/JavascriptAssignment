let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
    toString() {
        return `${this.title}, rating of ${this.rating}, havewatched: ${this.haveWatched}`;
    }
}


//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie was added");
}

function askMovie() {
    var title = prompt("Title of movie? ");
    var rating = prompt("Rating of movie? ");
    var askWatched = prompt("Have you watched it yet? (yes or no)");
    var haveWatched = askWatched == "yes" ? true : false;
    let movieToAdd = new Movie(title, rating, haveWatched);
    addMovie(movieToAdd);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    let count = 0;
    console.log("Printing all movies....");
    for (let i = 0; i < allMovies.length; i++) {
        console.log(allMovies[i].toString());
        count++;
    }
    console.log("You have " + count + " movies in total.");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    let count = 0;
    console.log("printing movie that has a rating higher than " + rating);
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            console.log(allMovies[i].toString());
            count++;
        }
    }
    console.log("In total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let changeMov = allMovies.find(name => name.title == title);
    if (changeMov != undefined) {
        changeMov.haveWatched = !changeMov.haveWatched;
        console.log("changing the status of the movie...");
    } else {
        console.log("Movie not found");
    }
}

function askChange() {
    let title = prompt("Enter title of movie to change watch: ");
    let changeMov = allMovies.find(name => name.title == title);
    if (changeMov != undefined) {
        changeMov.haveWatched = !changeMov.haveWatched;
        //alert(`${changeMov.title} has changed watch condition. Display again to view changes`);
        displayMovies();
        alert(`${changeMov.title} has changed watch condition.`);
    } else {
        alert(`Movie not found`);
    }
}

function displayMovies() {
    let out = '';
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        out += allMovies[i].toString() + "<br><br>";
        count++;
    }
    out += `You have ${count} movies in total`;
    document.getElementById('movies').innerHTML = out;
}


////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);
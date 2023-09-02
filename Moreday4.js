//objects in javascript are date structures that allow you to store
//information in key-value pairs

//example object: contacts

/*let contacts = {
    "John" : "555-1234",
    "Susie" : "234-0098",
    "Mark" : "245-3323",
}*/

/*console.log(contacts);
//look things up in objects

//look up Mark's number and store as a separate variable.

let marksNumber = contacts["Mark"];

console.log("Marks number"), Marksnumber;*/

//Suppose you have a terrible business idea and decide to open a video rental store
//Create a movie object that stores the followng properties for the movie
//title, releaseYear, rating, numCopies

const movie1 = {
    title : "Barbie",
    releaseYear: "2023",
    rating: "PG-13",
    numCopies : 2 ,
}
const movie2 = {
    title : "Ninja Turtles",
    releaseYear : "2023",
    rating : " PG",
    numCopies : 2,
}

//console.log(movie1)

//print out a statement summarizing the movie info
//E.g "Barbie was released in 2023 and has a PG-13 rating. We have 3 copies."

/*let summary1 = `${movie1.title} was released in ${movie1.releaseYear} and has a ${movie1.rating}. We have ${movie1.numCopies} copies.`
let summary2 = `${movie2.title} was released in ${movie2.releaseYear} and has a ${movie2.rating}. We have ${movie2.numCopies} copies.`
console.log(summary1)
console.log(summary2)*/

let inventory = [movie1, movie2];

//Write a function that lets people check out a movie by giving its title
//Find the movie and decrease the number of copies by 1

function rentMovie(title){
    //loop through the movies in the inventory
        for (let movie of inventory) {
            if (movie.title.toLowerCase() == title.toLowerCase()){
                //check if any cpies are available
                if(movie.numCopies > 0){

            
                //decrease the movies copies by 1 and return
                movie.numCopies--;
                console.log("Great, here's your movie! Please Return in 15 minutes.");
                return;
                } else{
                console.log("Sorry all copies are rented currently");
            }
        
        //if loop finishes without ever returning, that means we don't have the movie
        console.log("Sorry we don't have this movie.");       
        }
    }
}

rentMovie("Barbie");
rentMovie("Ninja Turtles");
rentMovie("Barbie");
rentMovie("Ninja Turtles");
rentMovie("Ninja Turtles");
rentMovie("Barbie");
rentMovie("Nacho Libre");
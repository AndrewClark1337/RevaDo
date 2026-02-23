//types can create a union between multiple types
type StringOrNumber = string | number;
type ID = number;


//Extending: 
interface User {
    name: string
}

interface Admin extends User {
    role: string
}
// Admin type now includes fields from User interface too
let admin: Admin ={
    name: "darth vader",
    role: "sith lord"
}


type Movie ={
    name: string,
    rating: number
}

type HorrorMovie = Movie & {
    numScreams: number
}
let horrorMovie: HorrorMovie = {
    name: "It",
    rating: 8,
    numScreams: 10
}
//interfaces can be merged
interface Song{
    title: string,
    artist: string
}

interface Song{
    genre: string
}

//this object will be expected to have all the fields from both interfaces
let song: Song = {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock"
}
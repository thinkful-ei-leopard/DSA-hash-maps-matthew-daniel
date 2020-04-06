const HashMap = require('./hashmap')

function main() {
    let lotr = new HashMap();
    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "TreeBeard");
    // console.log(lotr);
    // console.table(lotr);
    // console.log(lotr.get("Hobbit"))
}

main()

function removeDupes(string) {
    // returns string with only first instance of dupe
    // first split each character as key into hash map to elim dupes
    let map = new HashMap();
    let newString = '';
    for (let i=0; i < string.length; i++) {
        if (!map.has(string[i])) {
            map.set(`${string[i]}`, `${string[i]}`);
            newString += string[i];
        }
       
    }
    return newString;
    // map._hashTable.forEach(entry => console.log(entry.value))
}

console.log(removeDupes('google is a fun search application woohoo'))

function palindrome(string) {
    let map = new HashMap();
    // loop to make string into all permutations in a hash map
    

    // check to see if any of them is a palindrome
}

/*
Imagine you are working on an application that provides 
movie streaming facility to customers in flights.
Users on longer flights like to start a second movie right when their first one ends, 
but they complain that the plane usually lands before they can see the ending. 
So you're building a feature for choosing two movies whose total 
runtimes will equal the exact flight length.
Write a function that takes an integer flight_time (in minutes) and a 
list of integers movie_lengths (in minutes) and returns a boolean indicating 
whether there are two movies equal to the flight_time.
When building your function:
Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory - O(n)
You are allowed to use any built in functions or class necessary as long as 
you are optimizing for runtime
*/ 
function movies (flight_time, movie_lenghts){
    let firstMovie, secondMovie = 0;
    let movieMap = new Map();
    for(let i=0; i<movie_lenghts.length; i++){
        firstMovie = movie_lenghts[i]           // 210
        secondMovie = flight_time - firstMovie  //300 - 210 = 90 
        if(movieMap.has(secondMovie)) {
            return true;
        }
        movieMap.set(firstMovie)
    }
    return false
}
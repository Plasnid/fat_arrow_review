//here we have an array
const weirdThings = [
    'vegan zombies', 
    'shampoo for bald people', 
    'contact lens box instructions in brail', 
    'people with prosthetic legs and real feet',
    'tow away zones that actually tow away the whole area',
    'scuba gear for horses'
];

// * we can iterate through the array with a function
const oddThings = weirdThings.map(function(thing){
    return `${thing} is something you don't see every day`;
});

console.log(oddThings);

//we can also do this in arrow functions, but in 1 line instead of 3
//arrow functions have an implicit return, no need to actually write return
const oddThings2 = weirdThings.map( (thing) => `${thing} happens down by the bay` );
console.log(oddThings2);

//we can also declare regular functions using arrow functions as functions expressions
const greetMe = (myName) => {console.log(`Hey there ${myName}! How are you?`)};
greetMe("Stuart");

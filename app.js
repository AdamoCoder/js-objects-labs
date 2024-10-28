const pokemon = require('./data.js')
const game = {
  party: [
    // {pokemon: 'Bulbasaur'},
    // {pokemon: 'Charmander'},
    // {pokemon: 'Squirtle'},
    // {pokemon: 'Pikachu'},
  ],

  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}
//  console.dir(pokemon, { maxArrayLength: null }) //Exercise 1
const pokemonName = ['Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu']
// console.log('Bulbasaur', 'Charmander', 'Squirtle', 'Pikachu')
// console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:*/
game.difficulty = ['easy'];
// console.log(game.difficulty)
// console.log(game)
/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/
game.party = [
  {pokemonName: 'Charmander', type: 'fire', hp: 39, starter: true}
]
// console.log(game)
/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push = [
  {pokemonName: 'Bulbasaur', type: 'grass', hp: 45, starter: true},
  {pokemonName: 'Squirtle', type: 'water', hp: 44, starter: true},
  {pokemonName: 'Pikachu', type: 'electric', hp: 35, starter: true}
]
// console.log(game)
/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

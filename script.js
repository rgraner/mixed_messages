const drinks = ['water', 'wine', 'coca-cola', 'vodka']
const actions = ['danced', 'kissed', 'laughed', 'made love']
const complement = ['a princess', 'a machine', 'the best', 'the only one']

let randomIdx1 = Math.floor(Math.random() * drinks.length)
let randomIdx2 = Math.floor(Math.random() * actions.length)
let randomIdx3 = Math.floor(Math.random() * complement.length)

let drink = drinks[randomIdx1]
let action = actions[randomIdx2]

console.log(`She wants ${drink}!`)
console.log(`She drank ${drink} and ${action}!`)
console.log(`She drank ${drink} and ${action} as if she was ${complement[randomIdx3]}!`)
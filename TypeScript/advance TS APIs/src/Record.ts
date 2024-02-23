// ugly syntax for giving type to object that have key-value pair
type Players = {
    [key: string]: number
}

const players: Players = {
    "player1": 32,
    "player2": 34
}

// cleaner syntax using record
type newPlayers = Record<string, { age: number, name: string }>
const newplayers: newPlayers = {
    "player1": { age: 23, name: "Rohit" },
    "player2": { age: 32, name: "Virat" }
}
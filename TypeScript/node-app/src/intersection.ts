// intersection means we can combine multiple types/interfaces together
// `types` only let you do that interfaces can't!

type one = {
    name: string,
    startDate: Date
}

interface two {
    name: string,
    department: string
}

type TechLead = one & two;      // combination type

// usign that combination
const t: TechLead = {
    name: "thor",
    startDate: new Date(),
    department: "Tech"
}
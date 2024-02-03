import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

// selectors can dependant on atom or another selector
export const evenSelector = selector({
    key: "evenSelector",
    get: ({get})  => {
        const count = get(countAtom);        // setting dependancy of countAtom
        return count % 2 == 0;
    }
})

// Todo creation application with filtering logic
// todos, filter

// 2 input boxes (title, description) => atom
// button
// todos => atom
// filter (gym) => atom
// selector (the current set of todos)
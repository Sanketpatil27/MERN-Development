import { atomFamily, selectorFamily } from "recoil";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get: (id) => { 
            return async ({ get }) => {
              const response = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);   
              const data = await response.json();
              
              return data.todo;
            }
        }
    })
})
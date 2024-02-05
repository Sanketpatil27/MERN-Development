import { atomFamily, selectorFamily } from "recoil";

export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: selectorFamily({
        key: "todosSelectorFamily",
        get: (id) => { 
            return async ({ get }) => {
              await new Promise(r => setTimeout(r, 3000));        // artificial delay, to know loadable

              const response = await fetch(`https://sum-server.100xdevs.com/todo?id=${id}`);   
              const data = await response.json();
              return data.todo;
            }
        }
    })
})
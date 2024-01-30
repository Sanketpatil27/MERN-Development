## useCallback
- if we ever want to memoize a function we use useCallback

- we can also do this task with useMemo as well!
- useCallback is not about minimizing the amount of code that is run 
- useCallback is about not rerendering a child component, if the function does't need to change across renders
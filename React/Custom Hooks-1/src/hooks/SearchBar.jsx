import { useEffect, useState } from 'react';

function useDebounce(input, delay) {
    const [debounceVal, setDebounceVal] = useState(0);

    useEffect(() => {
      const val = setTimeout(() => {
        setDebounceVal(input);
      }, delay);
      
      return () => {
        clearTimeout(val);
      }
    }, [input, delay]);

    return debounceVal;
}


const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />

      <p>inputValue: { debouncedValue }</p>
    </>
  );
};

export default SearchBar;
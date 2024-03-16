import { useEffect, useState } from 'react'

export function useIsOnline() {
  const [IsOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, []);

  return IsOnline;
}
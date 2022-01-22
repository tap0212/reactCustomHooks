import  { useEffect, useState} from 'react'


const usePersistedState = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));
  const  getStorageValue = (key: string, defaultValue: any) => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      return  saved !== null ? JSON.parse(saved) : defaultValue;
    }
  }
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default usePersistedState



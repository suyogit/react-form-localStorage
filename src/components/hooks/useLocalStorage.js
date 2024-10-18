import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);
  useEffect(() => {
    const existingdata = JSON.parse(localStorage.getItem(key));
    if (existingdata) setData(existingdata);
    else localStorage.setItem(key, JSON.stringify(initialData));
  }, []);
  const updatelocalStorage = (newData) => {
    if (typeof newData === "function")
      localStorage.setItem(key, JSON.stringify(newData(data)));
    else localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };
  return [data, updatelocalStorage];
}

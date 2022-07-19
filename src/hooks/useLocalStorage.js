import { useState, useEffect } from "react";
// this hook is used to create and update items in localStorage

const useLocalStorage = (key, defaultvalue) => {
  const [Item, changeItem] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return window.localStorage.getItem(key);
    } else {
      window.localStorage.setItem(key, defaultvalue);
      return defaultvalue;
    }
  });
  useEffect(() => {
    window.localStorage.setItem(key, Item);
  }, [Item]);

  return { Item, changeItem };
};
export default useLocalStorage;

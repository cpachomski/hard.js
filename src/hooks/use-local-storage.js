import { useState } from "react";
import debounce from "lodash.debounce";

/**
 * useLocalStorage
 **/

export default (key, initialValue, debounceTime = 500) => {
  const [item, setInnerValue] = useState(() => {
    try {
      const val = window.localStorage.getItem(key);
      return val ? JSON.parse(val) : initialValue;
    } catch (err) {
      // if JSON.parse fails
      return initialValue;
    }
  });

  const setValue = debounce(val => {
    setInnerValue(val);
    window.localStorage.setItem(key, JSON.stringify(val));
  }, debounceTime);

  return [item, setValue];
};

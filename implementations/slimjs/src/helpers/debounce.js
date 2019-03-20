export function debounce (callback, time = 250) {
  let timeout;

  const debounced = function (...args) {
      if (timeout) {
          clearTimeout(timeout);
          timeout = null;
      }

      timeout = setTimeout(() => {
          callback(...args);
          clearTimeout(timeout);
          timeout = null;
      }, time);
  };

  debounced.cancel = () => {
      clearTimeout(timeout);
      timeout = null;
  };

  return debounced;
}
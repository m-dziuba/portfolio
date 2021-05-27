import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

import { DependencyList, RefObject, useEffect } from 'react';

const useClickOutside = (ref: RefObject<HTMLElement>, handler: () => void, checkDirectParent: boolean = false, deps?: DependencyList) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node) && (!checkDirectParent || !ref.current.parentElement?.isSameNode(event.target as Node))) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchdown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchdown', listener);
    };
  }, [ref, ...(deps || [])]);
};

export default useClickOutside;

import {useEffect} from 'react';

const usePageTransition = (pageRef) => {
  useEffect(() => {
    console.log('pre change', pageRef.current);
    pageRef.current.style.opacity = 1;
    return () => {
      if (pageRef.current) {
        pageRef.current.style.opacity = 0;
      }
    }
  }, []);
};
export default usePageTransition;
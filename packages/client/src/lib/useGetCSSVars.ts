import { useEffect, useState } from 'react';

export const useGetCSSVars = (type: string, arg: string): any => {
  const [root, setRoot] = useState<Element | null>();
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setRoot(document.querySelector(':root'));
    }
  }, []);

  return root ? getComputedStyle(root).getPropertyValue(`--${type}-${arg}`) || 'inherit' : 'inherit';
};

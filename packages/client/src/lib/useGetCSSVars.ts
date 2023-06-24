import { useEffect, useState } from 'react';

export const useGetCSSVars = (type: string, arg: string): any => {
  const [root, setRoot] = useState<Element | null>();
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setRoot(document.querySelector(':root'));
    }
  }, []);

  // eslint-disable-next-line max-len
  return root ? getComputedStyle(root).getPropertyValue(`--${type}-${arg}`) || 'inherit' : 'inherit';
};

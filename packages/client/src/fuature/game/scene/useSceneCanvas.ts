import { useEffect, useRef } from 'react';

import { drawSquare } from '../figure';

export const useSceneCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.style.overflow = 'hidden';
      }
    };

    const draw = () => {
      if (context) {
        const canvasWidth = canvas?.width || 0;
        const canvasHeight = canvas?.height || 0;

        drawSquare({ context, canvasWidth, canvasHeight });
      }
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', () => {
      resizeCanvas();
      draw();
    });

    return () => {
      window.removeEventListener('resize', () => {
        resizeCanvas();
        draw();
      });
    };
  }, []);

  return canvasRef;
};

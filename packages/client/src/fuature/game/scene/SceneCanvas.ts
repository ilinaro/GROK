import { useEffect, useRef } from 'react';

import ballImage from '../source/ball.png';
import { drawBall } from '../figure';

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

    const ball = new Image();
    ball.src = ballImage;

    const draw = () => {
      if (context) {
        const canvasWidth = canvas?.width || 0;
        const canvasHeight = canvas?.height || 0;

        drawBall({ ball, context, canvasWidth, canvasHeight });
      }
    };

    resizeCanvas();
    ball.onload = draw;

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

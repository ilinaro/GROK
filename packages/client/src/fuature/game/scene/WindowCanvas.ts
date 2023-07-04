import { useEffect, useRef } from 'react';

import { SceneCanvas } from './SceneCanvas';
import ballImage from '../source/ball.png';

export const WindowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ball = new Image();
    ball.src = ballImage;

    const sceneCanvas = new SceneCanvas();
    return sceneCanvas.init(canvas, ball);
  }, []);

  return canvasRef;
};

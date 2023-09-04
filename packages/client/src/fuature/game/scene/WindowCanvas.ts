import { setGameBonusAC, setGameLifeAC } from '@store/actions/gameAction';
import { useEffect, useRef, useState } from 'react';

import { SceneCanvas } from './SceneCanvas';
import ballImage from '../source/ball.png';
import { useAppDispatch } from '@store/hooks';

export const WindowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bonus, setBonus] = useState<number>(0);
  const [life, setLife] = useState<number>(0);
  const dispatch = useAppDispatch();

  setGameBonusAC(bonus);
  useEffect(() => {
    dispatch(setGameBonusAC(bonus));
    dispatch(setGameLifeAC(life));
  }, [bonus, life]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ball = new Image();

    ball.src = ballImage;

    const sceneCanvas = new SceneCanvas();
    return sceneCanvas.init(canvas, ball, setBonus, setLife);
  }, []);

  return canvasRef;
};

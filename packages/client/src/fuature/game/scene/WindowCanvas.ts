import { setGameBonusAC, setGameLifeAC, setGameScoreAC } from '@store/actions/gameAction';
import { useEffect, useRef, useState } from 'react';

import { SceneCanvas } from './SceneCanvas';
import ballImage from '../source/ball.png';
import { useAppDispatch } from '@store/hooks';

export const WindowCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bonus, setBonus] = useState<number | undefined>();
  const [life, setLife] = useState<number | undefined>();
  const [score, setScore] = useState<number | undefined>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setGameBonusAC(bonus));
    dispatch(setGameLifeAC(life));
    dispatch(setGameScoreAC(score));
  }, [bonus, life, score]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ball = new Image();

    ball.src = ballImage;

    const sceneCanvas = new SceneCanvas();
    return sceneCanvas.init(canvas, ball, setBonus, setLife, setScore);
  }, []);

  return canvasRef;
};

import { Color } from './interface';

type DrawSquareT = {
  context: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
};

export const drawSquare: React.FC<DrawSquareT> = ({ context, canvasWidth, canvasHeight }) => {
  const squareSize: number = Math.min(100, 100);
  const squareX: number = (canvasWidth - squareSize) / 2;
  const squareY: number = (canvasHeight - squareSize) / 2;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.fillStyle = Color.PINK;
  context.fillRect(squareX, squareY, squareSize, squareSize); // Рисуем квадрат

  return null;
};

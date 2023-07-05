type DrawBallT = {
  ball: HTMLImageElement;
  context: CanvasRenderingContext2D;
  canvasWidth: number;
  canvasHeight: number;
  posX: number;
  posY: number;
};

export const drawBall: React.FC<DrawBallT> = ({ ball, context, canvasWidth, canvasHeight, posX, posY }) => {
  const ballSize: number = Math.min(100, 100);
  const ballX: number = (canvasWidth - ballSize) / 2;
  const ballY: number = (canvasHeight - ballSize) / 2;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(ball, posX, posY);

  // context.fillStyle = Color.PINK;
  // context.fillRect(squareX, squareY, squareSize, squareSize); // Рисуем квадрат

  return null;
};

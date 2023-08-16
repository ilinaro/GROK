import Events from './Events';
import Player from './Player';
import { mapBlocks } from './../data/map';

export class SceneCanvas {
  private animationId = 0;
  private bonus = 0;
  private life = 0;

  init(
    canvas: HTMLCanvasElement | null,
    ball: HTMLImageElement,
    setBonus: React.Dispatch<React.SetStateAction<number>>,
    setLife: React.Dispatch<React.SetStateAction<number>>
  ) {
    if (!canvas) return;
    const context = canvas.getContext('2d');
    const canvasWidth = canvas.width || 0;
    const canvasHeight = canvas.height || 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.style.overflow = 'hidden';
    };

    resizeCanvas();
    const player = new Player(context, mapBlocks, ball, canvasWidth, canvasHeight);

    const events = new Events(player);
    const animate = () => {
      if (!context) return;
      this.animationId = window.requestAnimationFrame(animate);

      context.clearRect(0, 0, canvasWidth, canvasHeight);

      player.velocity.x = 0;
      if (events.keys.d.pressed) {
        player.velocity.x = 6;
      } else if (events.keys.a.pressed) {
        player.velocity.x = -6;
      }

      mapBlocks.forEach((mapBlock) => {
        mapBlock.draw(context); // Передаем контекст в метод draw
      });
      player.draw();
      player.update();
      setBonus(player.bonus);
      setLife(player.life);
    };

    animate();

    const cleanup = () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('keydown', events.keydownHandler);
      window.removeEventListener('keyup', events.keyupHandler);
      window.cancelAnimationFrame(this.animationId);
    };

    window.addEventListener('keydown', events.keydownHandler);
    window.addEventListener('keyup', events.keyupHandler);
    window.addEventListener('resize', resizeCanvas);

    return cleanup;
  }
}

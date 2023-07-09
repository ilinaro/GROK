import Events from './Events';
import Player from './Player';

export class SceneCanvas {
  private animationId = 0;
  init(canvas: HTMLCanvasElement | null, ball: HTMLImageElement) {
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
    const player = new Player(context, ball, canvasWidth, canvasHeight);
    const events = new Events(player)
    const animate = () => {
      console.log('animationId', this.animationId);
      if (!context) return;
      this.animationId = window.requestAnimationFrame(animate);
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      player.velocity.x = 0;
      if (events.keys.d.pressed) {
        player.velocity.x = 6;
      } else if (events.keys.a.pressed) {
        player.velocity.x = -6;
      }
      player.draw();
      player.update();
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

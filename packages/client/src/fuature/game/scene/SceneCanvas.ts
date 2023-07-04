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

    const keys = {
      w: {
        pressed: false,
      },
      a: {
        pressed: false,
      },
      d: {
        pressed: false,
      },
    };

    resizeCanvas();
    const player = new Player(context, ball, canvasWidth, canvasHeight);

    const keydownHandler = (event: KeyboardEvent) => {
      console.log('keydownHandler', event);
      switch (event.key) {
        // up
        case ' ':
        case 'w':
        case 'ArrowUp':
          if (player.velocity.y === 0) player.velocity.y = -20;
          break;
        // left
        case 'a':
        case 'ArrowLeft':
          keys.a.pressed = true;
          break;
        // right
        case 'd':
        case 'ArrowRight':
          keys.d.pressed = true;
          break;
      }
    };

    const keyupHandler = (event: KeyboardEvent) => {
      console.log('keyupHandler', event);
      switch (event.key) {
        // left
        case 'a':
        case 'ArrowLeft':
          keys.a.pressed = false;
          break;
        // right
        case 'd':
        case 'ArrowRight':
          keys.d.pressed = false;
          break;
      }
    };

    const animate = () => {
      console.log('animationId', this.animationId);
      if (context) {
        this.animationId = window.requestAnimationFrame(animate);
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        if (keys.d.pressed) {
          player.velocity.x = 4;
        } else if (keys.a.pressed) {
          player.velocity.x = -4;
        }
        player.draw();
        player.update();
      }
    };

    animate();

    const cleanup = () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('keydown', keydownHandler);
      window.removeEventListener('keyup', keyupHandler);
      window.cancelAnimationFrame(this.animationId);
    };

    window.addEventListener('keydown', keydownHandler);
    window.addEventListener('keyup', keyupHandler);
    window.addEventListener('resize', resizeCanvas);

    return cleanup;
  }
}

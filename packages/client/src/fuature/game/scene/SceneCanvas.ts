import Player from './Player';

export class SceneCanvas {
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
    ball.onload;
    const player = new Player(context, ball, canvasWidth, canvasHeight);

    function animate() {
      if (context) {
        window.requestAnimationFrame(animate);
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        if (keys.d.pressed) {
          player.velocity.x = 4;
        } else if (keys.a.pressed) {
          player.velocity.x = -4;
        }
        player.draw();
        player.update();
      }
    }

    animate();

    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        // up
        case ' ':
          if (player.velocity.y === 0) player.velocity.y = -20;
          break;
        case 'w':
          if (player.velocity.y === 0) player.velocity.y = -20;
          break;
        case 'ArrowUp':
          if (player.velocity.y === 0) player.velocity.y = -20;
          break;
        // left
        case 'a':
          keys.a.pressed = true;
          break;
        case 'ArrowLeft':
          keys.a.pressed = true;
          break;
        // right
        case 'd':
          keys.d.pressed = true;
          break;
        case 'ArrowRight':
          keys.d.pressed = true;
          break;
      }
    });

    window.addEventListener('keyup', (event) => {
      switch (event.key) {
        // left
        case 'a':
          keys.a.pressed = false;
          break;
        case 'ArrowLeft':
          keys.a.pressed = false;
          break;
        // right
        case 'd':
          keys.d.pressed = false;
          break;
        case 'ArrowRight':
          keys.d.pressed = false;
          break;
      }
    });
    window.addEventListener('resize', () => {
      resizeCanvas();
      ball.onload;
    });

    return () => {
      window.removeEventListener('resize', () => {
        resizeCanvas();
        ball.onload;
      });
    };
  }
}

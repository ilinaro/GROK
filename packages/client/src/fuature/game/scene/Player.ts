class Player {
  position: { x: number; y: number };
  width: number;
  height: number;
  ball: HTMLImageElement;
  canvasWidth: number;
  canvasHeight: number;
  sides: { bottom: number };
  velocity: { x: number; y: number };
  gravity: number;
  speed: number;
  maxSpeed: number;

  constructor(
    private context: CanvasRenderingContext2D | null,
    private mapBlocks: { draw(context: CanvasRenderingContext2D): unknown; position: { x: number; y: number } }[], // блоки столкновений
    ball: HTMLImageElement,
    canvasWidth: number,
    canvasHeight: number,

  ) {
    this.position = {
      x: canvasWidth / 2,
      y: canvasHeight / 2,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };
    this.speed = 0.4;
    this.gravity = 0.4;
    this.maxSpeed = 15;
    this.width = 110;
    this.height = 110;

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.ball = ball;
    this.ball.onload = () => {
      this.draw();
    };

    this.sides = {
      bottom: this.position.y + this.height,
    };
  }

  draw() {
    if (this.context) {
      this.context.globalCompositeOperation = 'destination-out';
      this.context.beginPath();
      this.context.arc(
        this.position.x + this.width / 2,
        this.position.y + this.height / 2,
        this.width / 2,
        0,
        2 * Math.PI,
        false
      );
      this.context.fill();
      this.context.closePath();

      this.context.globalCompositeOperation = 'source-over';
      this.context.drawImage(this.ball, this.position.x, this.position.y);

      this.context.lineWidth = 0.01;
      this.context.beginPath();
      this.context.arc(
        this.position.x + this.width / 2,
        this.position.y + this.height / 2,
        this.width / 2,
        0,
        2 * Math.PI,
        false
      );
      this.context.stroke();
      this.context.closePath();
    }
  }

  update() {
    // управление скростью
    if (this.velocity.x === 0) {
      this.speed = 0;
    }
    if (this.velocity.x > 0) {
      if (this.speed < this.maxSpeed) {
        this.speed = this.speed + 0.1;
      }
      this.position.x += this.speed + this.velocity.x;
    }
    if (this.velocity.x < 0) {
      if (this.speed < this.maxSpeed) {
        this.speed = this.speed + 0.1;
      }
      this.position.x += -this.speed + this.velocity.x;
    }
    // управление прыжком
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;
    // прямо здесь над нижней части окна
    if (this.sides.bottom + this.velocity.y < this.canvasHeight) {
      this.velocity.y = this.velocity.y + 0.3;
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

export default Player;

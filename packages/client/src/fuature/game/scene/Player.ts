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
  life: number;

  constructor(
    private context: CanvasRenderingContext2D | null,
    private mapBlocks: {
      type?: 'pin' | 'step' | 'map';
      used?: boolean;
      width: number;
      height: number;
      draw(context: CanvasRenderingContext2D): unknown;
      position: { x: number; y: number };
    }[], // блоки столкновений
    ball: HTMLImageElement,
    canvasWidth: number,
    canvasHeight: number
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
    this.life = 2;
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

    // this.position.x += this.velocity.x;

    // проверка горизонтальных столкновений
    for (let i = 0; i < this.mapBlocks.length; i++) {
      const mapBlock = this.mapBlocks[i];

      // столкновение справой стороны блока и леовй стороны игрока
      if (
        this.position.x <= mapBlock.position.x + mapBlock.width &&
        this.position.x + this.width >= mapBlock.position.x &&
        this.position.y + this.height >= mapBlock.position.y &&
        this.position.y <= mapBlock.position.y + mapBlock.height
      ) {
        if (this.mapBlocks[i].type === 'pin') {
          this.mapBlocks[i].type = 'map';
          this.mapBlocks[i].used = true;
          this.life = this.life - 1;
        }
        if (this.mapBlocks[i].type === 'step') {
          this.mapBlocks[i].used = true;
        }
        //  ведение по оси X влево
        if (this.mapBlocks[i].type === 'map' || this.mapBlocks[i].type === 'pin') {
          if (this.velocity.x < 0) {
            this.position.x = mapBlock.position.x + mapBlock.width + 1;
            break;
          }

          if (this.velocity.x > 0) {
            this.position.x = mapBlock.position.x - this.width - 1;
            break;
          }
        }
      }
    }

    // управление прыжком
    this.velocity.y = this.velocity.y + 0.3;
    this.velocity.y += this.gravity;
    this.position.y += this.velocity.y;
    // this.sides.bottom = this.position.y + this.height;
    // прямо здесь над нижней части окна
    for (let i = 0; i < this.mapBlocks.length; i++) {
      const mapBlock = this.mapBlocks[i];

      // столкновение сверху стороны блока и снизу стороны игрока
      if (
        this.position.x <= mapBlock.position.x + mapBlock.width &&
        this.position.x + this.width >= mapBlock.position.x &&
        this.position.y + this.height >= mapBlock.position.y &&
        this.position.y <= mapBlock.position.y + mapBlock.height
      ) {
        if (this.mapBlocks[i].type === 'pin') {
          this.mapBlocks[i].type = 'map';
          this.mapBlocks[i].used = true;
          this.life = this.life - 1;
        }
        if (this.mapBlocks[i].type === 'map' || this.mapBlocks[i].type === 'pin') {
          //  ведение по оси Y влево
          if (this.velocity.y < 0) {
            this.velocity.y = 0;
            this.position.y = mapBlock.position.y + mapBlock.height + 1;
            break;
          }

          if (this.velocity.y > 0) {
            this.velocity.y = 0;
            this.position.y = mapBlock.position.y - this.height - 1;
            break;
          }
        }
      }
    }
  }
}

export default Player;

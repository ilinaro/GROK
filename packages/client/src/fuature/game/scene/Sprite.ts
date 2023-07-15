type SpriteT = {
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  context: CanvasRenderingContext2D | null;
  source: string;
  loaded?: boolean;
};

export class Sprite {
  position: SpriteT['position'];
  image: HTMLImageElement;
  context: CanvasRenderingContext2D | null;
  loaded?: boolean;
  constructor({ context, position, source, loaded = false }: SpriteT) {
    this.context = context;
    this.position = position;
    this.image = new Image();
    this.image.onload = () => (this.loaded = true);
    this.image.src = source;
  }

  draw() {
    if (!this.context || !this.loaded) return;
    // this.context.clearRect(this.position.x, this.position.y, this.position.width, this.position.height);
    this.context.drawImage(this.image, this.position.x, this.position.y);
  }
}

export default Sprite;

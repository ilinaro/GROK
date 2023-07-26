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
  height: number;
  width: number;
};

export class Sprite {
  position: SpriteT['position'];
  image: HTMLImageElement;
  context: CanvasRenderingContext2D | null;
  loaded?: boolean;
  height?: number;
  width?: number;
  constructor({ context, position, source, loaded = false, height, width }: SpriteT) {
    this.context = context;
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
      this.width = width / 11; // 11 - количество кадров
      this.height = height;
    };
    this.loaded = false;
    this.image.src = source;
  }

  draw() {
    if (!this.context || !this.loaded) return;
    this.context.drawImage(this.image, this.position.x, this.position.y);
  }
}

export default Sprite;

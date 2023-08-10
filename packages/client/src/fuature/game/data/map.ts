import { Color } from '../interface';
import { mapLevel1 } from './source';
import pinImage from '../source/pin.png';
import pinMapImage from '../source/pin_map.png';
import stepImage from '../source/step.png';
import stepUsedImage from '../source/step_used.png';

function parse2D<T>(allArr: T[], sizeRow: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < allArr.length; i += sizeRow) {
    rows.push(allArr.slice(i, i + sizeRow)); // создание двумерного массива [][]
  }
  return rows;
}

export const parsedMap: number[][] = parse2D(mapLevel1, 64);

// Принимает положение блока столкновения, по x y и размер
const sizeX = 40;
const sizeY = 40;

export class MapBlock {
  position: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  type: 'map';
  constructor({ position, width, height }: { position: { x: number; y: number }; width: number; height: number }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.type = 'map';
  }
  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = Color.VIOLET;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export class StepBlock {
  position: {
    x: number;
    y: number;
  };
  loaded?: boolean;
  width: number;
  height: number;
  image: HTMLImageElement;
  imageUsed: HTMLImageElement;
  type: 'step';
  used: boolean;
  constructor({ position, width, height }: { position: { x: number; y: number }; width: number; height: number }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.imageUsed = new Image();
    this.image.onload = () => {
      this.loaded = true;
      this.width = 25;
      this.height = 40;
    };
    this.used = false;
    this.type = 'step';
    this.loaded = false;
    this.image.src = stepImage;
    this.imageUsed.src = stepUsedImage;
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.used ? this.imageUsed : this.image, this.position.x - 20, this.position.y - 50);
    context.stroke();
    context.lineWidth = 2;
    context.beginPath();
  }
}

export class PinBlock {
  position: {
    x: number;
    y: number;
  };
  loaded?: boolean;
  width: number;
  height: number;
  imagePIN: HTMLImageElement;
  imagePINB: HTMLImageElement;
  type: 'pin';
  used: boolean;
  constructor({ position, width, height }: { position: { x: number; y: number }; width: number; height: number }) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.imagePIN = new Image();
    this.imagePINB = new Image();
    this.imagePIN.onload = () => {
      this.loaded = true;
      this.width = 25;
      this.height = 40;
    };
    this.used = false;
    this.loaded = false;
    this.type = 'pin';
    this.imagePIN.src = pinImage;
    this.imagePINB.src = pinMapImage;
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.used ? this.imagePINB : this.imagePIN, this.position.x - 40, this.position.y - 50);

    context.stroke();
    context.lineWidth = 2;
    context.beginPath();
  }
}

export const mapBlocks: {
  draw(context: CanvasRenderingContext2D): unknown;
  position: { x: number; y: number };
  width: number;
  height: number;
}[] = []; // массив блоков столкновения

parsedMap.forEach((row, indexY) => {
  row.forEach((symbol, indexX) => {
    if (symbol === 1) {
      // добавление блоков столкновения в массив блоков столкновения
      mapBlocks.push(
        new MapBlock({
          position: {
            x: indexX * sizeX,
            y: indexY * sizeY,
          },
          width: sizeX,
          height: sizeY,
        })
      );
    }
    if (symbol === 3) {
      // добавление блоков столкновения в массив блоков столкновения
      mapBlocks.push(
        new PinBlock({
          position: {
            x: indexX * sizeX,
            y: indexY * sizeY,
          },
          width: sizeX,
          height: sizeY,
        })
      );
    }
    if (symbol === 2) {
      // добавление блоков столкновения в массив блоков столкновения
      mapBlocks.push(
        new StepBlock({
          position: {
            x: indexX * sizeX,
            y: indexY * sizeY,
          },
          width: sizeX,
          height: sizeY,
        })
      );
    }
  });
});

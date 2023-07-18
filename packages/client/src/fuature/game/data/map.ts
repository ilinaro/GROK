import { Color } from '../interface';
import { mapLevel1 } from './source';

function parse2D<T>(allArr: T[], sizeRow: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < allArr.length; i += sizeRow) {
    rows.push(allArr.slice(i, i + sizeRow)); // создание двумерного массива [][]
  }
  return rows;
}

export const parsedMap: number[][] = parse2D(mapLevel1, 64);

// Принимает положение блока столкновения, по x y и размер
const sizeX = 48;
const sizeY = 64;

export class MapBlock {
  position: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  constructor({ position, width, height }: { position: { x: number; y: number }; width: number; height: number }) {
    this.position = position;
    this.width = width;
    this.height = height;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = Color.VIOLET;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

export const mapBlocks: {
  draw(context: CanvasRenderingContext2D): unknown;
  position: { x: number; y: number };
  width: number,
  height: number,
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
  });
});

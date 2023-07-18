import { Buttons } from '../interface';
import Player from './Player';

class Events {
  keys: {
    w: {
      pressed: boolean;
    };
    a: {
      pressed: boolean;
    };
    d: {
      pressed: boolean;
    };
  };
  constructor(private player: Player) {
    this.keys = {
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
  }
  keyupHandler = (event: KeyboardEvent) => {
    // console.log('keyupHandler', event);
    switch (event.key) {
      case Buttons.W:
        this.keys.w.pressed = false;
        break;
      case Buttons.ARROW_UP:
        this.keys.w.pressed = false;
        break;
      // left
      case Buttons.A:
        this.keys.a.pressed = false;
        break;
      case Buttons.ARROW_LEFT:
        this.keys.a.pressed = false;
        break;
      // right
      case Buttons.D:
        this.keys.d.pressed = false;
        break;
      case Buttons.ARROW_RIGHT:
        this.keys.d.pressed = false;
        break;
    }
  };
  keydownHandler = (event: KeyboardEvent) => {
    // console.log('keydownHandler', event);
    switch (event.key) {
      // up
      case Buttons.SPACE:
      case Buttons.W:
      case Buttons.ARROW_UP:
        if (this.player.velocity.y === 0 || Math.abs(this.player.velocity.y) < 2) {
          this.player.velocity.y = -20;
        }
        this.keys.w.pressed = true;
        break;
      // left
      case Buttons.A:
      case Buttons.ARROW_LEFT:
        this.keys.a.pressed = true;
        break;
      // right
      case Buttons.D:
      case Buttons.ARROW_RIGHT:
        this.keys.d.pressed = true;
        break;
    }
  };
  
}

export default Events;

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
      // left
      case 'a':
        this.keys.a.pressed = false;
        break;
      case 'ArrowLeft':
        this.keys.a.pressed = false;
        break;
      // right
      case 'd':
        this.keys.d.pressed = false;
        break;
      case 'ArrowRight':
        this.keys.d.pressed = false;
        break;
    }
  };

  keydownHandler = (event: KeyboardEvent) => {
    // console.log('keydownHandler', event);
    switch (event.key) {
      // up
      case ' ':
      case 'w':
      case 'ArrowUp':
        if (this.player.velocity.y === 0) this.player.velocity.y = -20;
        break;
      // left
      case 'a':
      case 'ArrowLeft':
        this.keys.a.pressed = true;
        break;
      // right
      case 'd':
      case 'ArrowRight':
        this.keys.d.pressed = true;
        break;
    }
  };
}

export default Events;

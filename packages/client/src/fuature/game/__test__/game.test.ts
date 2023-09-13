import { describe, expect, beforeEach, it } from '@jest/globals';
import Player from '../scene/Player';
import { mapBlocks } from '../data/map';

describe('Player', () => {
  let player: Player;

  const canvasWidth = 800;
  const canvasHeight = 600;

  const ball = document.createElement('img');
  ball.width = 100;
  ball.height = 100;

  beforeEach(() => {
    player = new Player(null, mapBlocks, ball, canvasWidth, canvasHeight);
  });

  it('should move the ball', () => {
    player.velocity.x = 1;
    player.update();
    expect(player.position.x).toBeGreaterThan(100);
  });

  it('should handle collision with mapBlocks', () => {
    player.position = { x: 100, y: 100 };
    player.update();
    expect(player.position.x).toBe(100);
  });
});

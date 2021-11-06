import Snake from '../src/snake.js';

describe('Snake', () => {
  describe('#constructor', () => {
    test('creates the body parts in the right direction', () => {
      let snake = new Snake([0, 0], 'right');

      expect(snake.body).toEqual([{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]);
    });

    test('creates the body parts in the left direction', () => {
      let snake = new Snake([0, 0], 'left');

      expect(snake.body).toEqual([{ x: -0, y: 0 }, { x: -1, y: 0 }, { x: -2, y: 0 }]);
    });
  });
});

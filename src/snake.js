import Vector2d from "./vector2d";

export default class Snake {
  constructor(position, direction) {
    this.velocity = new Vector2d(0, 0);
    this.direction = direction;

    if (direction === 'left') {
      this.velocity.x = -1;
    } else if (direction === 'right') {
      this.velocity.x = 1;
    } else if (direction === 'up') {
      this.velocity.y = -1;
    } else if (direction === 'down') {
      this.velocity.y = 1;
    }

    this.body = [];

    for (let index = 0; index < 3; index++) {
      let part = new Vector2d(position[0], position[1]).add(this.velocity).multiply(index);

      this.body.push(part);
    }
  }

  draw(ctx) {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(this.x + 1, this.y + 1, this.width - 2, this.height - 2);
  }
}
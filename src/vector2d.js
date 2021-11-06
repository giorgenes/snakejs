export default class Vector2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  multiply(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
  }
}

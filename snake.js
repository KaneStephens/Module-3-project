function snake() {
  this.x = 240;
  this.y = 240;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 5;
  this.tail = [{ x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }];

  this.draw = function () {
    ctx.fillStyle = "#E6E6FA";

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1]
    }

    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width) {
      this.total = 5;
      this.tail = [{ x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }];
      this.x = 240;
      this.y = 240;
    }
    if (this.y > canvas.height) {
      this.total = 5;
      this.tail = [{ x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }];
      this.x = 240;
      this.y = 240;
    }
    if (this.x < 0) {
      this.total = 5;
      this.tail = [{ x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }];
      this.x = 240;
      this.y = 240;
    }
    if (this.y < 0) {
      this.total = 5;
      this.tail = [{ x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }];
      this.x = 240;
      this.y = 240;
    }
  }

  this.changeDirection = function (direction) {
    switch (direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  this.eat = function (snack) {
    if (this.x === snack.x && this.y === snack.y) {
      this.total++;
      return true
    }
    return false
  }

  this.checkCollision = function () {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.total = 5;
        this.tail = [{ x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }, { x: 240, y: this.y }];
        this.x = 240;
        this.y = 240;

      }
    }
  }

}

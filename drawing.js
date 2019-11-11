const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
  snake = new snake();
  snack = new snack();
  snack.randomLocation();



  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snack.draw();
    snake.update();
    snake.draw();

    if (snake.eat(snack)) {
      snack.randomLocation();
    }


    snake.checkCollision();
    document.querySelector(".score")
      .innerText = `Score: ${snake.total - 5}`;

  }, 200);
}());

window.addEventListener('keydown', ((e) => {
  const direction = e.key.replace('Arrow', '')
  snake.changeDirection(direction)
})); 
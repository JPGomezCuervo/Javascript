const MOVEMENTS = {
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
};

class Player {
  constructor(htmlElement, initialPosition) {
    this.initialPosition = initialPosition;
    this.player = document.querySelector(htmlElement);
    this.position = initialPosition;

    this.player.style.top = `${initialPosition.y}px`;
    this.player.style.left = `${initialPosition.x}px`;
    this.collisionPoints = {
      topLeft: { x: initialPosition.x, y: initialPosition.y },
      topRight: {
        x: initialPosition.x + this.player.offsetWidth,
        y: initialPosition.y,
      },
      bottomLeft: {
        x: initialPosition.x,
        y: initialPosition.y + this.player.offsetHeight,
      },
      bottomRight: {
        x: initialPosition.x + this.player.offsetWidth,
        y: initialPosition.y + this.player.offsetHeight,
      },
    };
  }

//   resetPosition() {
//     this.position = this.initialPosition;
//     this.player.style.top = `${this.position.y}px`;
//     this.player.style.left = `${this.position.x}px`;
//   };

//   resetCollisionPoints() {
//     this.collisionPoints = {
//       topLeft: { x: this.position.x, y: this.position.y },
//       topRight: {
//         x: this.position.x + this.player.offsetWidth,
//         y: this.position.y,
//       },
//       bottomLeft: {
//         x: this.position.x,
//         y: this.position.y + this.player.offsetHeight,
//       },
//       bottomRight: {
//         x: this.position.x + this.player.offsetWidth,
//         y: this.position.y + this.player.offsetHeight,
//       },
//     };
//   }
}

class Movement extends Player {
    constructor(htmlElement, initialPosition) {
        super(htmlElement, initialPosition);
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
      }
      

  handleKeyDown(event) {
    const key = event.key;

    switch (key) {
      case MOVEMENTS.UP:
        this.move(MOVEMENTS.UP);
        this.collisionPoints.topRight;
        break;

      case MOVEMENTS.DOWN:
        this.move(MOVEMENTS.DOWN);
        break;

      case MOVEMENTS.LEFT:
        this.move(MOVEMENTS.LEFT);
        break;

      case MOVEMENTS.RIGHT:
        this.move(MOVEMENTS.RIGHT);
        break;

      default:
        break;
    }
  }

  move(direction) {
    switch (direction) {
      case MOVEMENTS.LEFT:
        this.position.x -= 20;
        this.player.style.left = `${this.position.x}px`;
        this.collisionPoints.topRight.x -= 20;
        this.collisionPoints.topLeft.x -= 20;
        this.collisionPoints.bottomRight.x -= 20;
        this.collisionPoints.bottomLeft.x -= 20;

        console.log(this.collisionPoints.bottomLeft);
        this.checkCollision(MOVEMENTS.LEFT);

        break;

      case MOVEMENTS.RIGHT:
        this.position.x += 20;
        this.player.style.left = `${this.position.x}px`;
        this.collisionPoints.topRight.x += 20;
        this.collisionPoints.topLeft.x += 20;
        this.collisionPoints.bottomRight.x += 20;
        this.collisionPoints.bottomLeft.x += 20;

        this.checkCollision(MOVEMENTS.RIGHT);

        break;

      case MOVEMENTS.UP:
        this.position.y -= 20;
        this.player.style.top = `${this.position.y}px`;
        this.collisionPoints.topRight.y -= 20;
        this.collisionPoints.topLeft.y -= 20;
        this.collisionPoints.bottomRight.y -= 20;
        this.collisionPoints.bottomLeft.y -= 20;

        this.checkCollision(MOVEMENTS.UP);

        break;

      case MOVEMENTS.DOWN:
        this.position.y += 20;
        this.player.style.top = `${this.position.y}px`;
        this.collisionPoints.topRight.y += 20;
        this.collisionPoints.topLeft.y += 20;
        this.collisionPoints.bottomRight.y += 20;
        this.collisionPoints.bottomLeft.y += 20;

        this.checkCollision(MOVEMENTS.DOWN);

        break;

      default:
        break;
    }
  }
  checkCollision(name) {
    switch (name) {
      case MOVEMENTS.LEFT:
        if (this.collisionPoints.bottomLeft.x <= 0) {
            window.alert("¡Perdiste!");
          window.location.reload();
        }
        break;

      case MOVEMENTS.RIGHT:
        if (this.collisionPoints.bottomRight.x >= 500) {
            window.alert("¡Perdiste!");
            window.location.reload();
        }
        break;

      case MOVEMENTS.UP:
        if (this.collisionPoints.topLeft.y <= 0) {
            window.alert("¡Perdiste!");
            window.location.reload();
        }
        break;

      case MOVEMENTS.DOWN:
        if (this.collisionPoints.bottomLeft.y >= 500) {
            window.alert("¡Perdiste!");
            window.location.reload();
        }

        break;

      default:
        break;
    }
  }
}


const mainPlayer = new Movement("#player", { x: 225, y: 200 });

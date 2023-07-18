class Nest {
  constructor(name, neighborhood) {
    this.nestName = name;
    this.messagesSent = [];
    this.messagesReceived = [];
    this.neighborhood = neighborhood;
  }

  _send(msg, to) {
    this.messagesSent.push({ msg, to });
    return `Mensaje enviado con exito a ${to}`;
  }

  _receive(msg, from) {
    this.messagesReceived.push({ msg, from });
  }

  _ping() {
    return "pong";
  }
}

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.neighborhood = [];
  }

  createNest(name) {
    const newNest = new Nest(name, {
      name: this.name,
      neighborhood: this.neighborhood,
    });
    this.neighborhood.push(newNest);
  }

  totalNests() {
    const length = this.neighborhood.length;
    console.log(`En ${this.name} hay ${length} nidos`);
  }

  messageToFrom(to, from, msg) {
    const sender = this.neighborhood.find((nest) => nest.nestName === from);
    const receiver = this.neighborhood.find((nest) => nest.nestName === to);
    const obstacles = Math.random() * 3 > 1;
    const process = new Promise((resolve, rejected) => {
      setTimeout(() => {
        if (obstacles) {
          resolve(sender._send(msg, to));
        } else {
          rejected(true);
        }
      }, 2500);
    });
    process
      .then((res) => {
        console.log(res);
      })
      .then(() => receiver._receive)
      .catch((err) => console.log("Hubo un error"));
  }

  ping() {
    this.neighborhood.forEach((nest, index) => {
      const obstacles = Math.random() * 3 > 1;
      const delay = Math.random() * 5000;
      setTimeout(() => {
        const sendPing = new Promise((resolve, reject) => {
          obstacles ? reject("hubo un error") : resolve(nest._ping());
        });
        sendPing
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }, delay);
    });
  }
}

const hambak = new Neighborhood("Hambak");

hambak.createNest("arco iris");
hambak.createNest("lolis");
hambak.createNest("iris");

hambak.ping();

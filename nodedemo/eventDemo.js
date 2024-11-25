import { EventEmitter } from "events";

const eventsemt = new EventEmitter();

function greet() {
  console.log("hello");
}

eventsemt.on("greet", greet);
eventsemt.emit("greet");

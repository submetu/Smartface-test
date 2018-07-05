import { getRandomState } from "./helper.js";
export function Computer() {
  this.state = ''
  this.win = false;
}
Computer.prototype.roll = function () {
  this.state = getRandomState();
}
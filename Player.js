import { getRandomState } from "./helper.js";
export function Player() {
  this.state = '';
  this.win = false;
}
Player.prototype.roll = function () {
  this.state = getRandomState();
}
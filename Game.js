export function Game(player, computer, comparator) {
  this.finished = false;
  this.player = player;
  this.computer = computer;
  this.comparator = comparator;
  this.result = '';
}

Game.prototype.end = function () {
  this.finished = true;
}
Game.prototype.start = function () {
  this.finished = false;
  this.player.roll();
  this.computer.roll();
  this.result = this.comparator(this.player.state, this.computer.state);
}
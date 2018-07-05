let assert = require('assert');
let sinon = require('sinon');
import { rock, paper, scissors } from './constants.js';
import { comparator } from './helper.js';
import { Game } from './Game.js';
import { Player } from './Player.js';
import { Computer } from './Computer.js';

describe('Helpers', () => {
  describe('Comparator', () => {

    it('should return false if states are same', () => {
      let testValue = comparator(rock, rock);
      assert.equal(testValue, false);
    });

    it('should return rock when states are rock and scissors', () => {
      let testValue = comparator(rock, scissors);
      assert.equal(testValue, 'rock');
    });

    it('should return scissors when states are paper and scissors', () => {
      let testValue = comparator(paper, scissors);
      assert.equal(testValue, 'scissors');
    });

    it('should return paper when states are paper and rock', () => {
      let testValue = comparator(paper, rock);
      assert.equal(testValue, 'paper');
    });
  });
});

describe('Game', () => {
  let testPlayer;
  let testComputer;
  let testGame;
  beforeEach(() => {
    testPlayer = new Player();
    testComputer = new Computer();
    testGame = new Game(testPlayer, testComputer, comparator);
  });

  it('should be created with a finished property equal to false', () => {
    assert.equal(testGame.finished, false);
  });
  it('should be created with a result property equal to an empty string', () => {
    console.log();
    assert.equal(testGame.result, '');
  });
  it('should be created with a player which is an instance of the Player Class', () => {
    assert.equal(testPlayer instanceof Player, true);
  });
  it('should be created with a computer which is an instance of the Computer Class', () => {
    assert.equal(testComputer instanceof Computer, true);
  });
  it('should set the finished property equals to false after the game ends', () => {
    testGame.end();
    assert.equal(testGame.finished, true);
  });
  it('should call the roll function atleast ONCE on the player when the game starts', () => {
    let playerRollSpy = sinon.spy();
    testPlayer.roll = playerRollSpy;
    testGame.start();
    assert.equal(playerRollSpy.calledOnce,true);
  });
  it('should call the roll function atleast ONCE on the computer when the game starts', () => {
    let computerRollSpy = sinon.spy();
    testComputer.roll = computerRollSpy;
    testGame.start();
    assert.equal(computerRollSpy.calledOnce,true);
  });

  it('should have a non-empty result value after both the player roll',()=>{
    testGame.start(); 
    assert.equal(testGame !== '', true);
  });

});

describe('Player',()=>{
  let testPlayer;
  beforeEach(() => {
    testPlayer = new Player();
  }); 
  it('should be created with a state property equals to an empty string', () => {
    assert.equal(testPlayer.state , '');
  }); 
  it('should be created with a win property equals to false', () => {
    assert.equal(testPlayer.win , false);
  });
  it('should be created with a roll method', () => {
    assert.equal(typeof testPlayer.roll === 'function' , true);
  }); 
  it('should have a non-empty state after the roll method has been called',()=>{
    testPlayer.roll();
    assert.equal(testPlayer.state !== '', true);
  });
});

describe('Computer',()=>{
  let testComputer;
  beforeEach(() => {
    testComputer = new Computer();
  }); 
  it('should be created with a state property equals to an empty string', () => {
    assert.equal(testComputer.state , '');
  }); 
  it('should be created with a win property equals to false', () => {
    assert.equal(testComputer.win , false);
  }); 
  it('should be created with a roll method', () => {
    assert.equal(typeof testComputer.roll === 'function' , true);
  }); 
  it('should have a non-empty state after the roll method has been called',()=>{
    testComputer.roll();
    assert.equal(testComputer.state !== '', true);
  });
});
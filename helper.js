import {rock,paper,scissors} from './constants';

export function getRandomState() {
  let states = [rock,paper,scissors];
  return states[Math.floor(Math.random() * states.length)];
}
export function comparator(choice1, choice2) {
  if (choice1 === choice2) {
    return false;
  }
  if (choice1 === paper) {
    if (choice2 === rock) {
      return paper;
    } else if (choice2 === scissors) {
      return scissors;
    }
  }
  if (choice1 === scissors) {
    if (choice2 === rock) {
      return rock;
    } else if (choice2 === paper) {
      return scissors;
    }
  }
  if (choice1 === rock) {
    if (choice2 === scissors) {
      return rock;
    } else if (choice2 === paper) {
      return paper;
    }
  }
}

import BubbleState from "../enums/BubbleState";

class BubbleModel {
  constructor(bubbleIndex, letter, question, answer) {
    this.index = bubbleIndex;
    this.letter = letter;
    this.question = question;
    this.answer = answer;
    this.bubbleState = BubbleState.INITIAL;
  }

  setIndex(index) {
    this.index = index;
  };

  getIndex() {
    return this.index;
  };

  setLetter(letter){
    this.letter = letter;
  };

  getLetter() {
    return this.letter;
  };
}

export default BubbleModel;

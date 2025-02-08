import BubbleState from "../enums/BubbleState";

const turkishAlphabet = [
  "A", "B", "C", "Ç", "D", "E", "F", "G", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", 
  "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"
];

class BubbleModel {
  constructor(bubbleIndex) {
    this.index = bubbleIndex;
    this.letter = turkishAlphabet[bubbleIndex % turkishAlphabet.length];
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

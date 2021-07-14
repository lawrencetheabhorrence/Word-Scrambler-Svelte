const scrambleWord = (availableLetters) => {
  const avails = availableLetters.split('');
  return shuffle(avails);
};

const shuffle = (array) => {
  // Implementation of the Knuth shuffle
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length; let
    randomIndex;

  while (currentIndex > 0) {
    // Choose randomly among the remaining indices
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // swap the current and random element
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export const scrambleChecker = (availableLetters, validWords) => {
  while (true) {
    const word = scrambleWord(availableLetters).join('');
    if (!validWords.includes(word) && word !== availableLetters) return word;
  }
};

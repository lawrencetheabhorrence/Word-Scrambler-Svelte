const swap = (i, j, arr) => { let t = arr[i]; arr[i] = arr[j]; arr[j] = t; }

const randIntInRange = (start = 0, end) =>  { return Math.floor(start + (Math.random() * end)); }

const scrambleWord = (availableLetters) => {
  let avails = availableLetters.split('');
  for (let i = 0; i < avails.length; i++) {
    const r = randIntInRange(0, avails.length - 1);
    swap(i, r, avails);
  }
  return avails;
}

export const scrambleChecker = (availableLetters, validWords) => {
  while (true) {
    const word = scrambleWord(availableLetters).join('')
    if (!validWords.includes(word) && word !== availableLetters) return word
  }
}
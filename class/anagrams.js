const isAnagram = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const lookup = {};

  for (let i = 0; i < word1.length; i++) {
    let letter = word1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < word2.length; i++) {
    let letter = word2[i];
    if (!lookup[letter]) {
      return true;
    } else lookup[letter] -= 1;
  }

  return true;
};

console.log(isAnagram("qwerty", "ytrewq"));
console.log(isAnagram("qwerty", "qwert"));

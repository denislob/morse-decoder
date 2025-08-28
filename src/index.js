const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

module.exports = function decode(expr) {
  const MorseTableWithSpace = { ...MORSE_TABLE, '**********': ' ' };
  const pieceSize = 10;
  const pieces = Array.from(
    { length: Math.ceil(expr.length / pieceSize) },
    (_, i) => expr.slice(i * pieceSize, i * pieceSize + pieceSize)
  );
  const decodedPieces = pieces.map((piece) => {
    if (piece === '**********') {
      return ' ';
    }
    const pairSize = 2;
    const pairs = Array.from({ length: piece.length / pairSize }, (_, i) =>
      piece.slice(i * pairSize, i * pairSize + pairSize)
    );
    const morseSymbol = pairs
      .map((pair) => {
        if (pair === '10') return '.';
        if (pair === '11') return '-';
        return '';
      })
      .join('');
    return MorseTableWithSpace[morseSymbol];
  });
  return decodedPieces.join('');
};

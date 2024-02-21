const morseObject: Record<string, string> = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  'Á': '.--.-', // A with acute accent
  'Ä': '.-.-',  // A with diaeresis
  'É': '..-..', // E with acute accent
  'Ñ': '--.--', // N with tilde
  'Ö': '---.',  // O with diaeresis
  'Ü': '..--',  // U with diaeresis
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  ',': '--..--',  // comma
  '.': '.-.-.-',  // period
  '?': '..--..',  // question mark
  '!': '-.-.--',
  ';': '-.-.-',   // semicolon
  ':': '---...',  // colon
  '/': '-..-.',   // slash
  '-': '-....-',  // dash
  "'": '.----.',  // apostrophe
  '()': '-.--.-', // parenthesis
  '_': '..--.-',  // underline
  '@': '.--.-.',  // at symbol from http://www.learnmorsecode.com/
  ' ': '/'
}

export function textToMorse (text: string)  {
  const text_arr = text.toUpperCase().split('')
  const morse_text_arr: Array<string> = []

  for (let i = 0; i < text_arr.length; i++) {
    morse_text_arr.push(morseObject[text_arr[i]])
  }

  console.log(morse_text_arr.join(' '))

  return morse_text_arr.join(' ')
}

export function morseToText (text: string)  {
  const morse_text_arr = text.split(' ')
  const text_arr: Array<string | undefined> = []

  for (let i = 0; i < morse_text_arr.length; i++) {
    text_arr.push(Object.keys(morseObject).find(alphabet => morseObject[alphabet] === morse_text_arr[i]))
  }

  return text_arr.join('')
}
// console.log(morseToText(textToMorse('texto com c@r@ctéres especiais:?!')))

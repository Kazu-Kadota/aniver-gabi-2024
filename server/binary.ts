export function codeBinaryText (text: string) {
  const binary_text: Array<string> = []

  for (let c = 0; c < text.length; c++) {
    let text_to_push = ''

    if (text.charCodeAt(c).toString(2).length === 8) {
      text_to_push = text.charCodeAt(c).toString(2)
    } else if (text.charCodeAt(c).toString(2).length === 7) {
      text_to_push = '0' + text.charCodeAt(c).toString(2)
    } else if (text.charCodeAt(c).toString(2).length === 6) {
      text_to_push = '00' + text.charCodeAt(c).toString(2)
    }

    binary_text.push(text_to_push)
  }

  console.log(binary_text.join(' '))

  return binary_text.join(' ')
}

export function decodeBinaryText (text: string) {
  const text_arr = text.split(' ')
  const string_text_arr: Array<string> = []

  for (let i = 0; i < text_arr.length; i++) {
    string_text_arr.push(String.fromCharCode(parseInt(text_arr[i], 2)))
  }

  return string_text_arr.join('')
}

// console.log(decodeBinaryText(codeBinaryText('texto com c@r@ctéres especiais:?!')))

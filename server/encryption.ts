import cryptoJs from 'crypto-js'

export const encryptText = (text: string) => {
  const encrypted = cryptoJs.enc.Base64.stringify(cryptoJs.enc.Utf8.parse(text))

  console.log(encrypted)

  return encrypted
}

export const decryptText = (data: string) => {
  const decrypted = cryptoJs.enc.Base64.parse(data).toString(cryptoJs.enc.Utf8)

  return decrypted
}

// console.log(decryptText(encryptText('texto com c@r@ctéres especiais:?!')))

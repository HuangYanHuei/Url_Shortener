function random(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function shortURL_generator() {
  const randomNumbers = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  let collection = []
  let shortURL = ''

  collection = collection.concat(randomNumbers.split(''))

  for (let i = 0; i < 5; i++) {
    shortURL += random(collection)
  }

  // return the generated password
  return 'http://localhost:3000/' + shortURL
}

module.exports = shortURL_generator
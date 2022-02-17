#!/usr/bin/env node

const ConvertToGyaruMoji = require('./data')
const { prompt } = require('enquirer')

class Generator {
  async run () {
    await this.convert()
  }

  async getText () {
    const response = await prompt({
      type: 'input',
      name: 'input',
      message: 'Enter the word you want to convert'
    })
    return response.input
  }

  async convert () {
    const input = await this.getText()
    const text = input.split('')
    const array = []
    text.forEach(t => {
      if (t.match(/^[\u3040-\u3094]+$/)) {
        array.push(ConvertToGyaruMoji[t])
      } else {
        array.push(t)
      }
    })
    console.log(array.join(''))
  }
}

new Generator().run()

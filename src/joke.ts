const request = require('request')
require('dotenv').config()

export async function getJoke() {
  return new Promise((resolve, reject) => {
    const options = {method: 'GET',
      url: 'https://icanhazdadjoke.com/',
      headers:
     {
       'cache-control': 'no-cache',
       Accept: 'application/json'}}
    try {
      request(options, (error: string | undefined, response: any) => {
        if (error) reject(error)
        const myobj = JSON.parse(response.body)
        resolve(myobj.joke)
      })
    } catch (error) {
      reject(error)
    }
  })
}

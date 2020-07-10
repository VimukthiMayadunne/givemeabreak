const request = require('request')
require('dotenv').config()

export async function getJoke() {
  return new Promise((resolve, reject) => {
    const options = {method: 'GET',
      url: 'https://joke3.p.rapidapi.com/v1/joke',
      headers:
     {
       'x-rapidapi-key': process.env.API_KEY,
       'x-rapidapi-host': process.env.HOST}}
    try {
      request(options, (error: string | undefined, response: any) => {
        if (error) reject(error)
        const myobj = JSON.parse(response.body)
        resolve(myobj.content)
      })
    } catch (error) {
      reject(error)
    }
  })
}

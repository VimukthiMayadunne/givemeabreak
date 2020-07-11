const unirest = require('unirest')

export async function getJoke() {
  return new Promise((resolve, reject) => {
    const req = unirest('GET', 'https://icanhazdadjoke.com/')

    req.headers({
      'cache-control': 'no-cache',
      Accept: 'application/json',
    })
    req.end(function (res: { error: string | undefined; body: any }) {
      if (res.error) {
        reject(new Error(res.error))
      } else {
        resolve(res.body.joke)
      }
    })
  })
}

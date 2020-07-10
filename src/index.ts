import {Command, flags} from '@oclif/command'
import {getJoke} from './joke'
require('dotenv').config()

class Givemeabreak extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  async run() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {flags} = this.parse(Givemeabreak)
    const response: any = await getJoke()
    if (response instanceof Error) {
      this.error(response.message)
    } else {
      this.log()
      this.log(response)
      this.log()
    }
  }
}

export = Givemeabreak

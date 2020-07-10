import {Command, flags} from '@oclif/command'
import {getJoke} from './joke'

class Givemeabreak extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  async run() {
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

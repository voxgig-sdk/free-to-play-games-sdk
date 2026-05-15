
import { Context } from './Context'


class FreeToPlayGamesError extends Error {

  isFreeToPlayGamesError = true

  sdk = 'FreeToPlayGames'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  FreeToPlayGamesError
}


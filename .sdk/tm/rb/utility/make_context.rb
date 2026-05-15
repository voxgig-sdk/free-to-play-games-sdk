# FreeToPlayGames SDK utility: make_context
require_relative '../core/context'
module FreeToPlayGamesUtilities
  MakeContext = ->(ctxmap, basectx) {
    FreeToPlayGamesContext.new(ctxmap, basectx)
  }
end

# FreeToPlayGames SDK utility: prepare_body
require_relative 'media'
module FreeToPlayGamesUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return FreeToPlayGamesUtilities.raw_body(ctx.reqdata) if FreeToPlayGamesUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end

# FreeToPlayGames SDK utility: feature_add
module FreeToPlayGamesUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end

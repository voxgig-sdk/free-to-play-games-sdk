# FreeToPlayGames SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module FreeToPlayGamesFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreeToPlayGamesBaseFeature.new
    when "ratelimit"
      FreeToPlayGamesRatelimitFeature.new
    when "retry"
      FreeToPlayGamesRetryFeature.new
    when "test"
      FreeToPlayGamesTestFeature.new
    when "timeout"
      FreeToPlayGamesTimeoutFeature.new
    else
      FreeToPlayGamesBaseFeature.new
    end
  end
end

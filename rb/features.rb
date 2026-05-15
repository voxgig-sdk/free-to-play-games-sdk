# FreeToPlayGames SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module FreeToPlayGamesFeatures
  def self.make_feature(name)
    case name
    when "base"
      FreeToPlayGamesBaseFeature.new
    when "test"
      FreeToPlayGamesTestFeature.new
    else
      FreeToPlayGamesBaseFeature.new
    end
  end
end

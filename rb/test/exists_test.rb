# FreeToPlayGames SDK exists test

require "minitest/autorun"
require_relative "../FreeToPlayGames_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = FreeToPlayGamesSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

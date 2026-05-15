package = "voxgig-sdk-free-to-play-games"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/free-to-play-games-sdk.git"
}
description = {
  summary = "FreeToPlayGames SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["free-to-play-games_sdk"] = "free-to-play-games_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}

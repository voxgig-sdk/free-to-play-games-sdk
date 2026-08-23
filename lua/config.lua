-- FreeToPlayGames SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FreeToPlayGames",
      slug = "free-to-play-games",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://www.freetogame.com/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["game"] = {},
      },
    },
    entity = {
      ["game"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["short"] = "Full description of the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "developer",
            ["short"] = "Developer of the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "freetogame_profile_url",
            ["short"] = "URL to the game's profile page on FreeToGame",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "game_url",
            ["short"] = "URL to play or download the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "genre",
            ["short"] = "Genre or category of the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the game",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "minimum_system_requirements",
            ["short"] = "Minimum system requirements for PC games",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "platform",
            ["short"] = "Platform(s) the game is available on",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "publisher",
            ["short"] = "Publisher of the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "release_date",
            ["short"] = "Release date of the game in YYYY-MM-DD format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "screenshots",
            ["short"] = "Array of screenshot images",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "short_description",
            ["short"] = "Brief description of the game",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "Current status of the game (e.g., Live, Beta)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "thumbnail",
            ["short"] = "URL to the game's thumbnail image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Title of the game",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "game",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "platform",
                      ["orig"] = "platform",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "sort_by",
                      ["orig"] = "sort_by",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/games",
                ["parts"] = {
                  "games",
                },
                ["select"] = {
                  ["exist"] = {
                    "category",
                    "platform",
                    "sort_by",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/game",
                ["parts"] = {
                  "game",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config

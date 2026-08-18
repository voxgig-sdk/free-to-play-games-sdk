-- FreeToPlayGames SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "FreeToPlayGames",
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
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "developer",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "freetogame_profile_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "game_url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "genre",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "minimum_system_requirements",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "platform",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "publisher",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "release_date",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "screenshots",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "short_description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "thumbnail",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
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

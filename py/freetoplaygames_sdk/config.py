# FreeToPlayGames SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "FreeToPlayGames",
            "slug": "free-to-play-games",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.freetogame.com/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "game": {},
            },
        },
        "entity": {
      "game": {
        "fields": [
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Full description of the game",
          },
          {
            "name": "developer",
            "title": "Developer",
            "type": "`$STRING`",
            "short": "Developer of the game",
          },
          {
            "name": "freetogame_profile_url",
            "title": "Freetogame Profile Url",
            "type": "`$STRING`",
            "short": "URL to the game's profile page on FreeToGame",
            "format": "uri",
          },
          {
            "name": "game_url",
            "title": "Game Url",
            "type": "`$STRING`",
            "short": "URL to play or download the game",
            "format": "uri",
          },
          {
            "name": "genre",
            "title": "Genre",
            "type": "`$STRING`",
            "short": "Genre or category of the game",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the game",
          },
          {
            "name": "minimum_system_requirements",
            "title": "Minimum System Requirements",
            "type": "`$OBJECT`",
            "short": "Minimum system requirements for PC games",
          },
          {
            "name": "platform",
            "title": "Platform",
            "type": "`$STRING`",
            "short": "Platform(s) the game is available on",
          },
          {
            "name": "publisher",
            "title": "Publisher",
            "type": "`$STRING`",
            "short": "Publisher of the game",
          },
          {
            "name": "release_date",
            "title": "Release Date",
            "type": "`$STRING`",
            "short": "Release date of the game in YYYY-MM-DD format",
            "format": "date",
          },
          {
            "name": "screenshots",
            "title": "Screenshots",
            "type": "`$ARRAY`",
            "short": "Array of screenshot images",
          },
          {
            "name": "short_description",
            "title": "Short Description",
            "type": "`$STRING`",
            "short": "Brief description of the game",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Current status of the game (e.g., Live, Beta)",
          },
          {
            "name": "thumbnail",
            "title": "Thumbnail",
            "type": "`$STRING`",
            "short": "URL to the game's thumbnail image",
            "format": "uri",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "short": "Title of the game",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "game",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/game",
                "segments": [
                  {
                    "lit": "game",
                  },
                ],
                "parts": [
                  "game",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "reqd": True,
                      "field": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/games",
                "segments": [
                  {
                    "lit": "games",
                  },
                ],
                "parts": [
                  "games",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "all",
                      "field": True,
                    },
                    {
                      "name": "sort_by",
                      "orig": "sort-by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

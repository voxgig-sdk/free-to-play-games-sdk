# FreeToPlayGames SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "type": "`$STRING`",
          },
          {
            "name": "developer",
            "type": "`$STRING`",
          },
          {
            "name": "freetogame_profile_url",
            "type": "`$STRING`",
          },
          {
            "name": "game_url",
            "type": "`$STRING`",
          },
          {
            "name": "genre",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "type": "`$INTEGER`",
          },
          {
            "name": "minimum_system_requirements",
            "type": "`$OBJECT`",
          },
          {
            "name": "platform",
            "type": "`$STRING`",
          },
          {
            "name": "publisher",
            "type": "`$STRING`",
          },
          {
            "name": "release_date",
            "type": "`$STRING`",
          },
          {
            "name": "screenshots",
            "type": "`$ARRAY`",
          },
          {
            "name": "short_description",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "type": "`$STRING`",
          },
          {
            "name": "thumbnail",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$STRING`",
          },
        ],
        "name": "game",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "all",
                      "kind": "query",
                      "name": "platform",
                      "orig": "platform",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "sort_by",
                      "orig": "sort_by",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/games",
                "parts": [
                  "games",
                ],
                "select": {
                  "exist": [
                    "category",
                    "platform",
                    "sort_by",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/game",
                "parts": [
                  "game",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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

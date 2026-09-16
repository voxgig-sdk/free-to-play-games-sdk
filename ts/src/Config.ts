
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'FreeToPlayGames',
        slug: "free-to-play-games",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.freetogame.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      game: {
      },

    }
  }


  entity = {
    "game": {
      "fields": [
        {
          "name": "description",
          "short": "Full description of the game",
          "type": "`$STRING`"
        },
        {
          "name": "developer",
          "short": "Developer of the game",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "freetogame_profile_url",
          "short": "URL to the game's profile page on FreeToGame",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "game_url",
          "short": "URL to play or download the game",
          "type": "`$STRING`"
        },
        {
          "name": "genre",
          "short": "Genre or category of the game",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the game",
          "type": "`$INTEGER`"
        },
        {
          "name": "minimum_system_requirements",
          "short": "Minimum system requirements for PC games",
          "type": "`$OBJECT`"
        },
        {
          "name": "platform",
          "short": "Platform(s) the game is available on",
          "type": "`$STRING`"
        },
        {
          "name": "publisher",
          "short": "Publisher of the game",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "release_date",
          "short": "Release date of the game in YYYY-MM-DD format",
          "type": "`$STRING`"
        },
        {
          "name": "screenshots",
          "short": "Array of screenshot images",
          "type": "`$ARRAY`"
        },
        {
          "name": "short_description",
          "short": "Brief description of the game",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "Current status of the game (e.g., Live, Beta)",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "thumbnail",
          "short": "URL to the game's thumbnail image",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Title of the game",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "all",
                    "kind": "query",
                    "name": "platform",
                    "orig": "platform",
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "sort_by",
                    "orig": "sort_by",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/games",
              "segments": [
                {
                  "lit": "games"
                }
              ],
              "select": {
                "exist": [
                  "category",
                  "platform",
                  "sort_by"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "games"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/game",
              "segments": [
                {
                  "lit": "game"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "game"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}


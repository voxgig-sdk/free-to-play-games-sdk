
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
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
          "name": "freetogame_profile_url",
          "short": "URL to the game's profile page on FreeToGame",
          "type": "`$STRING`"
        },
        {
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
              "parts": [
                "games"
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
              }
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
              "parts": [
                "game"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}


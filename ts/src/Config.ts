
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


  main = {
    name: 'FreeToPlayGames',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$STRING`"
        },
        {
          "name": "developer",
          "type": "`$STRING`"
        },
        {
          "name": "freetogame_profile_url",
          "type": "`$STRING`"
        },
        {
          "name": "game_url",
          "type": "`$STRING`"
        },
        {
          "name": "genre",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "minimum_system_requirements",
          "type": "`$OBJECT`"
        },
        {
          "name": "platform",
          "type": "`$STRING`"
        },
        {
          "name": "publisher",
          "type": "`$STRING`"
        },
        {
          "name": "release_date",
          "type": "`$STRING`"
        },
        {
          "name": "screenshots",
          "type": "`$ARRAY`"
        },
        {
          "name": "short_description",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "type": "`$STRING`"
        },
        {
          "name": "thumbnail",
          "type": "`$STRING`"
        },
        {
          "name": "title",
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


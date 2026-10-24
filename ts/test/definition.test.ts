import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "game",
    "accessor": "Game",
    "op": "list",
    "method": "GET",
    "path": "/game",
    "args": [],
    "select": {
      "id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "id"
    ],
    "queryArgs": [
      {
        "name": "id",
        "wire": "id"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 540,
      "title": "Overwatch 2",
      "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
      "status": "Live",
      "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
      "description": "Overwatch 2 is a free-to-play, team-based action game set in the optimistic future...",
      "game_url": "https://www.freetogame.com/open/overwatch-2",
      "genre": "Shooter",
      "platform": "Windows",
      "publisher": "Activision Blizzard",
      "developer": "Blizzard Entertainment",
      "release_date": "2022-10-04",
      "freetogame_profile_url": "https://www.freetogame.com/overwatch-2",
      "minimum_system_requirements": {
        "os": "Windows 10 64-bit",
        "processor": "Intel Core i3 or AMD Phenom X3 8650",
        "memory": "6 GB RAM",
        "graphics": "NVIDIA GeForce GTX 600 series, AMD Radeon HD 7000 series",
        "storage": "50 GB"
      },
      "screenshots": [
        {
          "id": 1,
          "image": "https://www.freetogame.com/g/540/screenshot1.jpg"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "game",
    "accessor": "Game",
    "op": "list",
    "method": "GET",
    "path": "/games",
    "args": [],
    "select": {
      "category": "v1",
      "platform": "all",
      "sort_by": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "platform",
      "category",
      "sort-by"
    ],
    "queryArgs": [
      {
        "name": "category",
        "wire": "category"
      },
      {
        "name": "platform",
        "wire": "platform"
      },
      {
        "name": "sort_by",
        "wire": "sort-by"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 540,
        "title": "Overwatch 2",
        "thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
        "short_description": "A hero-focused first-person team shooter from Blizzard Entertainment.",
        "game_url": "https://www.freetogame.com/open/overwatch-2",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Activision Blizzard",
        "developer": "Blizzard Entertainment",
        "release_date": "2022-10-04",
        "freetogame_profile_url": "https://www.freetogame.com/overwatch-2"
      }
    ],
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})

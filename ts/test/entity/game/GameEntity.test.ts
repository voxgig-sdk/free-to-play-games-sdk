

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { FreeToPlayGamesSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GameEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when FREE_TO_PLAY_GAMES_TEST_LIVE=TRUE.
  afterEach(liveDelay('FREE_TO_PLAY_GAMES_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = FreeToPlayGamesSDK.test()
    const ent = testsdk.Game()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.FREE_TO_PLAY_GAMES_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'game.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"Full description of the game","type":"`$STRING`","index$":0},{"active":true,"name":"developer","req":false,"short":"Developer of the game","type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"freetogame_profile_url","req":false,"short":"URL to the game's profile page on FreeToGame","type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"game_url","req":false,"short":"URL to play or download the game","type":"`$STRING`","index$":3},{"active":true,"name":"genre","req":false,"short":"Genre or category of the game","type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"short":"Unique identifier for the game","type":"`$INTEGER`","index$":5},{"active":true,"name":"minimum_system_requirements","req":false,"short":"Minimum system requirements for PC games","type":"`$OBJECT`","index$":6},{"active":true,"name":"platform","req":false,"short":"Platform(s) the game is available on","type":"`$STRING`","index$":7},{"active":true,"name":"publisher","req":false,"short":"Publisher of the game","type":"`$STRING`","index$":8},{"active":true,"format":"date","name":"release_date","req":false,"short":"Release date of the game in YYYY-MM-DD format","type":"`$STRING`","index$":9},{"active":true,"name":"screenshots","req":false,"short":"Array of screenshot images","type":"`$ARRAY`","index$":10},{"active":true,"name":"short_description","req":false,"short":"Brief description of the game","type":"`$STRING`","index$":11},{"active":true,"name":"status","req":false,"short":"Current status of the game (e.g., Live, Beta)","type":"`$STRING`","index$":12},{"active":true,"format":"uri","name":"thumbnail","req":false,"short":"URL to the game's thumbnail image","type":"`$STRING`","index$":13},{"active":true,"name":"title","req":false,"short":"Title of the game","type":"`$STRING`","index$":14}],"id":{"field":"id","name":"id"},"name":"game","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"category","orig":"category","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"all","kind":"query","name":"platform","orig":"platform","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"sort_by","orig":"sort_by","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /games","json":"{\"operationId\":\"getGames\",\"parameters\":[{\"description\":\"Filter games by platform (e.g., pc, browser, all)\",\"in\":\"query\",\"name\":\"platform\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"pc\",\"browser\",\"all\"],\"type\":\"string\"}},{\"description\":\"Filter games by category/genre (e.g., mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts)\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Sort games by criteria (e.g., release-date, popularity, alphabetical, relevance)\",\"in\":\"query\",\"name\":\"sort-by\",\"required\":false,\"schema\":{\"enum\":[\"release-date\",\"popularity\",\"alphabetical\",\"relevance\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"developer\":\"Blizzard Entertainment\",\"freetogame_profile_url\":\"https://www.freetogame.com/overwatch-2\",\"game_url\":\"https://www.freetogame.com/open/overwatch-2\",\"genre\":\"Shooter\",\"id\":540,\"platform\":\"PC (Windows)\",\"publisher\":\"Activision Blizzard\",\"release_date\":\"2022-10-04\",\"short_description\":\"A hero-focused first-person team shooter from Blizzard Entertainment.\",\"thumbnail\":\"https://www.freetogame.com/g/540/thumbnail.jpg\",\"title\":\"Overwatch 2\"}],\"schema\":{\"items\":{\"properties\":{\"developer\":{\"description\":\"Developer of the game\",\"type\":\"string\"},\"freetogame_profile_url\":{\"description\":\"URL to the game's profile page on FreeToGame\",\"format\":\"uri\",\"type\":\"string\"},\"game_url\":{\"description\":\"URL to play or download the game\",\"format\":\"uri\",\"type\":\"string\"},\"genre\":{\"description\":\"Genre or category of the game\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the game\",\"type\":\"integer\"},\"platform\":{\"description\":\"Platform(s) the game is available on\",\"type\":\"string\"},\"publisher\":{\"description\":\"Publisher of the game\",\"type\":\"string\"},\"release_date\":{\"description\":\"Release date of the game in YYYY-MM-DD format\",\"format\":\"date\",\"type\":\"string\"},\"short_description\":{\"description\":\"Brief description of the game\",\"type\":\"string\"},\"thumbnail\":{\"description\":\"URL to the game's thumbnail image\",\"format\":\"uri\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the game\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of games\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/games","segments":[{"lit":"games"}],"select":{"exist":["category","platform","sort_by"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /game","json":"{\"operationId\":\"getGameById\",\"parameters\":[{\"description\":\"The ID of the game to retrieve\",\"in\":\"query\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"description\":\"Overwatch 2 is a free-to-play, team-based action game set in the optimistic future...\",\"developer\":\"Blizzard Entertainment\",\"freetogame_profile_url\":\"https://www.freetogame.com/overwatch-2\",\"game_url\":\"https://www.freetogame.com/open/overwatch-2\",\"genre\":\"Shooter\",\"id\":540,\"minimum_system_requirements\":{\"graphics\":\"NVIDIA GeForce GTX 600 series, AMD Radeon HD 7000 series\",\"memory\":\"6 GB RAM\",\"os\":\"Windows 10 64-bit\",\"processor\":\"Intel Core i3 or AMD Phenom X3 8650\",\"storage\":\"50 GB\"},\"platform\":\"Windows\",\"publisher\":\"Activision Blizzard\",\"release_date\":\"2022-10-04\",\"screenshots\":[{\"id\":1,\"image\":\"https://www.freetogame.com/g/540/screenshot1.jpg\"}],\"short_description\":\"A hero-focused first-person team shooter from Blizzard Entertainment.\",\"status\":\"Live\",\"thumbnail\":\"https://www.freetogame.com/g/540/thumbnail.jpg\",\"title\":\"Overwatch 2\"},\"schema\":{\"allOf\":[{\"properties\":{\"developer\":{\"description\":\"Developer of the game\",\"type\":\"string\"},\"freetogame_profile_url\":{\"description\":\"URL to the game's profile page on FreeToGame\",\"format\":\"uri\",\"type\":\"string\"},\"game_url\":{\"description\":\"URL to play or download the game\",\"format\":\"uri\",\"type\":\"string\"},\"genre\":{\"description\":\"Genre or category of the game\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the game\",\"type\":\"integer\"},\"platform\":{\"description\":\"Platform(s) the game is available on\",\"type\":\"string\"},\"publisher\":{\"description\":\"Publisher of the game\",\"type\":\"string\"},\"release_date\":{\"description\":\"Release date of the game in YYYY-MM-DD format\",\"format\":\"date\",\"type\":\"string\"},\"short_description\":{\"description\":\"Brief description of the game\",\"type\":\"string\"},\"thumbnail\":{\"description\":\"URL to the game's thumbnail image\",\"format\":\"uri\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the game\",\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"description\":{\"description\":\"Full description of the game\",\"type\":\"string\"},\"minimum_system_requirements\":{\"description\":\"Minimum system requirements for PC games\",\"properties\":{\"graphics\":{\"description\":\"Graphics card requirement\",\"type\":\"string\"},\"memory\":{\"description\":\"Memory (RAM) requirement\",\"type\":\"string\"},\"os\":{\"description\":\"Operating system requirement\",\"type\":\"string\"},\"processor\":{\"description\":\"Processor requirement\",\"type\":\"string\"},\"storage\":{\"description\":\"Storage space requirement\",\"type\":\"string\"}},\"type\":\"object\"},\"screenshots\":{\"description\":\"Array of screenshot images\",\"items\":{\"properties\":{\"id\":{\"description\":\"Screenshot identifier\",\"type\":\"integer\"},\"image\":{\"description\":\"URL to the screenshot image\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"status\":{\"description\":\"Current status of the game (e.g., Live, Beta)\",\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Successful response with game details\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Game not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"message\":{\"description\":\"Error message\",\"type\":\"string\"},\"status\":{\"description\":\"HTTP status code\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/game","segments":[{"lit":"game"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"game","name__orig":"game","Name":"Game","name_":"game","name-":"game","NAME":"GAME","index$":0}, {"active":true,"entity":"game","key$":"BasicGameFlow","kind":"basic","name":"BasicGameFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"game_ref01"}}],"index$":0}]}, 'Game')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let game_ref01_data = Object.values(setup.data.existing.game)[0] as any

    // LIST
    const game_ref01_ent = client.Game()
    const game_ref01_match: any = {}

    const game_ref01_list = (await game_ref01_ent.list(game_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/game/GameTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = FreeToPlayGamesSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['game01','game02','game03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'FREE_TO_PLAY_GAMES_TEST_GAME_ENTID': idmap,
    'FREE_TO_PLAY_GAMES_TEST_LIVE': 'FALSE',
    'FREE_TO_PLAY_GAMES_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['FREE_TO_PLAY_GAMES_TEST_GAME_ENTID']

  const live = 'TRUE' === env.FREE_TO_PLAY_GAMES_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['FREE_TO_PLAY_GAMES_TEST_GAME_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new FreeToPlayGamesSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.FREE_TO_PLAY_GAMES_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

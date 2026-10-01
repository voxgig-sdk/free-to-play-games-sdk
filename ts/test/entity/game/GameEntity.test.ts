

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Full description of the game","t":"`$STRING`","key$":"description","index$":0},"developer":{"a":true,"h":"Developer","n":"developer","r":false,"sh":"Developer of the game","t":"`$STRING`","key$":"developer","index$":1},"freetogame_profile_url":{"a":true,"fo":"uri","h":"Freetogame Profile Url","n":"freetogame_profile_url","r":false,"sh":"URL to the game's profile page on FreeToGame","t":"`$STRING`","key$":"freetogame_profile_url","index$":2},"game_url":{"a":true,"fo":"uri","h":"Game Url","n":"game_url","r":false,"sh":"URL to play or download the game","t":"`$STRING`","key$":"game_url","index$":3},"genre":{"a":true,"h":"Genre","n":"genre","r":false,"sh":"Genre or category of the game","t":"`$STRING`","key$":"genre","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the game","t":"`$INTEGER`","key$":"id","index$":5},"minimum_system_requirements":{"a":true,"h":"Minimum System Requirements","n":"minimum_system_requirements","r":false,"sh":"Minimum system requirements for PC games","t":"`$OBJECT`","key$":"minimum_system_requirements","index$":6},"platform":{"a":true,"h":"Platform","n":"platform","r":false,"sh":"Platform(s) the game is available on","t":"`$STRING`","key$":"platform","index$":7},"publisher":{"a":true,"h":"Publisher","n":"publisher","r":false,"sh":"Publisher of the game","t":"`$STRING`","key$":"publisher","index$":8},"release_date":{"a":true,"fo":"date","h":"Release Date","n":"release_date","r":false,"sh":"Release date of the game in YYYY-MM-DD format","t":"`$STRING`","key$":"release_date","index$":9},"screenshots":{"a":true,"h":"Screenshots","n":"screenshots","r":false,"sh":"Array of screenshot images","t":"`$ARRAY`","key$":"screenshots","index$":10},"short_description":{"a":true,"h":"Short Description","n":"short_description","r":false,"sh":"Brief description of the game","t":"`$STRING`","key$":"short_description","index$":11},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Current status of the game (e.g., Live, Beta)","t":"`$STRING`","key$":"status","index$":12},"thumbnail":{"a":true,"fo":"uri","h":"Thumbnail","n":"thumbnail","r":false,"sh":"URL to the game's thumbnail image","t":"`$STRING`","key$":"thumbnail","index$":13},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Title of the game","t":"`$STRING`","key$":"title","index$":14}},"id":{"field":"id","name":"id"},"name":"game","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /games","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"category","or":"category","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"all","k":"query","n":"platform","or":"platform","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"sort_by","or":"sort-by","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/games","q":{"exist":["category","platform","sort_by"]},"r":{},"s":[{"lit":"games"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /game","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/game","q":{"exist":["id"]},"r":{},"s":[{"lit":"game"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"game","name__orig":"game","Name":"Game","name_":"game","name-":"game","NAME":"GAME","index$":0}, {"active":true,"entity":"game","key$":"BasicGameFlow","kind":"basic","name":"BasicGameFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"game_ref01"}}],"index$":0}]}, 'Game', {"GET /games":{"protocol":"http","parameters":[{"name":"platform","in":"query","description":"Filter games by platform (e.g., pc, browser, all)","required":false,"schema":{"type":"string","enum":["pc","browser","all"],"default":"all"},"index$":0},{"name":"category","in":"query","description":"Filter games by category/genre (e.g., mmorpg, shooter, strategy, moba, racing, sports, social, sandbox, open-world, survival, pvp, pve, pixel, voxel, zombie, turn-based, first-person, third-person, top-down, tank, space, sailing, side-scroller, superhero, permadeath, card, battle-royale, mmo, mmofps, mmotps, 3d, 2d, anime, fantasy, sci-fi, fighting, action-rpg, action, military, martial-arts, flight, low-spec, tower-defense, horror, mmorts)","required":false,"schema":{"type":"string"},"index$":1},{"name":"sort-by","in":"query","description":"Sort games by criteria (e.g., release-date, popularity, alphabetical, relevance)","required":false,"schema":{"type":"string","enum":["release-date","popularity","alphabetical","relevance"]},"index$":2}]},"GET /game":{"protocol":"http","parameters":[{"name":"id","in":"query","description":"The ID of the game to retrieve","required":true,"schema":{"type":"integer"},"index$":0}]}})
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
  

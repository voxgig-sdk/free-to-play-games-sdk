
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeToPlayGamesSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = FreeToPlayGamesSDK.test()
    equal(testsdk instanceof FreeToPlayGamesSDK, true,
      'FreeToPlayGamesSDK.test() must return a client synchronously')
  })

})

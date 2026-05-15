
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { FreeToPlayGamesSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await FreeToPlayGamesSDK.test()
    equal(null !== testsdk, true)
  })

})

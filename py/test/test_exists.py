# ProjectName SDK exists test

import pytest
from freetoplaygames_sdk import FreeToPlayGamesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FreeToPlayGamesSDK.test(None, None)
        assert testsdk is not None

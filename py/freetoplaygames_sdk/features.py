# FreeToPlayGames SDK feature factory

from freetoplaygames_sdk.feature.base_feature import FreeToPlayGamesBaseFeature
from freetoplaygames_sdk.feature.ratelimit_feature import FreeToPlayGamesRatelimitFeature
from freetoplaygames_sdk.feature.retry_feature import FreeToPlayGamesRetryFeature
from freetoplaygames_sdk.feature.test_feature import FreeToPlayGamesTestFeature
from freetoplaygames_sdk.feature.timeout_feature import FreeToPlayGamesTimeoutFeature


_FEATURES = {
    "base": lambda: FreeToPlayGamesBaseFeature(),
    "ratelimit": lambda: FreeToPlayGamesRatelimitFeature(),
    "retry": lambda: FreeToPlayGamesRetryFeature(),
    "test": lambda: FreeToPlayGamesTestFeature(),
    "timeout": lambda: FreeToPlayGamesTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

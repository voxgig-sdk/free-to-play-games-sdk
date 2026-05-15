# FreeToPlayGames SDK feature factory

from feature.base_feature import FreeToPlayGamesBaseFeature
from feature.test_feature import FreeToPlayGamesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FreeToPlayGamesBaseFeature(),
        "test": lambda: FreeToPlayGamesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

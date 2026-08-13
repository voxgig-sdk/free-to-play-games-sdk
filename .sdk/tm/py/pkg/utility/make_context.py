# FreeToPlayGames SDK utility: make_context

from projectname_sdk.core.context import FreeToPlayGamesContext


def make_context_util(ctxmap, basectx):
    return FreeToPlayGamesContext(ctxmap, basectx)

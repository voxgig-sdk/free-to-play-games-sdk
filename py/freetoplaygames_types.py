# Typed models for the FreeToPlayGames SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Game:
    description: Optional[str] = None
    developer: Optional[str] = None
    freetogame_profile_url: Optional[str] = None
    game_url: Optional[str] = None
    genre: Optional[str] = None
    id: Optional[int] = None
    minimum_system_requirement: Optional[dict] = None
    platform: Optional[str] = None
    publisher: Optional[str] = None
    release_date: Optional[str] = None
    screenshot: Optional[list] = None
    short_description: Optional[str] = None
    status: Optional[str] = None
    thumbnail: Optional[str] = None
    title: Optional[str] = None


@dataclass
class GameListMatch:
    description: Optional[str] = None
    developer: Optional[str] = None
    freetogame_profile_url: Optional[str] = None
    game_url: Optional[str] = None
    genre: Optional[str] = None
    id: Optional[int] = None
    minimum_system_requirement: Optional[dict] = None
    platform: Optional[str] = None
    publisher: Optional[str] = None
    release_date: Optional[str] = None
    screenshot: Optional[list] = None
    short_description: Optional[str] = None
    status: Optional[str] = None
    thumbnail: Optional[str] = None
    title: Optional[str] = None


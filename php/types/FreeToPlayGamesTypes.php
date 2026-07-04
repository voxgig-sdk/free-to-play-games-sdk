<?php
declare(strict_types=1);

// Typed models for the FreeToPlayGames SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Game entity data model. */
class Game
{
    public ?string $description = null;
    public ?string $developer = null;
    public ?string $freetogame_profile_url = null;
    public ?string $game_url = null;
    public ?string $genre = null;
    public ?int $id = null;
    public ?array $minimum_system_requirement = null;
    public ?string $platform = null;
    public ?string $publisher = null;
    public ?string $release_date = null;
    public ?array $screenshot = null;
    public ?string $short_description = null;
    public ?string $status = null;
    public ?string $thumbnail = null;
    public ?string $title = null;
}

/** Match filter for Game#list (any subset of Game fields). */
class GameListMatch
{
    public ?string $description = null;
    public ?string $developer = null;
    public ?string $freetogame_profile_url = null;
    public ?string $game_url = null;
    public ?string $genre = null;
    public ?int $id = null;
    public ?array $minimum_system_requirement = null;
    public ?string $platform = null;
    public ?string $publisher = null;
    public ?string $release_date = null;
    public ?array $screenshot = null;
    public ?string $short_description = null;
    public ?string $status = null;
    public ?string $thumbnail = null;
    public ?string $title = null;
}


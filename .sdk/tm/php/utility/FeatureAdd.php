<?php
declare(strict_types=1);

// FreeToPlayGames SDK utility: feature_add

class FreeToPlayGamesFeatureAdd
{
    public static function call(FreeToPlayGamesContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}

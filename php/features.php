<?php
declare(strict_types=1);

// FreeToPlayGames SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FreeToPlayGamesFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FreeToPlayGamesBaseFeature();
            case "test":
                return new FreeToPlayGamesTestFeature();
            default:
                return new FreeToPlayGamesBaseFeature();
        }
    }
}

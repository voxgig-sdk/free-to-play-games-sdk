<?php
declare(strict_types=1);

// FreeToPlayGames SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class FreeToPlayGamesMakeContext
{
    public static function call(array $ctxmap, ?FreeToPlayGamesContext $basectx): FreeToPlayGamesContext
    {
        return new FreeToPlayGamesContext($ctxmap, $basectx);
    }
}

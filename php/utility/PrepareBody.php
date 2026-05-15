<?php
declare(strict_types=1);

// FreeToPlayGames SDK utility: prepare_body

class FreeToPlayGamesPrepareBody
{
    public static function call(FreeToPlayGamesContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

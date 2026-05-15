<?php
declare(strict_types=1);

// FreeToPlayGames SDK utility: result_body

class FreeToPlayGamesResultBody
{
    public static function call(FreeToPlayGamesContext $ctx): ?FreeToPlayGamesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

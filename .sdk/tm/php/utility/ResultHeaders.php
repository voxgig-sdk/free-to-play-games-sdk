<?php
declare(strict_types=1);

// FreeToPlayGames SDK utility: result_headers

class FreeToPlayGamesResultHeaders
{
    public static function call(FreeToPlayGamesContext $ctx): ?FreeToPlayGamesResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

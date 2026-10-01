<?php
declare(strict_types=1);

// FreeToPlayGames SDK configuration

class FreeToPlayGamesConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FreeToPlayGames",
                "slug" => "free-to-play-games",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://www.freetogame.com/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "game" => [],
                ],
            ],
            "entity" => [
        'game' => [
          'fields' => [
            [
              'name' => 'description',
              'title' => 'Description',
              'type' => '`$STRING`',
              'short' => 'Full description of the game',
            ],
            [
              'name' => 'developer',
              'title' => 'Developer',
              'type' => '`$STRING`',
              'short' => 'Developer of the game',
            ],
            [
              'name' => 'freetogame_profile_url',
              'title' => 'Freetogame Profile Url',
              'type' => '`$STRING`',
              'short' => 'URL to the game\'s profile page on FreeToGame',
              'format' => 'uri',
            ],
            [
              'name' => 'game_url',
              'title' => 'Game Url',
              'type' => '`$STRING`',
              'short' => 'URL to play or download the game',
              'format' => 'uri',
            ],
            [
              'name' => 'genre',
              'title' => 'Genre',
              'type' => '`$STRING`',
              'short' => 'Genre or category of the game',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$INTEGER`',
              'short' => 'Unique identifier for the game',
            ],
            [
              'name' => 'minimum_system_requirements',
              'title' => 'Minimum System Requirements',
              'type' => '`$OBJECT`',
              'short' => 'Minimum system requirements for PC games',
            ],
            [
              'name' => 'platform',
              'title' => 'Platform',
              'type' => '`$STRING`',
              'short' => 'Platform(s) the game is available on',
            ],
            [
              'name' => 'publisher',
              'title' => 'Publisher',
              'type' => '`$STRING`',
              'short' => 'Publisher of the game',
            ],
            [
              'name' => 'release_date',
              'title' => 'Release Date',
              'type' => '`$STRING`',
              'short' => 'Release date of the game in YYYY-MM-DD format',
              'format' => 'date',
            ],
            [
              'name' => 'screenshots',
              'title' => 'Screenshots',
              'type' => '`$ARRAY`',
              'short' => 'Array of screenshot images',
            ],
            [
              'name' => 'short_description',
              'title' => 'Short Description',
              'type' => '`$STRING`',
              'short' => 'Brief description of the game',
            ],
            [
              'name' => 'status',
              'title' => 'Status',
              'type' => '`$STRING`',
              'short' => 'Current status of the game (e.g., Live, Beta)',
            ],
            [
              'name' => 'thumbnail',
              'title' => 'Thumbnail',
              'type' => '`$STRING`',
              'short' => 'URL to the game\'s thumbnail image',
              'format' => 'uri',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'short' => 'Title of the game',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'game',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/games',
                  'segments' => [
                    [
                      'lit' => 'games',
                    ],
                  ],
                  'parts' => [
                    'games',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'platform',
                        'orig' => 'platform',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'all',
                      ],
                      [
                        'name' => 'sort_by',
                        'orig' => 'sort-by',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'platform',
                      'sort_by',
                    ],
                  ],
                ],
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/game',
                  'segments' => [
                    [
                      'lit' => 'game',
                    ],
                  ],
                  'parts' => [
                    'game',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FreeToPlayGamesFeatures::make_feature($name);
    }
}

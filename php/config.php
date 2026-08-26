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
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
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
              'short' => 'Full description of the game',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'developer',
              'short' => 'Developer of the game',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'freetogame_profile_url',
              'short' => 'URL to the game\'s profile page on FreeToGame',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'game_url',
              'short' => 'URL to play or download the game',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'genre',
              'short' => 'Genre or category of the game',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the game',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'minimum_system_requirements',
              'short' => 'Minimum system requirements for PC games',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'platform',
              'short' => 'Platform(s) the game is available on',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'publisher',
              'short' => 'Publisher of the game',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'release_date',
              'short' => 'Release date of the game in YYYY-MM-DD format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'screenshots',
              'short' => 'Array of screenshot images',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'short_description',
              'short' => 'Brief description of the game',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Current status of the game (e.g., Live, Beta)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'thumbnail',
              'short' => 'URL to the game\'s thumbnail image',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the game',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'game',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'all',
                        'kind' => 'query',
                        'name' => 'platform',
                        'orig' => 'platform',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort_by',
                        'orig' => 'sort_by',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/games',
                  'parts' => [
                    'games',
                  ],
                  'select' => [
                    'exist' => [
                      'category',
                      'platform',
                      'sort_by',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/game',
                  'parts' => [
                    'game',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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

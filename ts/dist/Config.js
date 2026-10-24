"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'FreeToPlayGames',
        slug: "free-to-play-games",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "now": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://www.freetogame.com/api",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            game: {},
        }
    };
    entity = {
        "game": {
            "fields": [
                {
                    "name": "description",
                    "title": "Description",
                    "type": "`$STRING`",
                    "short": "Full description of the game"
                },
                {
                    "name": "developer",
                    "title": "Developer",
                    "type": "`$STRING`",
                    "short": "Developer of the game"
                },
                {
                    "name": "freetogame_profile_url",
                    "title": "Freetogame Profile Url",
                    "type": "`$STRING`",
                    "short": "URL to the game's profile page on FreeToGame",
                    "format": "uri"
                },
                {
                    "name": "game_url",
                    "title": "Game Url",
                    "type": "`$STRING`",
                    "short": "URL to play or download the game",
                    "format": "uri"
                },
                {
                    "name": "genre",
                    "title": "Genre",
                    "type": "`$STRING`",
                    "short": "Genre or category of the game"
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$INTEGER`",
                    "short": "Unique identifier for the game"
                },
                {
                    "name": "minimum_system_requirements",
                    "title": "Minimum System Requirements",
                    "type": "`$OBJECT`",
                    "short": "Minimum system requirements for PC games"
                },
                {
                    "name": "platform",
                    "title": "Platform",
                    "type": "`$STRING`",
                    "short": "Platform(s) the game is available on"
                },
                {
                    "name": "publisher",
                    "title": "Publisher",
                    "type": "`$STRING`",
                    "short": "Publisher of the game"
                },
                {
                    "name": "release_date",
                    "title": "Release Date",
                    "type": "`$STRING`",
                    "short": "Release date of the game in YYYY-MM-DD format",
                    "format": "date"
                },
                {
                    "name": "screenshots",
                    "title": "Screenshots",
                    "type": "`$ARRAY`",
                    "short": "Array of screenshot images"
                },
                {
                    "name": "short_description",
                    "title": "Short Description",
                    "type": "`$STRING`",
                    "short": "Brief description of the game"
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "short": "Current status of the game (e.g., Live, Beta)"
                },
                {
                    "name": "thumbnail",
                    "title": "Thumbnail",
                    "type": "`$STRING`",
                    "short": "URL to the game's thumbnail image",
                    "format": "uri"
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "short": "Title of the game"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "game",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/game",
                            "segments": [
                                {
                                    "lit": "game"
                                }
                            ],
                            "parts": [
                                "game"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "id",
                                        "orig": "id",
                                        "type": "`$INTEGER`",
                                        "kind": "query",
                                        "reqd": true,
                                        "field": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/games",
                            "segments": [
                                {
                                    "lit": "games"
                                }
                            ],
                            "parts": [
                                "games"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "category",
                                        "orig": "category",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    },
                                    {
                                        "name": "platform",
                                        "orig": "platform",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "example": "all",
                                        "field": true
                                    },
                                    {
                                        "name": "sort_by",
                                        "orig": "sort-by",
                                        "type": "`$STRING`",
                                        "kind": "query"
                                    }
                                ]
                            },
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map
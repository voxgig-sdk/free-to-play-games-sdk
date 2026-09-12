package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "FreeToPlayGames",
			"slug": "free-to-play-games",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.freetogame.com/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"game": map[string]any{},
			},
		},
		"entity": map[string]any{
			"game": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Full description of the game",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "developer",
						"short": "Developer of the game",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "freetogame_profile_url",
						"short": "URL to the game's profile page on FreeToGame",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "game_url",
						"short": "URL to play or download the game",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "genre",
						"short": "Genre or category of the game",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the game",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "minimum_system_requirements",
						"short": "Minimum system requirements for PC games",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "platform",
						"short": "Platform(s) the game is available on",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "publisher",
						"short": "Publisher of the game",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "release_date",
						"short": "Release date of the game in YYYY-MM-DD format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "screenshots",
						"short": "Array of screenshot images",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "short_description",
						"short": "Brief description of the game",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Current status of the game (e.g., Live, Beta)",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "thumbnail",
						"short": "URL to the game's thumbnail image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Title of the game",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "game",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "platform",
											"orig": "platform",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/games",
								"segments": []any{
									map[string]any{
										"lit": "games",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"platform",
										"sort_by",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"games",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/game",
								"segments": []any{
									map[string]any{
										"lit": "game",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"game",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}

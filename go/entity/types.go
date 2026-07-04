// Typed models for the FreeToPlayGames SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Game is the typed data model for the game entity.
type Game struct {
	Description *string `json:"description,omitempty"`
	Developer *string `json:"developer,omitempty"`
	FreetogameProfileUrl *string `json:"freetogame_profile_url,omitempty"`
	GameUrl *string `json:"game_url,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *int `json:"id,omitempty"`
	MinimumSystemRequirement *map[string]any `json:"minimum_system_requirement,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Screenshot *[]any `json:"screenshot,omitempty"`
	ShortDescription *string `json:"short_description,omitempty"`
	Status *string `json:"status,omitempty"`
	Thumbnail *string `json:"thumbnail,omitempty"`
	Title *string `json:"title,omitempty"`
}

// GameListMatch mirrors the game fields as an all-optional match
// filter (Go analog of Partial<Game>).
type GameListMatch struct {
	Description *string `json:"description,omitempty"`
	Developer *string `json:"developer,omitempty"`
	FreetogameProfileUrl *string `json:"freetogame_profile_url,omitempty"`
	GameUrl *string `json:"game_url,omitempty"`
	Genre *string `json:"genre,omitempty"`
	Id *int `json:"id,omitempty"`
	MinimumSystemRequirement *map[string]any `json:"minimum_system_requirement,omitempty"`
	Platform *string `json:"platform,omitempty"`
	Publisher *string `json:"publisher,omitempty"`
	ReleaseDate *string `json:"release_date,omitempty"`
	Screenshot *[]any `json:"screenshot,omitempty"`
	ShortDescription *string `json:"short_description,omitempty"`
	Status *string `json:"status,omitempty"`
	Thumbnail *string `json:"thumbnail,omitempty"`
	Title *string `json:"title,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// Typed models for the FreeToPlayGames SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Game {
  description?: string
  developer?: string
  freetogame_profile_url?: string
  game_url?: string
  genre?: string
  id?: number
  minimum_system_requirements?: Record<string, any>
  platform?: string
  publisher?: string
  release_date?: string
  screenshots?: any[]
  short_description?: string
  status?: string
  thumbnail?: string
  title?: string
}

export interface GameListMatch {
  category?: string
  platform?: string
  sort_by?: string
}


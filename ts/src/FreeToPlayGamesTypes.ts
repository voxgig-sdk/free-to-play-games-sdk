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
  minimum_system_requirement?: Record<string, any>
  platform?: string
  publisher?: string
  release_date?: string
  screenshot?: any[]
  short_description?: string
  status?: string
  thumbnail?: string
  title?: string
}

export type GameListMatch = Partial<Game>


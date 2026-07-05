# frozen_string_literal: true

# Typed models for the FreeToPlayGames SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Game entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer
#   @return [String, nil]
#
# @!attribute [rw] freetogame_profile_url
#   @return [String, nil]
#
# @!attribute [rw] game_url
#   @return [String, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] minimum_system_requirement
#   @return [Hash, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] publisher
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] screenshot
#   @return [Array, nil]
#
# @!attribute [rw] short_description
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] thumbnail
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Game = Struct.new(
  :description,
  :developer,
  :freetogame_profile_url,
  :game_url,
  :genre,
  :id,
  :minimum_system_requirement,
  :platform,
  :publisher,
  :release_date,
  :screenshot,
  :short_description,
  :status,
  :thumbnail,
  :title,
  keyword_init: true
)

# Request payload for Game#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] developer
#   @return [String, nil]
#
# @!attribute [rw] freetogame_profile_url
#   @return [String, nil]
#
# @!attribute [rw] game_url
#   @return [String, nil]
#
# @!attribute [rw] genre
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] minimum_system_requirement
#   @return [Hash, nil]
#
# @!attribute [rw] platform
#   @return [String, nil]
#
# @!attribute [rw] publisher
#   @return [String, nil]
#
# @!attribute [rw] release_date
#   @return [String, nil]
#
# @!attribute [rw] screenshot
#   @return [Array, nil]
#
# @!attribute [rw] short_description
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] thumbnail
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
GameListMatch = Struct.new(
  :description,
  :developer,
  :freetogame_profile_url,
  :game_url,
  :genre,
  :id,
  :minimum_system_requirement,
  :platform,
  :publisher,
  :release_date,
  :screenshot,
  :short_description,
  :status,
  :thumbnail,
  :title,
  keyword_init: true
)


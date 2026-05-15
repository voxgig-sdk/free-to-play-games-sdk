# FreeToPlayGames SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FreeToPlayGamesUtility.registrar = ->(u) {
  u.clean = FreeToPlayGamesUtilities::Clean
  u.done = FreeToPlayGamesUtilities::Done
  u.make_error = FreeToPlayGamesUtilities::MakeError
  u.feature_add = FreeToPlayGamesUtilities::FeatureAdd
  u.feature_hook = FreeToPlayGamesUtilities::FeatureHook
  u.feature_init = FreeToPlayGamesUtilities::FeatureInit
  u.fetcher = FreeToPlayGamesUtilities::Fetcher
  u.make_fetch_def = FreeToPlayGamesUtilities::MakeFetchDef
  u.make_context = FreeToPlayGamesUtilities::MakeContext
  u.make_options = FreeToPlayGamesUtilities::MakeOptions
  u.make_request = FreeToPlayGamesUtilities::MakeRequest
  u.make_response = FreeToPlayGamesUtilities::MakeResponse
  u.make_result = FreeToPlayGamesUtilities::MakeResult
  u.make_point = FreeToPlayGamesUtilities::MakePoint
  u.make_spec = FreeToPlayGamesUtilities::MakeSpec
  u.make_url = FreeToPlayGamesUtilities::MakeUrl
  u.param = FreeToPlayGamesUtilities::Param
  u.prepare_auth = FreeToPlayGamesUtilities::PrepareAuth
  u.prepare_body = FreeToPlayGamesUtilities::PrepareBody
  u.prepare_headers = FreeToPlayGamesUtilities::PrepareHeaders
  u.prepare_method = FreeToPlayGamesUtilities::PrepareMethod
  u.prepare_params = FreeToPlayGamesUtilities::PrepareParams
  u.prepare_path = FreeToPlayGamesUtilities::PreparePath
  u.prepare_query = FreeToPlayGamesUtilities::PrepareQuery
  u.result_basic = FreeToPlayGamesUtilities::ResultBasic
  u.result_body = FreeToPlayGamesUtilities::ResultBody
  u.result_headers = FreeToPlayGamesUtilities::ResultHeaders
  u.transform_request = FreeToPlayGamesUtilities::TransformRequest
  u.transform_response = FreeToPlayGamesUtilities::TransformResponse
}

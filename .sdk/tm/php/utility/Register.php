<?php
declare(strict_types=1);

// FreeToPlayGames SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FreeToPlayGamesUtility::setRegistrar(function (FreeToPlayGamesUtility $u): void {
    $u->clean = [FreeToPlayGamesClean::class, 'call'];
    $u->done = [FreeToPlayGamesDone::class, 'call'];
    $u->make_error = [FreeToPlayGamesMakeError::class, 'call'];
    $u->feature_add = [FreeToPlayGamesFeatureAdd::class, 'call'];
    $u->feature_hook = [FreeToPlayGamesFeatureHook::class, 'call'];
    $u->feature_init = [FreeToPlayGamesFeatureInit::class, 'call'];
    $u->fetcher = [FreeToPlayGamesFetcher::class, 'call'];
    $u->make_fetch_def = [FreeToPlayGamesMakeFetchDef::class, 'call'];
    $u->make_context = [FreeToPlayGamesMakeContext::class, 'call'];
    $u->make_options = [FreeToPlayGamesMakeOptions::class, 'call'];
    $u->make_request = [FreeToPlayGamesMakeRequest::class, 'call'];
    $u->make_response = [FreeToPlayGamesMakeResponse::class, 'call'];
    $u->make_result = [FreeToPlayGamesMakeResult::class, 'call'];
    $u->make_point = [FreeToPlayGamesMakePoint::class, 'call'];
    $u->make_spec = [FreeToPlayGamesMakeSpec::class, 'call'];
    $u->make_url = [FreeToPlayGamesMakeUrl::class, 'call'];
    $u->param = [FreeToPlayGamesParam::class, 'call'];
    $u->prepare_auth = [FreeToPlayGamesPrepareAuth::class, 'call'];
    $u->prepare_body = [FreeToPlayGamesPrepareBody::class, 'call'];
    $u->prepare_headers = [FreeToPlayGamesPrepareHeaders::class, 'call'];
    $u->prepare_method = [FreeToPlayGamesPrepareMethod::class, 'call'];
    $u->prepare_params = [FreeToPlayGamesPrepareParams::class, 'call'];
    $u->prepare_path = [FreeToPlayGamesPreparePath::class, 'call'];
    $u->prepare_query = [FreeToPlayGamesPrepareQuery::class, 'call'];
    $u->result_basic = [FreeToPlayGamesResultBasic::class, 'call'];
    $u->result_body = [FreeToPlayGamesResultBody::class, 'call'];
    $u->result_headers = [FreeToPlayGamesResultHeaders::class, 'call'];
    $u->transform_request = [FreeToPlayGamesTransformRequest::class, 'call'];
    $u->transform_response = [FreeToPlayGamesTransformResponse::class, 'call'];
});

package voxgigfreetoplaygamessdk

import (
	"github.com/voxgig-sdk/free-to-play-games-sdk/go/core"
	"github.com/voxgig-sdk/free-to-play-games-sdk/go/entity"
	"github.com/voxgig-sdk/free-to-play-games-sdk/go/feature"
	_ "github.com/voxgig-sdk/free-to-play-games-sdk/go/utility"
)

// Type aliases preserve external API.
type FreeToPlayGamesSDK = core.FreeToPlayGamesSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type FreeToPlayGamesEntity = core.FreeToPlayGamesEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type FreeToPlayGamesError = core.FreeToPlayGamesError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGameEntityFunc = func(client *core.FreeToPlayGamesSDK, entopts map[string]any) core.FreeToPlayGamesEntity {
		return entity.NewGameEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewFreeToPlayGamesSDK = core.NewFreeToPlayGamesSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

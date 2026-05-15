package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGameEntityFunc func(client *FreeToPlayGamesSDK, entopts map[string]any) FreeToPlayGamesEntity


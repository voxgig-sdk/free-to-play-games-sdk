package core

type FreeToPlayGamesError struct {
	IsFreeToPlayGamesError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFreeToPlayGamesError(code string, msg string, ctx *Context) *FreeToPlayGamesError {
	return &FreeToPlayGamesError{
		IsFreeToPlayGamesError: true,
		Sdk:              "FreeToPlayGames",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FreeToPlayGamesError) Error() string {
	return e.Msg
}

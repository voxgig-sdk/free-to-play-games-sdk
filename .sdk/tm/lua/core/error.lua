-- FreeToPlayGames SDK error

local FreeToPlayGamesError = {}
FreeToPlayGamesError.__index = FreeToPlayGamesError


function FreeToPlayGamesError.new(code, msg, ctx)
  local self = setmetatable({}, FreeToPlayGamesError)
  self.is_sdk_error = true
  self.sdk = "FreeToPlayGames"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function FreeToPlayGamesError:error()
  return self.msg
end


function FreeToPlayGamesError:__tostring()
  return self.msg
end


return FreeToPlayGamesError

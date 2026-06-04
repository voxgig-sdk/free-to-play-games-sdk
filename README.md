# FreeToPlayGames SDK

Browse free-to-play PC and browser games with genres, developers, platforms, and release dates

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Free-To-Play Games

The Free-To-Play Games Database API, provided by [FreeToGame](https://www.freetogame.com/api), exposes a catalogue of free-to-play PC and browser games. It is a community-oriented service that aggregates titles along with descriptive metadata such as genre, developer, publisher, and release date.

What you get from the API:
- A listing of free-to-play games, filterable by platform (e.g. `pc`, `browser`)
- Game records including title, genre, developer, publisher, release date, and platform
- No authentication, no API key, and CORS enabled for direct browser use

The service is reported to be reliable with low latency and stable uptime. Because no key is needed it is well suited for prototypes, dashboards, and personal projects that need a quick source of game catalogue data.

## Try it

**TypeScript**
```bash
npm install free-to-play-games
```

**Python**
```bash
pip install free-to-play-games-sdk
```

**PHP**
```bash
composer require voxgig/free-to-play-games-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/free-to-play-games-sdk/go
```

**Ruby**
```bash
gem install free-to-play-games-sdk
```

**Lua**
```bash
luarocks install free-to-play-games-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { FreeToPlayGamesSDK } from 'free-to-play-games'

const client = new FreeToPlayGamesSDK({})

// List all games
const games = await client.Game().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o free-to-play-games-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "free-to-play-games": {
      "command": "/abs/path/to/free-to-play-games-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Game** | A free-to-play title with metadata such as genre, developer, publisher, release date, and platform; available via `GET /games` (e.g. `https://www.freetogame.com/api/games?platform=pc`). | `/games` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from freetoplaygames_sdk import FreeToPlayGamesSDK

client = FreeToPlayGamesSDK({})

# List all games
games, err = client.Game(None).list(None, None)
```

### PHP

```php
<?php
require_once 'freetoplaygames_sdk.php';

$client = new FreeToPlayGamesSDK([]);

// List all games
[$games, $err] = $client->Game(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/free-to-play-games-sdk/go"

client := sdk.NewFreeToPlayGamesSDK(map[string]any{})

// List all games
games, err := client.Game(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "FreeToPlayGames_sdk"

client = FreeToPlayGamesSDK.new({})

# List all games
games, err = client.Game(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("free-to-play-games_sdk")

local client = sdk.new({})

-- List all games
local games, err = client:Game(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = FreeToPlayGamesSDK.test()
const result = await client.Game().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = FreeToPlayGamesSDK.test(None, None)
result, err = client.Game(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = FreeToPlayGamesSDK::test(null, null);
[$result, $err] = $client->Game(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Game(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = FreeToPlayGamesSDK.test(nil, nil)
result, err = client.Game(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Game(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Free-To-Play Games

- Upstream: [https://www.freetogame.com/api](https://www.freetogame.com/api)
- API docs: [https://www.freetogame.com/api-doc](https://www.freetogame.com/api-doc)

- Open public API requiring no API key or authentication
- CORS is enabled, suitable for browser-side calls
- Usage is governed by FreeToGame's site terms; check the homepage for current conditions
- Attribution to FreeToGame.com is good practice when redistributing data

---

Generated from the Free-To-Play Games OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

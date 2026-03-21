# Redis MCP Server

In-memory data store and cache operations.

## Install

```bash
npm install -g @modelcontextprotocol/server-redis
```

## Configuration

1. Start a Redis server or get a Redis connection URL
2. Add to `.env`:

```bash
REDIS_URL=redis://localhost:6379
# Or for cloud Redis:
# REDIS_URL=redis://user:password@your-redis-host:6379
```

3. Add to Cline MCP settings:

```json
"redis": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-redis"],
  "env": {
    "REDIS_URL": "${REDIS_URL}"
  }
}
```

## Usage

- Key-value operations (GET, SET, DEL)
- List operations (LPUSH, RPUSH, LRANGE)
- Hash operations (HSET, HGET, HGETALL)
- Set operations (SADD, SMEMBERS)
- Pub/sub messaging
- Cache management

## Requirements

- Running Redis server (local or cloud)
- Valid connection URL with credentials if required
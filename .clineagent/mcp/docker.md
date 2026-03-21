# Docker MCP Server

Manage Docker containers, images, networks, and volumes.

## Install

```bash
npm install -g @hypnosis/docker-mcp-server
```

## Configuration

No additional configuration required - uses local Docker socket.

Add to Cline MCP settings:

```json
"docker": {
  "command": "npx",
  "args": ["-y", "@hypnosis/docker-mcp-server"]
}
```

## Usage

- List and manage containers
- Inspect container logs
- Start/stop/restart containers
- Pull and manage images
- Network and volume management
- Docker Compose support

## Requirements

- Docker daemon running locally
- Docker socket accessible (`/var/run/docker.sock`)
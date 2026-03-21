# EverArt MCP Server

AI image generation and manipulation using EverArt.

## Install

```bash
npm install -g @iflow-mcp/everart-forge-mcp
```

## Configuration

1. Get your EverArt API key from [everart.ai](https://everart.ai) → API Settings
2. Add to `.env`:

```bash
EVERART_API_KEY=your_everart_api_key_here
```

3. Add to Cline MCP settings:

```json
"everart": {
  "command": "npx",
  "args": ["-y", "@iflow-mcp/everart-forge-mcp"],
  "env": {
    "EVERART_API_KEY": "${EVERART_API_KEY}"
  }
}
```

## Usage

- Generate images from text prompts
- Image-to-image generation
- Style transfers
- Vector (SVG) and raster image support
- Flexible storage options

## Features

- Multiple AI models for different styles
- Custom image dimensions
- Quality and variation controls
- Batch generation support
# Google Drive MCP

Access Google Docs, Sheets, and Drive files.

## Install

```bash
npm install -g @piotr-agier/google-drive-mcp
```

## Configuration

1. Create a Google Cloud project at [console.cloud.google.com](https://console.cloud.google.com)
2. Enable the Google Drive API
3. Create OAuth 2.0 credentials (Desktop application type)
4. Add to `.env`:

```bash
GOOGLE_DRIVE_CLIENT_ID=your_client_id
GOOGLE_DRIVE_CLIENT_SECRET=your_client_secret
```

## Usage

- Read/write Google Docs
- Access Google Sheets
- List and search Drive files
- Download file content
- Manage permissions

## Security

- OAuth tokens are scoped to Drive access only
- Tokens expire and require re-authentication
- Never share credentials

## First-time Setup

On first use, you'll be prompted to authorize via browser. The OAuth flow will open automatically.
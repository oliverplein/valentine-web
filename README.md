# valentine-web

A retro late-90s/early-2000s "Will you be my Valentine?" page. Features a big YES button, and No/Maybe buttons that run away from the cursor so they can never be clicked.

## URL Parameters

Personalize the page by passing `from` and `to` as query parameters:

| Parameter | Description | Default |
|-----------|-------------|---------|
| `to` | The name of the person being asked | `You` |
| `from` | The name of the person asking | `Someone` |

Example: `https://your-domain.com/?from=Brad&to=Alison

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Docker

Build and run locally:

```bash
docker build -t valentine-web .
docker run -p 3000:3000 valentine-web
```

A GitHub Actions workflow is included to build and push the image to `ghcr.io`. It is configured for manual triggering via `workflow_dispatch` — run it from the Actions tab or with:

```bash
gh workflow run "Build and Push to GHCR"
```

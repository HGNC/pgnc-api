````instructions
---
description: Development workflow guidelines for the NestJS API service
applyTo: "**/*"
---

# API Service Development Workflow (NestJS)

This document outlines development workflow guidelines for the API service, built with NestJS and deployed via Docker.

## Service Overview

- Framework: NestJS (TypeScript)
- Package manager: npm
- Dockerized for production
- Health endpoint: `/health`

## Local Development

- Use the top-level docker-compose to run the stack, which builds the API from `api/`.
- Environment variables are passed through docker-compose from `.env`.

### Build Locally

```bash
# From repo root
DOCKER_BUILDKIT=1 docker build -t pgnc-api:local api/
```

### Run Locally (compose)

```bash
# From repo root
docker compose up api
```

## Release Process

The API service uses automated semantic versioning and releases:

- Commits to the `release` branch trigger releases
- Manual releases can be triggered via GitHub Actions workflow dispatch
- Each release creates:
  - A GitHub Release with notes
  - Docker images pushed to `ghcr.io/hgnc/pgnc-api` with tags:
    - Semantic version (e.g., `v1.0.0`)
    - `latest`
    - `release`

## Version Management

- Patch: bug fixes, minor internal changes
- Minor: new endpoints (backward compatible)
- Major: breaking API changes, auth model changes

## Best Practices

- Use DTOs with class-validator for input validation
- Apply guards and interceptors for auth and logging
- Keep controller handlers thin; delegate to services
- Add health checks and basic observability
- Include proper HTTP status codes and error handling

## Testing

- Unit tests for services and controllers
- Integration tests for critical endpoints (optionally against docker-compose stack)
- Consider contract tests for external dependencies
````

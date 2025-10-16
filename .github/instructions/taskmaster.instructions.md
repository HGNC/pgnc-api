````instructions
---
description: Taskmaster integration guidelines for API service development
applyTo: "**/*"
---

# Taskmaster Integration for API (NestJS)

Use Taskmaster to manage API features, refactors, and releases.

## Common Task Areas

- New endpoints and modules
- Auth and RBAC improvements
- Validation and DTO refactors
- Performance and caching
- Observability (health, metrics, logs)

## Example Task Structure

```json
{
  "id": 1,
  "title": "Add /genes/search endpoint",
  "description": "Create a search endpoint with pagination and filters",
  "status": "pending",
  "priority": "high",
  "subtasks": [
    { "id": 1, "title": "Define DTOs and validation" },
    { "id": 2, "title": "Implement service method" },
    { "id": 3, "title": "Add controller and route" },
    { "id": 4, "title": "Write unit tests" }
  ]
}
```

## Best Practices

- Keep controllers thin; test services thoroughly
- Validate all inputs; return consistent error shapes
- Add e2e tests for critical flows
- Ensure health check reflects real dependencies
````

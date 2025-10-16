````instructions
---
description: Guidelines for continuously improving API rules based on NestJS best practices
applyTo: "**/*"
---

# Self-Improvement Guidelines for API (NestJS)

## Rule Improvement Triggers

- Repeated patterns in controllers/services that can be standardized
- Validation or error-handling issues appearing frequently
- New security or performance practices for NestJS
- Observability/logging improvements

## Analysis Process

- Review controller and service patterns across modules
- Ensure DTO validation (class-validator) is consistently applied
- Confirm global pipes/filters/interceptors are configured
- Check for consistent error shapes and HTTP codes

## Rules to Encourage

- Use DTOs for all request payloads with validation decorators
- Centralize exception handling via filters
- Apply guards for auth, roles, and permissions
- Use ConfigService for environment variables with schema validation
- Add structured logging (request IDs, latency)

## Example Pattern

```ts
@Post()
create(@Body() dto: CreateItemDto) {
  return this.service.create(dto);
}
```

## Continuous Improvement

- Add examples from real modules in the codebase
- Update rules after framework upgrades
- Monitor performance regressions and address with caching/DB optimizations
````

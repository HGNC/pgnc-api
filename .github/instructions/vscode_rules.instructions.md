````instructions
---
description: VS Code rules guidance for API repository (NestJS/TypeScript)
applyTo: ".github/instructions/*.instructions.md"
---

# VS Code Rules for API (NestJS)

## Rule Structure

```markdown
---
description: Clear, one-line description of what the rule enforces
globs: api/src/**/*.ts, api/**/*.md, api/Dockerfile
alwaysApply: boolean
---

- **Main Points in Bold**
  - Sub-points with details
  - Examples and explanations
```

## TypeScript/NestJS Examples

```ts
// ✅ DO: Use DTOs and validation
export class CreateItemDto {
  @IsString()
  name!: string;
}

// ❌ DON'T: Use 'any' or untyped payloads
create(body: any) {}
```

## Best Practices

- Enforce strict TypeScript settings
- Use ESLint with NestJS recommended config
- Keep modules small and focused
- Prefer constructor injection over property injection
- Document routes and DTOs where helpful
````

generate-openapi:
	cd backend && pnpm generate:openapi

generate-code:
	cd packages/api-types/ && pnpm code-gen

# Testing

- Unit: Jest/Vitest for isolated logic.
- API: Supertest against Express endpoints.
- Integration: API + MySQL test environment.
- UI: Playwright for login/search/property flows.
- Smoke: `/health`, homepage and critical API endpoints after deployment.
- Regression: run the complete automated suite before release.

Suggested release gates: all unit/API tests pass, production build succeeds, container scan has no critical vulnerabilities, smoke tests pass.

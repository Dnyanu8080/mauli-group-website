# DevOps workflow

1. Developer creates Jira issue and `feature/*` branch.
2. Commit and push triggers GitHub Actions.
3. Pull request runs lint, tests and builds.
4. Merge to `develop` triggers Jenkins staging path.
5. Jenkins builds immutable Docker images and performs security validation.
6. Staging smoke test validates health and critical UI flows.
7. Main branch requires explicit production approval.
8. Production deployment uses registry images, managed secrets, migrations and HTTPS.

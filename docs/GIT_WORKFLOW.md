# Git workflow

```bash
git init
git remote add origin <URL>
git checkout -b develop
git checkout -b feature/property-search
git add .
git commit -m "feat: add property search"
git push -u origin feature/property-search
```

Merge feature branches into develop through pull requests. Release develop→main after testing. Use `bugfix/*` for normal defects and `hotfix/*` for production defects.

Commit examples: `feat: add agent dashboard`, `fix: resolve property filter issue`, `test: add property API tests`, `docs: update deployment documentation`, `ci: configure Jenkins pipeline`.

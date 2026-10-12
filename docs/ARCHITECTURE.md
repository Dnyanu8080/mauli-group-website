# Architecture

```text
User Browser
    │ HTTPS
    ▼
Nginx / React SPA
    │ REST / JSON
    ▼
Express API ── JWT/RBAC ── Validation/Security middleware
    │
    ▼
MySQL 8 (relational, indexed, persistent volume)

GitHub → GitHub Actions → Jenkins → Container Registry → Staging → Approval → Production
                         └→ Trivy/security validation

Terraform provisions the cloud foundation for a later AWS deployment.
```

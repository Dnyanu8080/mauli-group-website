# Deployment

## Local
`docker compose up --build`

## Staging
Use a Linux Jenkins agent with Docker access. Store registry credentials, DB password and JWT secret in Jenkins credentials, not source. Configure a domain and TLS certificate before exposing the service.

## AWS target architecture
CloudFront/ALB → frontend container + backend container → RDS MySQL. Use ECR for images, Secrets Manager/SSM for secrets, CloudWatch for logs, Route 53 + ACM for DNS/TLS. Terraform under `terraform/` is a foundation and intentionally avoids provisioning expensive production resources automatically.

## Production checklist
- HTTPS enforced
- Strong JWT secret and DB credentials
- Restricted security groups
- Backups enabled
- Database migrations versioned
- Image vulnerability scan passed
- Health checks and rollback plan tested
- Logs/metrics/alerts configured

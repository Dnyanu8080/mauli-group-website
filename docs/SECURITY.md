# Security

EstatePro uses bcrypt password hashing, JWT authorization, role checks, Zod input validation, Helmet security headers, CORS restrictions, rate limiting and parameterized MySQL queries.

Production additions: rotate secrets, use a cloud secret manager, enforce HTTPS, set secure cookie/token strategy where appropriate, add audit logs, dependency scanning, SAST/DAST and database least-privilege accounts. Never commit `.env` files or production credentials.

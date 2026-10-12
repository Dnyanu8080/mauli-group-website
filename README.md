# EstatePro

Production-oriented full-stack real estate platform and DevOps portfolio project.

## 1. Overview
EstatePro provides property discovery, property details, customer authentication, enquiries, dashboards and a DevOps-ready delivery pipeline.

## 2. Features
- Premium responsive React UI
- Property search/filter/pagination
- JWT authentication and role model
- MySQL relational schema
- Customer enquiry workflow
- Agent/admin-ready APIs
- Docker Compose
- Jenkins + GitHub Actions CI
- Terraform AWS foundation
- Jest/Supertest and Playwright test structure

## 3. Technologies
React, Vite, Node.js, Express, MySQL 8, JWT, bcrypt, Docker, Jenkins, GitHub Actions, Terraform, Jira.

## 4. Architecture
Browser → Nginx/React → Express REST API → MySQL. CI validates source and container builds; Jenkins handles environment promotion. See `docs/ARCHITECTURE.md`.

## 5. Installation
Prerequisites: Node.js 22+, MySQL 8+, Git, Docker Desktop.

```bash
git clone <your-github-url>
cd estatepro
cd backend && npm install
cd ../frontend && npm install
```

## 6. Environment variables
Copy `backend/.env.example` to `backend/.env` and set DB credentials and a strong JWT secret.

## 7. Database setup
Create the database and tables with `database/schema.sql`, or use Docker Compose which initializes MySQL automatically.

## 8. Run locally
Terminal 1: `cd backend && npm run dev`
Terminal 2: `cd frontend && npm run dev`
Open `http://localhost:5173`.

## 9. Docker setup
Create a root `.env` with `DB_PASSWORD`, `MYSQL_ROOT_PASSWORD`, and `JWT_SECRET`, then run `docker compose up --build`. Open `http://localhost:8080`.

## 10. Git workflow
Use `main`, `develop`, `feature/*`, `bugfix/*`, `hotfix/*`. See `docs/GIT_WORKFLOW.md`.

## 11. Jira workflow
Project key: `ESTATEPRO`. Epics/backlog are documented in `docs/JIRA_BACKLOG.md`.

## 12. Jenkins setup
Create a Pipeline job connected to GitHub. Add credentials IDs referenced by `Jenkinsfile`, especially `estatepro-registry`.

## 13. CI/CD
GitHub Actions validates PRs/pushes. Jenkins builds images, scans them, deploys staging, runs smoke checks and pauses for production approval.

## 14. Testing
Backend: `npm --prefix backend test`. Frontend: `npm --prefix frontend test`. UI: install Playwright and run `npx playwright test --config tests/ui/playwright.config.js`.

## 15. Production deployment
Use Terraform to provision the cloud foundation, push immutable images to a registry, configure secrets in the cloud secret manager, run database migrations, then deploy behind HTTPS/load balancing. Never commit secrets.

## Demo accounts after seed
Admin: `admin@estatepro.local` / `Password@123`
Agent: `agent@estatepro.local` / `Password@123`
Change these credentials immediately outside local development.

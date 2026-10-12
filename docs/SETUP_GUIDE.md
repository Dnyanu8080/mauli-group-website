# Step-by-step setup

## 1. Create project
Open Command Prompt/PowerShell and run:

```bat
mkdir estatepro
cd estatepro
```
Then copy this repository's folders/files into the directory.

## 2. Install dependencies
```bat
cd backend
npm install
cd ..\frontend
npm install
cd ..
```

## 3. MySQL
Option A: Docker Compose (recommended): `docker compose up --build`.
Option B: install MySQL 8, create user/database, copy `backend/.env.example` to `backend/.env`, then run `npm run migrate` from backend.

## 4. Run backend
```bat
cd backend
npm run dev
```
API: http://localhost:5000/health

## 5. Run frontend
In another terminal:
```bat
cd frontend
npm run dev
```
Open http://localhost:5173.

## 6. Seed local demo data
`cd backend` then `npm run seed`.

## 7. GitHub
```bat
git init
git add .
git commit -m "chore: initialize EstatePro"
git branch -M main
git remote add origin https://github.com/<your-user>/estatepro.git
git push -u origin main
git checkout -b develop
git push -u origin develop
```

## 8. Jira
Create project `ESTATEPRO`, create the 12 epics from `JIRA_BACKLOG.md`, then create stories beneath each epic with acceptance criteria and story points. Link pull requests to Jira issue keys.

## 9. Docker
```bat
docker compose up --build
docker compose ps
docker compose logs -f backend
```
Open http://localhost:8080.

## 10. Jenkins
Create a Pipeline job, connect the GitHub repository, add Docker/registry credentials, and point the pipeline to `Jenkinsfile`. Configure webhooks from GitHub to Jenkins.

## 11. CI/CD
GitHub Actions runs automatically on push/PR to main/develop. Jenkins should be used for environment deployment and approval.

## 12. Testing
Backend: `npm --prefix backend test`. Frontend: `npm --prefix frontend test`. For UI: `npx playwright install` then `npx playwright test --config tests/ui/playwright.config.js`.

## 13. Deployment
Provision the chosen cloud platform using Terraform after filling in provider credentials and production networking. Push versioned images to ECR/GHCR/another registry. Configure secrets and deploy containers behind HTTPS.

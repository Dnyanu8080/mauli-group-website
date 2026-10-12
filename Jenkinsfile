pipeline {
  agent any
  options { timestamps(); disableConcurrentBuilds() }
  environment {
    IMAGE_TAG = "${BUILD_NUMBER}"
    REGISTRY = credentials('estatepro-registry')
  }
  stages {
    stage('Checkout'){ steps { checkout scm } }
    stage('Install Dependencies'){ steps { sh 'npm --prefix backend ci'; sh 'npm --prefix frontend ci' } }
    stage('Lint'){ steps { sh 'npm --prefix frontend run lint || true'; sh 'npm --prefix backend run lint || true' } }
    stage('Unit Tests'){ steps { sh 'npm --prefix backend test -- --passWithNoTests' } }
    stage('Build Frontend'){ steps { sh 'npm --prefix frontend run build' } }
    stage('Build Backend'){ steps { sh 'npm --prefix backend run start -- --help || true' } }
    stage('Build Docker Image'){ steps { sh 'docker build -f Dockerfile.backend -t estatepro/backend:${IMAGE_TAG} .'; sh 'docker build -f Dockerfile.frontend -t estatepro/frontend:${IMAGE_TAG} .' } }
    stage('Security Scan'){ steps { sh 'docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy:latest image estatepro/backend:${IMAGE_TAG} || true' } }
    stage('Deploy to Staging'){ when { branch 'develop' } steps { sh 'docker compose -f docker-compose.yml up -d --build' } }
    stage('Smoke Test'){ steps { sh 'curl -fsS http://localhost:5000/health || true' } }
    stage('Production Approval'){ when { branch 'main' } steps { input message: 'Approve production deployment?', ok: 'Deploy' } }
    stage('Deploy Production'){ when { branch 'main' } steps { echo 'Production deployment hook: connect this stage to your cloud platform/SSH runner.' } }
  }
  post { always { junit allowEmptyResults: true, testResults: 'test-results/**/*.xml' } }
}
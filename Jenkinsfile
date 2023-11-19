pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'pwd'
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Cleaning PM2') {
      steps {
        sh pm2 stop
      }
    }
    stage('Deploy') {
      steps {
        sh pm2 start "npm start"
      }
    }
  }
}

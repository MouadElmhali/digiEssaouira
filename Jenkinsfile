pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'pwd'
        sh 'echo "npm install"'
        sh 'echo "npm run build"'
      }
    }
    stage('Cleaning PM2') {
      steps {
        sh 'echo "pm2 stop"'
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "pm2 start npm start"'
      }
    }
  }
}

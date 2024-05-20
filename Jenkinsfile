pipeline {
    agent any

    environment {
        // Define Docker image name and tag
        DOCKER_IMAGE = 'simple-node-app'
        DOCKER_TAG = 'latest'
    }

    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout'
                // Checkout the source code from the repository with a specified branch
                git branch: 'without-mysql', url: 'https://github.com/boazfr1/simple-node-app-for-open-shift.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Install Dependencies'
                // Install npm dependencies
                // sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'test'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Build Docker Image'
                sh 'docker build . -t ${DOCKER_IMAGE}:${DOCKER_TAG}'                
            }
        }
        stage('run the docker') {
            steps {
               echo 'docker run'
               sh 'docker run -d ${DOCKER_IMAGE}:${DOCKER_TAG} -p 8081:8081'
            }
        }
    }

    post {
        always {
            echo 'Hello boaz!'
            // Clean up the workspace
            cleanWs()
        }
        success {
            // Notify success (optional, requires a notification tool like Slack or email)
            echo 'Build succeeded!'
        }
        failure {
            // Notify failure (optional, requires a notification tool like Slack or email)
            echo 'Build failed!'
        }
    }
}

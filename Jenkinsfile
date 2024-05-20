pipeline {
    agent any

    environment {
        // Define Docker image name and tag
        DOCKER_IMAGE = 'simple-node-app'
        DOCKER_TAG = 'latest'
    }

    triggers {
        pollSCM('H/5 * * * *')
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from the repository
                git 'https://github.com/boazfr1/simple-node-app-for-open-shift.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'test'
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Build Docker Image') {
            steps {
                // Build the Docker image
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }
        stage('Push Docker Image') {
            steps {
               echo 'docker push'
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

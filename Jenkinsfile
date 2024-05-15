pipeline {
    agent any

    stages {
         stage('Build UserServer') {
            steps {
                echo "⚗️⚗️ build User start"
                sh '''
                    APP_NAME=test-user
                    IMAGE=test-user
                    PORT=7010

                    cd backend/UserServer/

                    chmod +x gradlew
                    ./gradlew clean bootJar

                    # Application Stop
                    if [ "$(docker ps -a -q -f name=$APP_NAME)" ]; then
                        echo -n "🚫 Stop Docker Container : "
                        docker rm -f $APP_NAME
                    else
                        echo "🚫 There is no running container named $APP_NAME"
                    fi

                    # Image Build
                    if [ "$(docker images -a -q $IMAGE)" ]; then
                        echo "🗑️ Remove Docker Image : "
                        docker image rm $IMAGE
                    else
                        echo "🗑️ There is no Docker image named $IMAGE"
                    fi
                    docker build . -t $IMAGE
                '''
            }
        }

         stage('Build frontend') {
            steps {
                echo "⚗️⚗️ build React start"
                sh '''
                    APP_NAME=test-frontend
                    IMAGE=test-frontend
                    PORT=3000

                    cp -v /var/jenkins_home/.env ./frontend

                    cd frontend
                    cat .env
                    npm install
                    npm run build

                    # Application Stop
                    if [ "$(docker ps -a -q -f name=$APP_NAME)" ]; then
                        echo -n "🚫 Stop Docker Container : "
                        docker rm -f $APP_NAME
                    else
                        echo "🚫 There is no running container named $APP_NAME"
                    fi

                    # Image Build
                    if [ "$(docker images -a -q $IMAGE)" ]; then
                        echo "🗑️ Remove Docker Image : "
                        docker image rm $IMAGE
                    else
                        echo "🗑️ There is no Docker image named $IMAGE"
                    fi
                    docker build . -t $IMAGE
                '''
            }
        }

        stage('Build Match') {
            steps {
                echo "⚗️⚗️ build Match start"
                sh '''
                    APP_NAME=test-match
                    IMAGE=test-match
                    PORT=7040

                    cd backend/Match/

                    chmod +x gradlew
                    ./gradlew clean bootJar

                    # Application Stop
                    if [ "$(docker ps -a -q -f name=$APP_NAME)" ]; then
                        echo -n "🚫 Stop Docker Container : "
                        docker rm -f $APP_NAME
                    else
                        echo "🚫 There is no running container named $APP_NAME"
                    fi

                    # Image Build
                    if [ "$(docker images -a -q $IMAGE)" ]; then
                        echo "🗑️ Remove Docker Image : "
                        docker image rm $IMAGE
                    else
                        echo "🗑️ There is no Docker image named $IMAGE"
                    fi
                    docker build . -t $IMAGE
                '''
            }
        }

        stage('Build Survey') {
            steps {
                echo "⚗️⚗️ build Survey start"
                sh '''
                    APP_NAME=test-survey
                    IMAGE=test-survey
                    PORT=7020

                    cd backend/Survey/

                    chmod +x gradlew
                    ./gradlew clean bootJar

                    # Application Stop
                    if [ "$(docker ps -a -q -f name=$APP_NAME)" ]; then
                        echo -n "🚫 Stop Docker Container : "
                        docker rm -f $APP_NAME
                    else
                        echo "🚫 There is no running container named $APP_NAME"
                    fi

                    # Image Build
                    if [ "$(docker images -a -q $IMAGE)" ]; then
                        echo "🗑️ Remove Docker Image : "
                        docker image rm $IMAGE
                    else
                        echo "🗑️ There is no Docker image named $IMAGE"
                    fi
                    docker build . -t $IMAGE
                '''
            }
        }



        stage('Build Gateway') {
            steps {
                echo "⚗️⚗️ build Gateway start"
                sh '''
                    APP_NAME=test-gateway
                    IMAGE=test-gateway
                    PORT=7000

                    cd backend/Gateway/

                    chmod +x gradlew
                    ./gradlew clean bootJar

                    # Application Stop
                    if [ "$(docker ps -a -q -f name=$APP_NAME)" ]; then
                        echo -n "🚫 Stop Docker Container : "
                        docker rm -f $APP_NAME
                    else
                        echo "🚫 There is no running container named $APP_NAME"
                    fi

                    # Image Build
                    if [ "$(docker images -a -q $IMAGE)" ]; then
                        echo "🗑️ Remove Docker Image : "
                        docker image rm $IMAGE
                    else
                        echo "🗑️ There is no Docker image named $IMAGE"
                    fi
                    docker build . -t $IMAGE
                '''
            }
        }

        stage('Build Board') {
            steps {
                echo "⚗️⚗️ build Board start"
                sh '''
                    APP_NAME=test-board
                    IMAGE=test-board
                    PORT=7030

                    cd backend/Board/

                    chmod +x gradlew
                    ./gradlew clean bootJar

                    # Application Stop
                    if [ "$(docker ps -a -q -f name=$APP_NAME)" ]; then
                        echo -n "🚫 Stop Docker Container : "
                        docker rm -f $APP_NAME
                    else
                        echo "🚫 There is no running container named $APP_NAME"
                    fi

                    # Image Build
                    if [ "$(docker images -a -q $IMAGE)" ]; then
                        echo "🗑️ Remove Docker Image : "
                        docker image rm $IMAGE
                    else
                        echo "🗑️ There is no Docker image named $IMAGE"
                    fi
                    docker build . -t $IMAGE
                '''
            }
        }

        stage('Build Crawl') {
            steps {
                echo "⚗️⚗️ build Crawl start"
                sh '''
                    APP_NAME=test-crawl
                    IMAGE=test-crawl
                    PORT=7050

                    cd backend/Crawl/

                    chmod +x gradlew
                    ./gradlew clean bootJar

                    # Application Stop
                    if [ "$(docker ps -a -q -f name=$APP_NAME)" ]; then
                        echo -n "🚫 Stop Docker Container : "
                        docker rm -f $APP_NAME
                    else
                        echo "🚫 There is no running container named $APP_NAME"
                    fi

                    # Image Build
                    if [ "$(docker images -a -q $IMAGE)" ]; then
                        echo "🗑️ Remove Docker Image : "
                        docker image rm $IMAGE
                    else
                        echo "🗑️ There is no Docker image named $IMAGE"
                    fi
                    docker build . -t $IMAGE
                '''
            }
        }

        stage('Service start') {
            steps {
                 script {
                    sh "docker-compose up -d --build"
                }
            }
            post{
                success {
                    echo 'Success Service Start'
                }
                failure {
                    error 'Fail Service Start'
                }
            }
        }
    }
}
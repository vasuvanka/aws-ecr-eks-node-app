# aws-ecr-eks-node-app
>build and deploy docker node app on eks

#### Steps to deploy node app onto EKS using ECR
    Create node app with dockerfile
    Create IAM user with ECR full access permission
    Create ECR 
    Do following steps to push docker image to ecr
        login : aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <username>
        build : docker build -t <image-name> .
        tag : docker tag <image-name>:latest <ecr-url>/<image-name>:latest
        push : docker push <ecr-url>/<image-name>:latest
    Create ECS cluster using Fargate
    Add Docker image URI
    Configure load balancer
    Add Service
    Add Log watcher
    Create Cluster and access Public domain URI from load balancer.

## Hola, all set
    



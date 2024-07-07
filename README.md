# Fargate ALB API

This is an example project on how to deploy an API with ECS Fargate and ALB, using CDK.
The API uses Node 20 and fastify.

## Testing locally

```sh
npm install
npm run build
npm run start-server
```

## Deploying for the first time
If you are setting up CDK for the first time you first have to bootstrap it by typing:
```sh
npm install
npm run build
cdk bootstrap
```

## Deploying infra

```sh
npm run build
npm run cdk deploy
```

## Destroying infra

```sh
npm run cdk destroy
```

## Additional info

The `cdk.json` file tells the CDK Toolkit how to execute your app.

### Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

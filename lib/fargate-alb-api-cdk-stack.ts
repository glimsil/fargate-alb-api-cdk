import * as cdk from 'aws-cdk-lib';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as ecsPatterns from 'aws-cdk-lib/aws-ecs-patterns';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class FargateAlbApiCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const loadBalancedFargateService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'Service', {
      memoryLimitMiB: 512, // recommend 1024
      cpu: 256, // recommend 512
      taskImageOptions: {
        image: ecs.ContainerImage.fromAsset('.'),
      },
    });
    
    loadBalancedFargateService.targetGroup.configureHealthCheck({
      path: '/',
    });
  }
}

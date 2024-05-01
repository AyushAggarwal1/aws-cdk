"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const integ = require("@aws-cdk/integ-tests-alpha");
const aws_dynamodb_1 = require("aws-cdk-lib/aws-dynamodb");
const nodejs_aspect_1 = require("../lib/nodejs-aspect");
/**
 * This test creates a stack and changes termination protection with the setter.
 */
//Dynamo DB
class NodejsAspectTest extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // Test for Lambda provider
        new aws_dynamodb_1.Table(this, 'Table', {
            partitionKey: { name: 'hashKey', type: aws_dynamodb_1.AttributeType.STRING },
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            replicationRegions: ['us-east-2'],
        });
    }
}
const app = new cdk.App();
const stack = new NodejsAspectTest(app, 'NodejsStack', { terminationProtection: false });
cdk.Aspects.of(stack).add(nodejs_aspect_1.RuntimeAspect.nodejs20());
new integ.IntegTest(app, 'stack', { testCases: [stack] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcuYXNwZWN0LWR5bmFtby1kYi1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLmFzcGVjdC1keW5hbW8tZGItc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsb0RBQW9EO0FBRXBELDJEQUFnRTtBQUNoRSx3REFBcUQ7QUFFckQ7O0dBRUc7QUFFSCxXQUFXO0FBQ1gsTUFBTSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUV0QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLDJCQUEyQjtRQUMzQixJQUFJLG9CQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUN2QixZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSw0QkFBYSxDQUFDLE1BQU0sRUFBRTtZQUM3RCxhQUFhLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPO1lBQ3hDLGtCQUFrQixFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ2xDLENBQUMsQ0FBQztLQUVKO0NBQ0Y7QUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxhQUFhLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBRXpGLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDcEQsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0ICogYXMgaW50ZWcgZnJvbSAnQGF3cy1jZGsvaW50ZWctdGVzdHMtYWxwaGEnO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cy9saWIvY29uc3RydWN0JztcbmltcG9ydCB7IEF0dHJpYnV0ZVR5cGUsIFRhYmxlIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWR5bmFtb2RiJztcbmltcG9ydCB7IFJ1bnRpbWVBc3BlY3QgfSBmcm9tICcuLi9saWIvbm9kZWpzLWFzcGVjdCc7XG5cbi8qKlxuICogVGhpcyB0ZXN0IGNyZWF0ZXMgYSBzdGFjayBhbmQgY2hhbmdlcyB0ZXJtaW5hdGlvbiBwcm90ZWN0aW9uIHdpdGggdGhlIHNldHRlci5cbiAqL1xuXG4vL0R5bmFtbyBEQlxuY2xhc3MgTm9kZWpzQXNwZWN0VGVzdCBleHRlbmRzIGNkay5TdGFjayB7XG5cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIC8vIFRlc3QgZm9yIExhbWJkYSBwcm92aWRlclxuICAgIG5ldyBUYWJsZSh0aGlzLCAnVGFibGUnLCB7XG4gICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogJ2hhc2hLZXknLCB0eXBlOiBBdHRyaWJ1dGVUeXBlLlNUUklORyB9LFxuICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWSxcbiAgICAgIHJlcGxpY2F0aW9uUmVnaW9uczogWyd1cy1lYXN0LTInXSxcbiAgICB9KTtcblxuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG5jb25zdCBzdGFjayA9IG5ldyBOb2RlanNBc3BlY3RUZXN0KGFwcCwgJ05vZGVqc1N0YWNrJywgeyB0ZXJtaW5hdGlvblByb3RlY3Rpb246IGZhbHNlIH0pO1xuXG5jZGsuQXNwZWN0cy5vZihzdGFjaykuYWRkKFJ1bnRpbWVBc3BlY3Qubm9kZWpzMjAoKSk7XG5uZXcgaW50ZWcuSW50ZWdUZXN0KGFwcCwgJ3N0YWNrJywgeyB0ZXN0Q2FzZXM6IFtzdGFja10gfSk7Il19
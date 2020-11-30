// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1akm2m48v294u0obotg7q3ul94",     // CognitoClientID
  "api_base_url": "https://sx3h0yzz25.execute-api.us-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.us-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d15wl1mg289jl6.amplifyapp.com"                                      // AmplifyURL
};

export default config;

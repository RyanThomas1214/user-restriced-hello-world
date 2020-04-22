Clone this repo and run these commands:

> npm i client-oauth2


After the external dependencies are installed you can run the code using 

> node snippet2.js

Once running go to http://localhost:9090/login and enter the NHS login details. This should return a page containing your access token.
Use this token in the following command:

> curl -X GET -H "Authorization: Bearer <paste your access_token here>" https://internal-dev.api.service.nhs.uk/hello-world/hello/user

If all worked successfully you should be greeted with the following:
{
  "message": "Hello User!"
}

const ClientOAuth2 = require('client-oauth2')
const express = require('express')
const app = express()

app.listen(9090)

const clientId = "Too5BdPayTQACdw1AJK1rD4nKUD0Ag7J"
const clientSecret = "wi7sCuFSgQg34ZWO"

const client = new ClientOAuth2({
    clientId,
    clientSecret,
    redirectUri: 'https://nhsd-apim-testing-internal-dev.herokuapp.com/callback',
    authorizationUri: 'https://internal-dev.api.service.nhs.uk/oauth2/authorize',
    accessTokenUri: "https://internal-dev.api.service.nhs.uk/oauth2/token",
    response_type: 'code',
})

app.get('/auth', (req,res) => {
    var uri = client.code.getUri()
    res.redirect(uri + 'hello')
})

app.get('/auth/callback', function (req, res) {
    console.log('hello')
    client.code.getToken(req.originalUrl)
      .then(function (user) {
        console.log(user) 
   
        user.refresh().then(function (updatedUser) {
          console.log(updatedUser !== user) 
          console.log(updatedUser.accessToken)
        })
   
        user.sign({
          method: 'get',
          url: 'https://internal-dev.api.service.nhs.uk/oauth2/authorize'
        })
   
        return res.send(user.accessToken)
      })
  })

